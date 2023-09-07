import { DefaultSeoProps } from 'next-seo';

const seoConfig: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.url.ie/',
    siteName: 'next-seo',
    title: 'Cipung Bahagia',
    description: 'Cipung Alergi Gula'
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default seoConfig;