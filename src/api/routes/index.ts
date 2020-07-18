import express, { Request, Response } from 'express';
import example from './example';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'API',
  });
});

router.use('/example', example);

export default router;
