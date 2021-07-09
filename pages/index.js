import Head from 'next/head';
import Item from '../components/Item';
import List from '../components/List';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import items from '../data/items'
'../img/gift.jpeg'


export default function Home() {
  return (
    <Layout>
      <Intro />
      <div className="grid md: lg:grid-cols-3 px-8 py-40">
        <List title="List A">
          {items.map((item, index) => (
            <Item key={index} id={index} wishlistItem={item} />
          ))}
        </List>
        <List title="List B">
          {items.map((item, index) => (
            <Item key={index} id={index} wishlistItem={item} />
          ))}
        </List>
        <List title="List C">
          {items.map((item, index) => (
            <Item key={index} id={index} wishlistItem={item} />
          ))}
        </List>
      </div>
    </Layout>
  );
}
