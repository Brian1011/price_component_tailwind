import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PriceComponent from './components/price';

export default function Home() {
  return (
    <div>
    <Head>
      <title>Create Next App</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="">
       <PriceComponent/>
    </div>
  </div>
  );
}
