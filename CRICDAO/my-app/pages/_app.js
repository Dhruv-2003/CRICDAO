import Layout from '../components/Layout'
// import { MoralisProvider } from "react-moralis";
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    
      <Layout>

        <Component {...pageProps} />

      </Layout>

  )
}

export default MyApp
