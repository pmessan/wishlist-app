import Head from 'next/head';
import Item from '../components/Item';
import List from '../components/List';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div id="intro" className="">
        <h1 className="text-center font-extrabold mt-5 text-4xl">Welcome!</h1>
        <p className="">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
      <div className="grid grid-cols-3 mt-6">
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
      </div>
    </Layout >
  );
}
