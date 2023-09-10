import '../styles/globals.css'
import Script from 'next/script'
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
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
    />
    <Script
      id='gtag-init'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', '${gtag.GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });`
      }}
    />

    <Component {...pageProps} />
  </>
}

export default MyApp
