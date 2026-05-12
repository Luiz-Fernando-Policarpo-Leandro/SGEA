import {Router} from 'express';

import loginRouter from '../routes/login.route'
import publicRouter from '../routes/public.route'


const router = Router()

router.use('/', publicRouter)
router.use('/login', loginRouter)

export default router;