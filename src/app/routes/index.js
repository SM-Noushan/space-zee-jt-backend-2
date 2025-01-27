import express from "express";
import { UserDetailsRoutes } from "../module/userDetails/userDetails.route.js";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user-details",
    route: UserDetailsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
