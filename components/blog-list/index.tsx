import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import dayjs from 'dayjs';
import InfiniteScroll from 'react-infinite-scroll-component';
import LinesEllipsis from 'react-lines-ellipsis';

import { Post } from '../../lib/post';

export type Image = {
  url: string;
};

export type SponsorLink = {
  text: string;
  url: string;
};

export interface PostItem extends Post {
  first?: boolean;
}

function PostCard({ cover, title, summary, slug, first, author, publishedAt, readingTime }: Post) {
  const cls = cn(
    'bg-white',
    'rounded-3xl',
    'p-4',
    'shadow-lg',
    'transition duration-300 ease-in-out transform',
    'hover:-translate-y-2',
    'border',
    'border-gray-100',
    // {
    //   'col-span-2': first,
    // },
  );

  return (
    <Link key={title} href={`/post/${slug}`}>
      <article className={cls}>
        {cover && (
          <div
            style={{ background: `url(${cover}) center center / cover no-repeat` }}
            className="w-full h-40 rounded-md cursor-pointer"
          />
        )}
        <div>
          <LinesEllipsis
            className={cn('cursor-pointer', 'text-black', 'text-3xl', {
              'my-2': cover,
              'mb-2': !cover,
            })}
            text={title}
            maxLine={1}
            ellipsis="..."
          />

          <LinesEllipsis
            className="text-gray-500 mb-2 cursor-pointer h-20"
            text={summary}
            maxLine={3}
            ellipsis="..."
          />
          {/* <p className={cn('text-gray-500 mb-2 cursor-pointer', styles.summary)}>{summary}</p> */}
          <footer className="flex flex-row items-center w-full mt-4">
            {author.avatar && <img className="rounded-full w-8 h-8 mr-1" src={author.avatar} />}
            <div className="flex flex-col flex-grow content-between">
              <span className="text-sm text-gray-800">{author.name}</span>
              <span className="flex flex-grow text-gray-400 text-xs">
                <time>{dayjs(publishedAt).format('YYYY-MM-DD HH:mm')}</time>{' '}
                <span className="text-gray-400 mx-1">•</span> {readingTime} min read
              </span>
            </div>
          </footer>
        </div>
      </article>
    </Link>
  );
}

type Props = {
  posts: Post[];
  className?: string;
  loadMore?: () => void;
  hasMore?: boolean;
};

export default function PostGrid({ posts = [], loadMore, hasMore, className }: Props) {
  const cls = cn('grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8', className);

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<></>}
      className={cls}
      style={{ overflow: 'initial' }}
    >
      {posts.map((post, idx) => (
        <PostCard {...post} first={idx === 0} key={post.id || post.slug || idx} />
      ))}
    </InfiniteScroll>
  );
}
