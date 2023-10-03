import { Router } from 'express';
import { body } from 'express-validator';

import { handlePostLogin, handlePostRegistration } from '../controllers/auth';
import { validateRequest } from '../middleware/validate-request';

const router = Router();

const registerValidationMiddleware = [
  body('username')
    .trim()
    .isLength({ min: 3, max: 12 })
    .withMessage('Username must be between 3 and 12 characters.'),
  body('password')
    .trim()
    .isLength({ min: 6, max: 20 })
    .withMessage('Password must be between 4 and 20 characters.'),
  body('email').isEmail().withMessage('Please provide a valid email address.'),
];

const loginValidationMiddleware = [
  body('email').isEmail().withMessage('Please provide a valid email address.'),
  body('password').notEmpty().withMessage('Please provide a valid password.'),
];

router.post(
  '/register',
  registerValidationMiddleware,
  validateRequest,
  handlePostRegistration
);
router.post(
  '/login',
  loginValidationMiddleware,
  validateRequest,
  handlePostLogin
);

export { router as authRouter };
