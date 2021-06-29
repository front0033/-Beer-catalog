/* eslint-disable no-param-reassign */
import { types, cast } from 'mobx-state-tree';

export type TValidationRule = {
  (value: string | number): string | boolean;
};
export interface IObservableArray<T = any> extends Array<T> {
  toJSON(): T[];
}

export const NO_EMPTY_ERROR_TEXT = 'The field must be filled';

export const MUST_BE_NUMBER_ERROR_TEXT = 'Enter the number';

export const MUST_BE_EMAIL = 'Enter the email';

export const MUST_BE_PHONE = 'Enter the phone';

export const regexpValidation = (regexp: RegExp, message: string): TValidationRule => (value) =>
  regexp.test(value.toString()) || message;

export const required: TValidationRule = (value) => {
  if (!value) {
    return NO_EMPTY_ERROR_TEXT;
  }

  return true;
};

export const mustBeNumber: TValidationRule = (value) =>
  /(\d+\.\d+|\d)/.test(value.toString()) ? true : MUST_BE_NUMBER_ERROR_TEXT;

export const maxValue = (max: number, message: string): TValidationRule => (value) =>
  Number(value) <= max ? true : message;

export const minValue = (min: number, message: string): TValidationRule => (value) =>
  Number(value) >= min ? true : message;

export const textMaxLength = (maxLength: number, message: string) => (value: string) =>
  value.length > maxLength ? message : true;

type TValidationModel<T extends string | boolean | Array<TValidationRule>> = Record<string, T>;

const ValidationModel = types
  .model({} as TValidationModel<string>)
  .volatile(() => ({
    validation: {} as TValidationModel<TValidationRule[]>,
    errors: {} as TValidationModel<boolean | string>,
  }))
  .actions((self) => {
    // TODO: replace any type
    const setField = (key: string, value: string) => {
      delete self.errors[key];
      self[key] = cast(value);
    };

    // TODO: replace any type
    const validateField = (key: string): boolean => {
      if (self.validation[key]) {
        const error = self.validation[key].reduce(
          (result: string | boolean, check: TValidationRule) => (result !== true ? result : check(self[key])),
          true
        );

        if (error !== true) {
          self.errors = {
            ...self.errors,
            [key]: error,
          };
          return false;
        }

        delete self.errors[key];
      }

      return true;
    };
    const validate = (): boolean => {
      let isValid = true;

      Object.keys(self.validation).forEach((key) => {
        isValid = validateField(key) ? isValid : false;
      });

      return isValid;
    };

    return {
      validateField,
      validate,
      resetErrors() {
        self.errors = {};
      },
      setField,
    };
  });

export default ValidationModel;
