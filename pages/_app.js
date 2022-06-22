import Layout from '../components/Layout'
import { GitProvider } from '../context/github'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <GitProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GitProvider>
    )
}

export default MyApp
