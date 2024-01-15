import { Router } from "express";
import routerUsers from './users.mjs'
import routerProducts from './products.mjs'
const router = Router();

router.use(routerUsers);
router.use(routerProducts);

export default router;
