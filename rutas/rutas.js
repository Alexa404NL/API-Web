import {Router} from "express";
import { getUsers, getUser} from "../controladores/a.js";
const router= Router();

router.get("/users/", getUsers);
router.get("/user/:id", getUser); // declarar variable en ruta /:dummy

export default router;