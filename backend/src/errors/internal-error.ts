import {SerializedError} from '../types/errors';
import {CustomError} from './custom-error';

export class InternalError extends CustomError {
  statusCode = 500;

  constructor() {
    super('Something went wrong, please try again later');

    Object.setPrototypeOf(this, InternalError.prototype);
  }

  serializeErrors(): SerializedError[] {
    return [{message: this.message}];
  }
}
