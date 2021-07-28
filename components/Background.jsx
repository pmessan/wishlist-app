import Layout from './Layout';

export default function Background({
  children,
}) {
  return (
    <Layout>
      <div className="max-w-sm lg:max-w-2xl 2xl:max-w-3xl mx-auto px-8 py-24">
        {children}
      </div>
    </Layout>
  );
}
