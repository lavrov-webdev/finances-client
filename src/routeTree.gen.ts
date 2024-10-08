/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as IndexImport } from "./routes/index";
import { Route as SprintsIndexImport } from "./routes/sprints/index";
import { Route as CategoriesIndexImport } from "./routes/categories/index";
import { Route as TransactionsCreateIndexImport } from "./routes/transactions/create/index";
import { Route as SprintsCurrentIndexImport } from "./routes/sprints/current/index";
import { Route as SprintsCreateIndexImport } from "./routes/sprints/create/index";
import { Route as SprintsSprintIdIndexImport } from "./routes/sprints/$sprintId/index";

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const SprintsIndexRoute = SprintsIndexImport.update({
  path: "/sprints/",
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import("./routes/sprints/index.lazy").then((d) => d.Route),
);

const CategoriesIndexRoute = CategoriesIndexImport.update({
  path: "/categories/",
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import("./routes/categories/index.lazy").then((d) => d.Route),
);

const TransactionsCreateIndexRoute = TransactionsCreateIndexImport.update({
  path: "/transactions/create/",
  getParentRoute: () => rootRoute,
} as any);

const SprintsCurrentIndexRoute = SprintsCurrentIndexImport.update({
  path: "/sprints/current/",
  getParentRoute: () => rootRoute,
} as any);

const SprintsCreateIndexRoute = SprintsCreateIndexImport.update({
  path: "/sprints/create/",
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import("./routes/sprints/create/index.lazy").then((d) => d.Route),
);

const SprintsSprintIdIndexRoute = SprintsSprintIdIndexImport.update({
  path: "/sprints/$sprintId/",
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/categories/": {
      id: "/categories/";
      path: "/categories";
      fullPath: "/categories";
      preLoaderRoute: typeof CategoriesIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/sprints/": {
      id: "/sprints/";
      path: "/sprints";
      fullPath: "/sprints";
      preLoaderRoute: typeof SprintsIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/sprints/$sprintId/": {
      id: "/sprints/$sprintId/";
      path: "/sprints/$sprintId";
      fullPath: "/sprints/$sprintId";
      preLoaderRoute: typeof SprintsSprintIdIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/sprints/create/": {
      id: "/sprints/create/";
      path: "/sprints/create";
      fullPath: "/sprints/create";
      preLoaderRoute: typeof SprintsCreateIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/sprints/current/": {
      id: "/sprints/current/";
      path: "/sprints/current";
      fullPath: "/sprints/current";
      preLoaderRoute: typeof SprintsCurrentIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/transactions/create/": {
      id: "/transactions/create/";
      path: "/transactions/create";
      fullPath: "/transactions/create";
      preLoaderRoute: typeof TransactionsCreateIndexImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  CategoriesIndexRoute,
  SprintsIndexRoute,
  SprintsSprintIdIndexRoute,
  SprintsCreateIndexRoute,
  SprintsCurrentIndexRoute,
  TransactionsCreateIndexRoute,
});

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/categories/",
        "/sprints/",
        "/sprints/$sprintId/",
        "/sprints/create/",
        "/sprints/current/",
        "/transactions/create/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/categories/": {
      "filePath": "categories/index.ts"
    },
    "/sprints/": {
      "filePath": "sprints/index.tsx"
    },
    "/sprints/$sprintId/": {
      "filePath": "sprints/$sprintId/index.tsx"
    },
    "/sprints/create/": {
      "filePath": "sprints/create/index.tsx"
    },
    "/sprints/current/": {
      "filePath": "sprints/current/index.tsx"
    },
    "/transactions/create/": {
      "filePath": "transactions/create/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
