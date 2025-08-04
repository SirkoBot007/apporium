
/**
 * @file types.ts
 * @description Defines shared TypeScript types and interfaces for the application.
 */

/**
 * Represents an AI application in the marketplace.
 */
export interface App {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  category: string;
  author: {
    name: string;
    avatarUrl: string;
  };
}

/**
 * Represents a user of the platform.
 */
export interface User {
  id: string;
  email: string;
  name: string;
}
