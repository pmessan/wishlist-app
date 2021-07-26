import Item from '../components/Item';
import List from '../components/List';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import dbConnect from '../utils/dbConnect';
import WishItem from '../models/WishItem';


export default function Home({ wishitems }) {
  return (
    <Layout>
      <Intro />
      <div className="grid xl:grid-cols-3 px-8 py-40 justify-center">
        <List title="What I want">
          {wishitems.map((item, index) => (
            <Item key={index} id={index} wishlistItem={item} />
          ))}
        </List>
        <List title="Buying...">
          {wishitems.map((item, index) => (
            <Item key={index} id={index} wishlistItem={item} />
          ))}
        </List>
        <List title="Bought">
          {wishitems.map((item, index) => (
            <Item key={index} id={index} wishlistItem={item} />
          ))}
        </List>
      </div>
    </Layout>
  );
}

/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await WishItem.find({})
  const wishitems = result.map((doc) => {
    const wishitem = doc.toObject()
    wishitem._id = wishitem._id.toString()
    return wishitem
  })

  return { props: { wishitems: wishitems } }
}
