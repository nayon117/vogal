import { authMiddleware } from "@clerk/nextjs/server";

 
export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/webhooks/clerk',
  ],
  ignoredRoutes: [
    '/api/webhook'
  ]
});
 
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
 
