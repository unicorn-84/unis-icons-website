import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl m-auto px-3">
      <Head>
        <title>Unis Icons</title>
        <meta name="description" content="The unis-icons website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-3xl font-bold">Unis Icons</h1>
    </div>
  );
};

export default Home;
