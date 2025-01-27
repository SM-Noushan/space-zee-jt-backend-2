import { Router } from "express";
import auth from "../../middleware/auth.js";
import { UserDetailsController } from "./userDetails.controller.js";

const router = Router();

router.post("/", auth(), UserDetailsController.createUserDetails);
// router.get("/:id", UserController.getUserById);

export const UserDetailsRoutes = router;
