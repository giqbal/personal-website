import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>g0h@rd</title>
        <meta name="description" content="Personal website for Gohar Iqbal" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my decentralised wesbite
        </h1>
      </main>
    </div>
  )
}
