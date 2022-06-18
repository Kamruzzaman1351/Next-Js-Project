import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GitHub User Finder</title>
        <meta name="description" content="Git User Finder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to GitHub User Finder
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Kamruzzaman1351"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          <span className={styles.logo}>
            Kamruzzaman
          </span>
        </a>
      </footer>
    </div>
  )
}
