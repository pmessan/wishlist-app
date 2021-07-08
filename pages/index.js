import Head from 'next/head';
import Item from '../components/Item';
import List from '../components/List';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <List title="List A">
        <Item className="w-28" itemDescription="Hello" />
        <Item className="w-28" itemDescription="Hello" />
        <Item className="w-28" itemDescription="Hello" />
      </List>
      <List title="List B">
        <Item className="w-28" itemDescription="Hello" />
        <Item className="w-28" itemDescription="Hello" />
        <Item className="w-28" itemDescription="Hello" />
      </List>
      <List title="List C">
        <Item className="w-28" itemDescription="Hello" />
        <Item className="w-28" itemDescription="Hello" />
        <Item className="w-28" itemDescription="Hello" />
      </List>
    </Layout>
  );
}
