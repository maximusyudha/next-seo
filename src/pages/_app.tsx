import seoConfig from '@/containers/SEO/components/next-seo.config';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from "next-seo";


export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
   <Component {...pageProps} />
   <DefaultSeo {...seoConfig} />
   </> 
   );
}
