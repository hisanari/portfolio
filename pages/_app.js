import '../styles/globals.css'
import * as gtag from '../src/lib/gtag'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off("routerChangeComplete", handleRouteChange)
    }
  }, [router.events]);

  return <>
    <Component {...pageProps} />
  </>
}

export default MyApp
