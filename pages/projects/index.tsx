import { createHash } from 'crypto';
import { motion } from 'framer-motion';
import { GetStaticProps, NextPage } from 'next';
import BLOG from '~/blog.config';
import { Container, Profile } from '~/components';
import { SearchLayout } from '~/layouts';
// import Feeds from '~/layouts/feeds';
import { fetchLocaleLang } from '~/lib/i18n/lang';
import { filterPublishedProjects, getAllPosts, getAllProjects, getAllTags } from '~/lib/notion';
import { getProfilePost } from '~/lib/notion/getProfilePost';

export const getStaticProps: GetStaticProps = async () => {
  const allProjects = await getAllProjects({ includedPages: true });
  const allPosts = await getAllPosts({ includedPages: true });
  // const totalPosts = allPosts.length;
  const profilePostData = await getProfilePost(allPosts);
  const emailHash = createHash('md5').update(BLOG.email).digest('hex');
  const posts = filterPublishedProjects({
    posts: allProjects,
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

const locale = fetchLocaleLang();

const Blog: NextPage<Props> = ({ posts, post, blockMap, emailHash, tags }) => {
  return (
    <motion.div
      initial={{ x: -10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -10, opacity: 0 }}
      transition={{
        stiffness: 260,
        damping: 20,
      }}
    >
      <Container title={locale.NAV.PROJECT} description={BLOG.description} from="projects">
        {post && blockMap && <Profile blockMap={blockMap} post={post} emailHash={emailHash} />}
        {/* <Feeds /> */}
        <SearchLayout tags={tags} posts={posts} postType="project" />
      </Container>
    </motion.div>
  );
};

export default Blog;
