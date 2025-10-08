// next-auth.d.ts

import "next-auth";

declare module "next-auth" {
  /**
   * Extends the built-in session.user type to include your custom properties.
   */
  interface Session {
    user: {
      id: string; // This is the property you're adding
    } & DefaultSession["user"]; // This keeps the default properties
  }
}