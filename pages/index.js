import Head from 'next/head'
import Image from 'next/image'
import { useState, useContext } from 'react'
import styles from '../styles/Home.module.css'
import Spinner from '../components/Spinner'
import UserSearchForm from '../components/UserSearchForm'
import UserList from '../components/UserList'
import GithubContext from '../context/github'
export default function Home() {
  const {loading} = useContext(GithubContext)
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
        <UserSearchForm />
        <UserList />
      </main>
    </div>
  )
}
