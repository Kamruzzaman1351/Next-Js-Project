import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Spinner from '../components/Spinner'
export default function Home() {
  const [loading, setLoading] = useState(false)
  if(loading) {
    return <Spinner />
  }

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
