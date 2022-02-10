import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Header from '../components/molecules/Header/index';
import Footer from '../components/molecules/Footer/index';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div className='main-app-wrapper'>
      <Header/>
      <div className='content-wrapper'>
        <Component {...pageProps} />
      </div>
      <Footer/>
    </div>
  )
}

export default MyApp
