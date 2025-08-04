
/**
 * @file appService.ts
 * @description Service for fetching application data.
 * This is a mock service that returns static data for now.
 */

import { App } from '../types';

// Static list of AI applications for demonstration.
const staticApps: App[] = [
  {
    id: '1',
    name: 'CodeGenius',
    description: 'AI-powered code assistant and optimizer.',
    longDescription: 'CodeGenius is a revolutionary AI-powered code assistant that helps developers write cleaner, more efficient code faster. It integrates with your favorite IDE and provides real-time suggestions, bug detection, and performance optimizations. Supports over 20 programming languages.',
    imageUrl: 'https://picsum.photos/seed/codegenius/400/300',
    category: 'Developer Tools',
    author: { name: 'DevTools Inc.', avatarUrl: 'https://picsum.photos/seed/dev-avatar/100' },
  },
  {
    id: '2',
    name: 'Artify',
    description: 'Generate stunning digital art from text prompts.',
    longDescription: 'Unleash your creativity with Artify. Simply describe your vision in words, and our advanced AI will generate breathtaking, unique images. Perfect for artists, designers, and anyone looking to create visual content effortlessly. Customize styles, colors, and compositions with ease.',
    imageUrl: 'https://picsum.photos/seed/artify/400/300',
    category: 'Creative',
    author: { name: 'CreativeAI', avatarUrl: 'https://picsum.photos/seed/creative-avatar/100' },
  },
  {
    id: '3',
    name: 'TaskMaster AI',
    description: 'Intelligent project management and task automation.',
    longDescription: 'TaskMaster AI redefines productivity by automating workflows, prioritizing tasks, and predicting project timelines with uncanny accuracy. It learns from your habits to create a personalized and efficient project management experience for you and your team.',
    imageUrl: 'https://picsum.photos/seed/taskmaster/400/300',
    category: 'Productivity',
    author: { name: 'Productive Solutions', avatarUrl: 'https://picsum.photos/seed/prod-avatar/100' },
  },
  {
    id: '4',
    name: 'MarketMind',
    description: 'AI-driven market analysis and trend prediction.',
    longDescription: 'Gain a competitive edge with MarketMind. Our AI analyzes millions of data points to provide actionable market insights, consumer behavior trends, and future predictions. Make data-driven decisions for your business with confidence.',
    imageUrl: 'https://picsum.photos/seed/marketmind/400/300',
    category: 'Business',
    author: { name: 'BizIntel Corp.', avatarUrl: 'https://picsum.photos/seed/biz-avatar/100' },
  },
  {
    id: '5',
    name: 'StoryWeaver',
    description: 'Collaborative AI for writing stories and scripts.',
    longDescription: 'Overcome writer\'s block with StoryWeaver. This collaborative AI helps you brainstorm ideas, develop characters, and write compelling narratives. Whether you are a novelist, screenwriter, or hobbyist, StoryWeaver is your creative partner.',
    imageUrl: 'https://picsum.photos/seed/storyweaver/400/300',
    category: 'Creative',
    author: { name: 'Narrative Tech', avatarUrl: 'https://picsum.photos/seed/narrative-avatar/100' },
  },
  {
    id: '6',
    name: 'DataScribe',
    description: 'Automate data entry and processing from documents.',
    longDescription: 'Save countless hours with DataScribe. Our AI accurately extracts and digitizes information from invoices, receipts, and forms. Seamlessly integrate structured data into your existing systems and eliminate manual data entry errors.',
    imageUrl: 'https://picsum.photos/seed/datascribe/400/300',
    category: 'Business',
    author: { name: 'BizIntel Corp.', avatarUrl: 'https://picsum.photos/seed/biz-avatar/100' },
  },
];

/**
 * Fetches a list of all AI applications.
 * @returns A promise that resolves to an array of App objects.
 */
export const getApps = (): Promise<App[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(staticApps);
    }, 500); // Simulate network delay
  });
};

/**
 * Fetches a single application by its ID.
 * @param id The ID of the app to fetch.
 * @returns A promise that resolves to the App object or undefined if not found.
 */
export const getAppById = (id: string): Promise<App | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const app = staticApps.find((app) => app.id === id);
      resolve(app);
    }, 300); // Simulate network delay
  });
};
