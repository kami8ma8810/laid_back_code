import { format } from 'date-fns';
import { NextPage } from 'next';
import { FEED_DATA, getFeed } from '~/lib/rss';

export async function getStaticPaths() {
  return {
    paths: FEED_DATA.map((feed) => ({ params: { slug: feed.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const feed = FEED_DATA.find((feed) => feed.slug === params.slug);

  if (!feed) return;

  const detailedFeed = await getFeed(feed.url);

  return {
    props: {
      feed,
      items: detailedFeed.items,
    },
    revalidate: 1,
  };
}

const Feed: NextPage = ({ feed, items }: any) => {
  return (
    <>
      <h1 className="mb-12 text-5xl font-bold text-center">{feed.title}</h1>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5"> */}
      <div className="grid grid-cols-feedItems gap-4 p-5">
        {items.map((item: any, index: number) => (
          <a
            key={index}
            className="block p-4 rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-all"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* {item.contentSnippet} */}
            {item.enclosure?.url ? (
              <img src={item.enclosure.url} alt={item.title} />
            ) : (
              <h2 className="font-bold">{item.title}</h2>
            )}
            {/* <p>{item.content}</p> */}
            <div>{format(new Date(item.isoDate), 'yyyy/MM/dd')}</div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Feed;
