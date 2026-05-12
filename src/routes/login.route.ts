import { Router, Request, Response} from 'express';

const loginRouter = Router();


loginRouter.post("/" ,(req: Request, res: Response) => {
  return res.json({m:4})
})


export default loginRouter;