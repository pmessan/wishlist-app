import Item from '../components/Item';
import List from '../components/List';
import Layout from '../components/Layout';
import Intro from '../components/Intro';
import items from '../data/items'


export default function Home() {
  return (
    <Layout>
      <Intro />
      <div className="grid xl:grid-cols-3 px-8 py-40 justify-center">
        <List title="What I want">
          {items.map((item, index) => (
            <Item key={index} id={index} wishlistItem={item} />
          ))}
        </List>
        <List title="Buying...">
          {items.map((item, index) => (
            <Item key={index} id={index} wishlistItem={item} />
          ))}
        </List>
        <List title="Bought">
          {items.map((item, index) => (
            <Item key={index} id={index} wishlistItem={item} />
          ))}
        </List>
      </div>
    </Layout>
  );
}
