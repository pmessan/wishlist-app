/* eslint-disable react/no-array-index-key */
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Link from 'next/link';
import Item from '../components/Item';
import List from '../components/List';
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

      <div className="grid xl:grid-cols-3 px-8 py-40 justify-center">
        <List title="What I want">
          {(wishitems.filter((wishItem) => wishItem.state === 'w')).map((item, index) => (
            <Item key={index} id={index} wishlistItem={item} />
          ))}
        </List>
        <List title="Buying...">
          {(wishitems.filter((wishItem) => wishItem.state === 'r')).map((item, index) => (
            <Item key={index} id={index} wishlistItem={item} />
          ))}
        </List>
        <List title="Bought">
          {(wishitems.filter((wishItem) => wishItem.state === 'b')).map((item, index) => (
            <Item key={index} id={index} wishlistItem={item} />
          ))}
        </List>
      </div>

      <div className="flex flex-row justify-center space-x-5">
        <FavoriteBorderIcon style={{ fontSize: '2.25rem', color: 'rgb(243,244,246)' }} />
        <Header title="Wishlist" />
      </div>

      <div className="w-auto h-auto bg-gray-300 container mx-64 mb-14 xl:mb-12 rounded-md p-10 flex flex-wrap gap-x-4 gap-y-4">
        {(wishitems.filter((wishItem) => wishItem.state === 'w')).map((item, index) => (
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
