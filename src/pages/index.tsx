import { Button } from '@mui/material';
import Head from 'next/head';

function Home() {
  return (
    <>
      <Head>
        <title>Karnameh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=0"
        />
      </Head>
      <div>ali</div>
    </>
  );
}

Home.setPageConfig = {
  headerTitle: 'لیست سوالات',
};
export default Home;
