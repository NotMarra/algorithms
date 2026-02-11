import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/:algorithm", "routes/algorithm.tsx"),
] satisfies RouteConfig;
