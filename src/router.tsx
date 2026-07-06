import { createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof createRouter>;
  }
}

let routerInstance: ReturnType<typeof createRouter> | undefined;

export function getRouter() {
  if (!routerInstance) {
    routerInstance = createRouter({
      routeTree,
      scrollRestoration: true,
    });
  }
  return routerInstance;
}
