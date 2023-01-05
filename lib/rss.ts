import Parser from 'rss-parser';

type Feed = {
  slug: string;
  title: string;
  url: string;
};

export const FEEDS: Feed[] = [
  // {
  //   slug: 'vg',
  //   title: 'VG',
  //   url: 'https://www.vg.no/rss/feed',
  // },
  {
    slug: 'zenn',
    title: 'Zenn',
    url: 'https://zenn.dev/kalubi/feed',
  },
  {
    slug: 'note',
    title: 'Note',
    url: 'https://note.com/hayato_kamiyama/rss',
  },
];

export async function getFeed(feedUrl: string) {
  const parser = new Parser();

  const feed = await parser.parseURL(feedUrl);

  return feed;
}
