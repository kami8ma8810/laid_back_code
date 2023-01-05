import { format } from 'date-fns';
import { FEEDS, getFeed } from '../../lib/rss';

export async function getStaticPaths() {
  return {
    paths: FEEDS.map((feed) => ({ params: { slug: feed.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const feed = FEEDS.find((feed) => feed.slug === params.slug);

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

export default function Feed({ feed, items }: any) {
  return (
    <div>
      <h1 className="mb-12 text-5xl font-bold text-center">{feed.title}</h1>
      <div className="flex justify-center items-center min-h-screen">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          {items.map((item: any, index: number) => (
            <a
              key={index}
              className="block p-4 rounded-lg border border-gray-200 hover:border-gray-500"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {console.log(item)}
              {item.enclosure?.url && <img src={item.enclosure.url} alt={item.title} />}
              <h3 className="font-bold">{item.title}</h3>
              <p>{item.content}</p>
              <div>{format(new Date(item.isoDate), 'PPP')}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
