import { type Request, type RequestHandler, type Response } from 'express';

const handlePostRegistration = (async (req: Request, res: Response) => {
  res.send('Yo');
}) as RequestHandler;

export { handlePostRegistration };
