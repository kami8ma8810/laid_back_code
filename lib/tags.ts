import { ValueOf } from 'lib/types';

const TAG_SLUGS = {
  All: 'all',
  TypeScript: 'typescript',
  // React: 'react',
  NextJs: 'nextjs',
  Storybook: 'storybook',
  Jest: 'jest',
  Blender: 'blender',
  // Ikigomi: 'ikigomi',
  // Sento: 'sento',
  // Link: 'link',
  // ProductDev: 'product-dev',
  // Sauna: 'sauna',
  // Items: 'items',
  // Notion: 'notion',
  // Solana: 'solana',
  // Polygon: 'polygon',
  // Solidity: 'solidity',
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
  [TAG_SLUGS.TypeScript]: {
    name: 'TypeScript',
    emoji: '🔒',
    slug: TAG_SLUGS.TypeScript,
  },
  // [TAG_SLUGS.React]: {
  //   name: 'React',
  //   emoji: '💻',
  //   slug: TAG_SLUGS.React,
  // },
  [TAG_SLUGS.NextJs]: {
    name: 'Next.js',
    emoji: '🔷',
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
  // [TAG_SLUGS.Sento]: {
  //   name: '銭湯',
  //   emoji: '♨️',
  //   slug: TAG_SLUGS.Sento,
  // },
  // [TAG_SLUGS.Sauna]: {
  //   name: 'サウナ',
  //   emoji: '🧖‍♂️',
  //   slug: TAG_SLUGS.Sauna,
  // },
  // [TAG_SLUGS.Link]: {
  //   name: '外部リンク',
  //   emoji: '🔗',
  //   slug: TAG_SLUGS.Link,
  // },
  // [TAG_SLUGS.ProductDev]: {
  //   name: 'プロダクト開発',
  //   emoji: '🛠',
  //   slug: TAG_SLUGS.ProductDev,
  // },
  // [TAG_SLUGS.Items]: {
  //   name: 'アイテム',
  //   emoji: '✨',
  //   slug: TAG_SLUGS.Items,
  // },
  // [TAG_SLUGS.Notion]: {
  //   name: 'Notion',
  //   emoji: '📓',
  //   slug: TAG_SLUGS.Notion,
  // },
  // [TAG_SLUGS.Solidity]: {
  //   name: 'Solidity',
  //   emoji: '💠',
  //   slug: TAG_SLUGS.Solidity,
  // },
  // [TAG_SLUGS.Polygon]: {
  //   name: 'Polygon',
  //   emoji: '♋️',
  //   slug: TAG_SLUGS.Polygon,
  // },
  // [TAG_SLUGS.Solana]: {
  //   name: 'Solana',
  //   emoji: '👾',
  //   slug: TAG_SLUGS.Solana,
  // },
} as const;

export const getTagDataBySlug = (slug: TagSlug): TagData => TAG_DATA[slug];
