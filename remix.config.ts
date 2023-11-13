/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  postcss: true,
  tailwind: true,
  future: {
    /* any enabled future flags */
  },
  ignoredRouteFiles: ["**/.*"],
  publicPath: "/build/",
  routes(defineRoutes) {
    return defineRoutes((route) => {
      route("/somewhere/cool/*", "catchall.tsx");
    });
  },
  serverBuildPath: "build/index.js",
};
