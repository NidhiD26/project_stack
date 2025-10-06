// This line imports and exports the default NextAuth.js middleware.
// It automatically handles the session check and redirection.
import { withAuth } from "next-auth/middleware";

export default withAuth({});

// The 'config' object specifies which routes the middleware should run on.
export const config = {
  //    This matcher array defines the paths that this middleware will protect.
  matcher: ["/dashboard/:path*"],
};
