import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>

      <div >
      <h1 className={styles.title}>HomePage</h1> 
      <p className={styles.text}>lorem ipsum dolor sit amet, consectetur adip</p>
      <p className={styles.text}>lorem ipsum dolor sit amet, consectetur adip</p>

      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
      </div>
    </>
  )
}
