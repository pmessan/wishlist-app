/* eslint-disable react/no-array-index-key */
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import Item from '../components/Item';
// import List from '../components/List';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import dbConnect from '../utils/dbConnect';
import WishItem from '../models/WishItem';
import Card from '../components/Card';
import Header from '../components/Header';
import { useUser } from '../lib/hooks';
import LinkButton from '../components/LinkButton';

export default function Home({ wishitems }) {
  const user = useUser();
  return (
    <Layout>
      <Intro>
        {!user && (
        <LinkButton text="Login" href="/login" styles="mt-8 right-24 btn btn-outline-light w-24" />
        )}
      </Intro>

      <div className="mt-4 md:mt-8 flex flex-row justify-center space-x-5">
        <FavoriteBorderIcon style={{ fontSize: '2.25rem', color: 'rgb(243,244,246)' }} />
        <Header title="Wishlist" />
      </div>

      <div className="sm:w-24 w-auto h-auto bg-gray-300 container mx-8 lg:mx-40 xl:mx-52 2xl:mx-80 mb-14 xl:mb-12 rounded-md p-3 flex flex-wrap gap-x-8 lg:gap-4 gap-y-8 justify-center">
        {wishitems.map((item, index) => (
          <Card key={index} id={index} wishlistItem={item} className="flex-none" />
        ))}
      </div>

      {user && (
        <div className="container mx-auto flex flex-row justify-center mt-5 mb-12">
          <LinkButton text="Add Item" href="/add-item" styles="btn btn-primary w-36 mr-8" />
          <LinkButton text="Logout" href="/api/logout" styles="btn btn-danger w-36 mr-8" />
        </div>
      )}

    </Layout>
  );
}

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await WishItem.find({});
  const wishitems = result.map((doc) => {
    const wishitem = doc.toObject();
    wishitem._id = wishitem._id.toString();
    return wishitem;
  });

  return { props: { wishitems } };
}
