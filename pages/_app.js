import 'bootstrap/dist/css/bootstrap.css'
import '../css/styles.css'
import dynamic from 'next/dynamic'


const bootstrapjs = dynamic(
  () => import('bootstrap/dist/js/bootstrap.js'),
  { ssr: false }
)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
