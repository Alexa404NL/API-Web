import {Router} from "express";
import {marcoo, raiz, ping} from "../controladores/index.js";

const router= Router();

router.get('/', raiz);

router.get('/ping', ping);

router.get('/marcoo', marcoo);

export default router;