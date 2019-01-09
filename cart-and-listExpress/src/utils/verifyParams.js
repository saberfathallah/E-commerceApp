import validateSchema from './validateSchema';
import validateUserId from './validateUserId';

export default function verifyParams(res, data, schema) {
  validateUserId(res);
  validateSchema(res, data, schema);
}
