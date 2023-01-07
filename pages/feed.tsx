/*
 *
 *
 * このファイルはZenn/noteのRSSフィードには関係ない
 *
 *
 */
import { GetServerSideProps } from 'next';
import { getAllPosts } from '~/lib/notion';

// import { generateRss } from '~/lib/rss';//プッシュエラー回避のためのコメントアウト

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/xml');
  const posts = await getAllPosts({ includedPages: false });
  const recentPublishPosts = posts.slice(0, 10);
  // const xmlFeed = generateRss(recentPublishPosts);//プッシュエラー回避のためのコメントアウト
  // res.write(xmlFeed);//プッシュエラー回避のためのコメントアウト
  res.end();
  return {
    props: {},
  };
};

const feed = () => null;

export default feed;
