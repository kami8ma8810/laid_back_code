import { ValueOf } from 'lib/types';

const TAG_SLUGS = {
  All: 'all',
  Html: 'html',
  Css: 'css',
  JavaScript: 'javascript',
  TypeScript: 'typescript',
  React: 'react',
  Vue: 'vue',
  NextJs: 'nextjs',
  Storybook: 'storybook',
  Jest: 'jest',
  Blender: 'blender',
  WordPress: 'wordpress',
  Astro: 'astro',
  AI: 'ai',
  Git: 'git',
} as const;

export type TagSlug = ValueOf<typeof TAG_SLUGS>;

type TagData = {
  slug: string;
  name: string;
  emoji: string;
};

const TAG_DATA: Record<TagSlug, TagData> = {
  [TAG_SLUGS.All]: {
    name: 'All',
    emoji: '🌎',
    slug: TAG_SLUGS.All,
  },
  [TAG_SLUGS.Html]: {
    name: 'HTML',
    emoji: '📝',
    slug: TAG_SLUGS.Html,
  },
  [TAG_SLUGS.Css]: {
    name: 'CSS',
    emoji: '👙',
    slug: TAG_SLUGS.Css,
  },
  [TAG_SLUGS.JavaScript]: {
    name: 'JavaScript',
    emoji: '➗',
    slug: TAG_SLUGS.JavaScript,
  },
  [TAG_SLUGS.TypeScript]: {
    name: 'TypeScript',
    emoji: '🔒',
    slug: TAG_SLUGS.TypeScript,
  },
  [TAG_SLUGS.React]: {
    name: 'React',
    emoji: '🟦',
    slug: TAG_SLUGS.React,
  },
  [TAG_SLUGS.Vue]: {
    name: 'Vue',
    emoji: '🟩',
    slug: TAG_SLUGS.Vue,
  },
  [TAG_SLUGS.NextJs]: {
    name: 'Next.js',
    emoji: '🔳',
    slug: TAG_SLUGS.NextJs,
  },
  [TAG_SLUGS.Storybook]: {
    name: 'Storybook',
    emoji: '📖',
    slug: TAG_SLUGS.Storybook,
  },
  [TAG_SLUGS.Jest]: {
    name: 'Jest',
    emoji: '🧦',
    slug: TAG_SLUGS.Jest,
  },
  [TAG_SLUGS.Blender]: {
    name: 'Blender',
    emoji: '🎲',
    slug: TAG_SLUGS.Blender,
  },
  [TAG_SLUGS.WordPress]: {
    name: 'WordPress',
    emoji: '🌀',
    slug: TAG_SLUGS.WordPress,
  },
  [TAG_SLUGS.Astro]: {
    name: 'Astro',
    emoji: '🚀',
    slug: TAG_SLUGS.Astro,
  },
  [TAG_SLUGS.AI]: {
    name: 'AI',
    emoji: '🧠',
    slug: TAG_SLUGS.AI,
  },
  [TAG_SLUGS.Git]: {
    name: 'Git',
    emoji: '🟧',
    slug: TAG_SLUGS.Git,
  },
} as const;

export const getTagDataBySlug = (slug: TagSlug): TagData => TAG_DATA[slug];
