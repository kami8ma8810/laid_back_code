// RSSの取得
import Parser from 'rss-parser';

type FeedData = {
  id: number;
  slug: string;
  title: string;
  iconSrc: string;
  url: string;
};

// 使用したいRSSを追加していく
export const FEED_DATA: FeedData[] = [
  {
    id: 1,
    slug: 'zenn',
    title: 'Zenn',
    iconSrc: '/logo_zenn.png',
    url: 'https://zenn.dev/kalubi/feed',
  },
  {
    id: 2,
    slug: 'note',
    title: 'note',
    iconSrc: '/logo_note.png',
    url: 'https://note.com/hayato_kamiyama/rss',
  },
];

// 取得先のRSSのURLを引数にしてエクスポートする
export async function getFeed(feedUrl: string) {
  const parser = new Parser();
  // 入力されたURL先を解析
  const feed = await parser.parseURL(feedUrl);

  return feed;
}
