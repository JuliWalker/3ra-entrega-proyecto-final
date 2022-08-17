import { Router } from "express";

/** Routes */
import homeRouter from './home.js';
import routesProducts from './products.js'
// import routesCart from './cart.js'
import loginRouter from './login.js';
import logoutRouter from './logout.js';
import registerRouter from './register.js';

const router = Router();

router.use('/', homeRouter);
router.use('/productos',routesProducts)
// app.use('/api/carrito',routesCart)
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/registro', registerRouter);

export default router;