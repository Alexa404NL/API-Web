import {Router} from "express";
import { getUsers, getUser, postUser, putUser, deleteUser} from "../controladores/a.js";
const router= Router();

router.get("/users/", getUsers);
router.get("/user/:id", getUser); // declarar variable en ruta /:dummy
router.post("/user/", postUser); 
router.put("/user/:id", putUser); 
router.delete("/user/:id", deleteUser); 

export default router;