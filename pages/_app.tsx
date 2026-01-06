// import { AnimatePresence } from 'framer-motion';
import 'katex/dist/katex.min.css';
// import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
// import dynamic from 'next/dynamic';
import 'prismjs/themes/prism.css';
import 'react-notion-x/src/styles.css';
import 'react-static-tweets/styles.css';
import { MaintenancePage } from '~/components';
// import BLOG from '~/blog.config';
// import { Scripts } from '~/components';
// import { LocaleProvider } from '~/lib/i18n/locale';
import '~/styles/globals.css';
import '~/styles/notion.css';

// const Ackee = dynamic(() => import('~/components/Stats/Ackee'), { ssr: false });
// const Gtag = dynamic(() => import('~/components/Stats/Gtag'), { ssr: false });

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  // メンテナンスモードの確認
  const isMaintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

  // メンテナンスモード中はメンテナンスページを表示
  if (isMaintenanceMode) {
    return <MaintenancePage />;
  }

  return <Component {...pageProps} />;
};

export default MyApp;
