import Layout from '../components/Layout'
import { MoralisProvider } from "react-moralis";
import '../styles/globals.css';
rewuire("dotenv").config({ path: ".env"}) ;

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <Layout>

        <Component {...pageProps} />

      </Layout>
    </MoralisProvider>
  )
}

export default MyApp
