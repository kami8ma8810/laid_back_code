import classNames from 'classnames';
import { Twemoji } from 'components/Twemoji';
import Link from 'next/link';
import { useMemo } from 'react';
import { getTagDataBySlug, TagSlug } from '~/lib/tags';

type Props =
  | {
      tagKey: string;
      selected: boolean;
      count: number;
      postType?: 'post' | 'project';
    }
  | {
      tagKey: string;
      selected: boolean;
      root: boolean;
      postType?: 'post' | 'project';
    };

export const TagTabItem: React.VFC<Props> = ({ tagKey, selected, postType = 'post', ...rest }) => {
  const castKey = tagKey as TagSlug;

  const linkUrl = useMemo(() => {
    if (postType === 'project') {
      if (selected || !('count' in rest)) {
        return '/projects';
      } else {
        return `/projects/tag/${encodeURIComponent(tagKey)}`;
      }
    }

    if (selected || !('count' in rest)) {
      return '/';
    } else {
      return `/tag/${encodeURIComponent(tagKey)}`;
    }
  }, [postType, rest, selected, tagKey]);

  const tagData = getTagDataBySlug(castKey);
  return (
    <li
      className={classNames('font-bold whitespace-nowrap rounded-lg min-w-max block transition-opacity', {
        'text-gray-400 border-gray-300 dark:text-gray-300 dark:border-gray-700 hover:opacity-50 border-2': !selected,
        'bg-gray-200 text-gray-700 dark:text-night': selected,
      })}
    >
      <Link href={linkUrl} scroll={false}>
        <a className="flex items-center p-2">
          {tagData?.emoji && <Twemoji emoji={tagData.emoji} size={20} />}
          <span
            className={classNames({
              'ml-2': !!tagData?.emoji,
            })}
          >
            {'count' in rest ? `${tagData?.name ?? tagKey} (${rest.count})` : `${tagData?.name ?? tagKey}`}
          </span>
        </a>
      </Link>
    </li>
  );
};
