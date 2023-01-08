import { createHash } from 'crypto';
import { motion } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import BLOG from '~/blog.config';
import { Container, Profile } from '~/components';
import { SearchLayout } from '~/layouts';
// import Feeds from '~/layouts/feeds';
import { filterPublishedPosts, getAllPosts, getAllTags } from '~/lib/notion';
import { getProfilePost } from '~/lib/notion/getProfilePost';

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts({ includedPages: true });
  const profilePostData = await getProfilePost(allPosts);
  const emailHash = createHash('md5').update(BLOG.email).digest('hex');
  const posts = filterPublishedPosts({
    posts: allPosts,
    includedPages: false,
  });
  const tags = getAllTags({ posts });
  return {
    props: {
      posts,
      tags,
      post: profilePostData.post,
      blockMap: profilePostData.blockMap,
      emailHash,
    },
    revalidate: 1,
  };
};

type Props = Omit<React.ComponentProps<typeof Profile>, 'fullWidth'> &
  Omit<React.ComponentProps<typeof SearchLayout>, 'currentTag'>;

const Blog: NextPage<Props> = ({ posts, post, blockMap, emailHash, tags }) => {
  // console.log(posts, post);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
        type: 'tween',
        ease: 'easeOut',
      }}
    >
      <Container title={BLOG.title} description={BLOG.description} from="posts">
        {post && blockMap && <Profile blockMap={blockMap} post={post} emailHash={emailHash} />}
        {/* <Feeds /> */}
        <SearchLayout tags={tags} posts={posts} />
      </Container>
    </motion.div>
  );
};

export default Blog;
