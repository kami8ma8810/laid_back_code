/**
 * @type {import('~/types').BlogConfig}
 */
const BLOG = {
  title: 'Laid Back Code',
  author: 'Hayato Kamiyama',
  twitterId: 'jookalubi24',
  email: 'kami8ma8810@gmail.com',
  link: 'https://laid-back-code.vercel.app',
  description: 'カミヤマハヤトのアウトプット用インデックスサイト',
  lang: 'ja-JP', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: 'light', // ['light', 'dark'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#faf8f7', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#292626', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  bioBlogSlug: 'bio-blog',
  bioProjectsSlug: 'bio-projects',
  since: 2023, // If leave this empty, current year will be used.
  // postsPerPage: 10,
  postsPerPage: 5,
  sortByDate: true,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: 'https://simple-og-image.vercel.app', // The link to generate OG image, don't end with a slash
  // detail: https://github.com/yokinist/og-image/blob/main/api/_lib/types.ts#L2-L12
  socialLink: 'https://twitter.com/jookalubi24',
  seo: {
    keywords: ['jookalubi'],
    googleSiteVerification: '', // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: 'ga', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '', // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '', // e.g: G-XXXXXXXXXX
    },
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: '', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: 'for-gitalk', // The repository of store comments
      owner: '',
      clientID: '',
      clientSecret: process.env.GITALK_CLIENT_SECRET,
      admin: [''],
      id: '', // Ensure uniqueness and length less than 50
      distractionFreeMode: false,
    },
    utterancesConfig: {
      repo: '',
    },
    cusdisConfig: {
      appId: '', // data-app-id'
      host: '', // data-host, change this if you're using self-hosted version
      scriptSrc: '', // change this if you're using self-hosted version
    },
  },
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};
// export default BLOG
module.exports = BLOG;
