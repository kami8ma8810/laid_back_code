import Image from 'next/image';
import Link from 'next/link';
import { FEED_DATA } from '~/lib/rss';

const Feeds = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {FEED_DATA.map((feed) => (
        <Link key={feed.slug} href={`/feeds/${feed.slug}`}>
          <a className="flex justify-center p-2 bg-gray-200 rounded-lg hover:opacity-50 transition-all align-center">
            <Image src={feed.iconSrc} alt={feed.title} width={80} height={40} objectFit="contain" />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Feeds;
