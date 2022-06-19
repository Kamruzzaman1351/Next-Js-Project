import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GitHub User Finder</title>
        <meta name="description" content="Git User Finder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 >
          Welcome to GitHub User Finder
        </h1>
      </main>
    </div>
  )
}
