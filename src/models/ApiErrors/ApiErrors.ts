/* eslint no-param-reassign: 0 */
import { types } from 'mobx-state-tree';

export const ApiErrors = types
  .model({
    errors: types.array(types.string),
  })
  .actions((self) => ({
    addError(error: string) {
      self.errors.push(error);
    },
    clearErrors() {
      self.errors.clear();
    },
  }));

export default ApiErrors;
