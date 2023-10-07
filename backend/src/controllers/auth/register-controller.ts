import {Request, RequestHandler, Response} from 'express';
import jwt from 'jsonwebtoken';

import {BadRequestError} from '../../errors/bad-request-error';
import {InternalError} from '../../errors/internal-error';
import {User} from '../../models/user';
import {JWT_EXPIRES_IN, JWT_SECRET} from '../../utils/env';

const handlePostRegistration = (async (req: Request, res: Response) => {
  try {
    const {mail, username, password} = req.body;

    const isUserExists = await User.exists({mail: mail.toLowerCase()}).exec();
    if (isUserExists) {
      throw new BadRequestError('Email is already in use.');
    }

    const user = await User.create({
      mail,
      username,
      password,
    });

    const userJWT = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      JWT_SECRET,
      {expiresIn: JWT_EXPIRES_IN}
    );

    req.session = {jwt: userJWT};

    return res.status(201).send(user);
  } catch (error) {
    throw new InternalError();
  }
}) as RequestHandler;

export {handlePostRegistration};
