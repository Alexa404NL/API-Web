import {Router} from "express";
import { getUsers } from "../controladores/a";
const router= Router();

router.get("/users/", getUsers);

export default router;