import BLOG from '~/blog.config';
import { Post } from '~/types';
import { getPostBlocks } from './getPostBlocks';

export const getBioProjectsPost = async (allPosts: Post[]) => {
  const post = allPosts.find((t) => t.slug === BLOG.bioProjectsSlug);
  if (!post?.id) return { post: null, blockMap: null };
  const blockMap = await getPostBlocks(post.id);
  return {
    post,
    blockMap,
  };
};
