import { type Request, type RequestHandler, type Response } from 'express';

const handlePostLogin = (async (req: Request, res: Response) => {
  res.send('Yo');
}) as RequestHandler;

export { handlePostLogin };
