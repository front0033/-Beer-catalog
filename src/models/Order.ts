import { types } from 'mobx-state-tree';
import BaseModel from './Base';
import ValidationModel, { MUST_BE_EMAIL, MUST_BE_PHONE, regexpValidation, required } from './Validation';

export enum OrderFields {
  city = 'city',
  street = 'street',
  houseNumber = 'houseNumber',
  name = 'name',
  email = 'email',
  phone = 'phone',
  cardNumber = 'cardNumber',
}

export const initialValues: Record<OrderFields, any> = {
  [OrderFields.city]: '',
  [OrderFields.street]: '',
  [OrderFields.houseNumber]: 0,
  [OrderFields.name]: '',
  [OrderFields.email]: '',
  [OrderFields.phone]: '',
  [OrderFields.cardNumber]: '',
};

const OrderModel = types.model({
  [OrderFields.city]: types.maybeNull(types.string),
  [OrderFields.street]: types.maybeNull(types.string),
  [OrderFields.houseNumber]: types.maybeNull(types.number),
  [OrderFields.name]: types.maybeNull(types.string),
  [OrderFields.email]: types.maybeNull(types.string),
  [OrderFields.phone]: types.maybeNull(types.string),
  [OrderFields.cardNumber]: types.maybeNull(types.string),
});

const ValidatedItem = types.compose(BaseModel, ValidationModel, OrderModel).volatile(() => ({
  errors: {},
  validation: {
    [OrderFields.city]: [required],
    [OrderFields.street]: [required],
    [OrderFields.houseNumber]: [required],
    [OrderFields.name]: [required],
    [OrderFields.email]: [required, regexpValidation(/.+@.+\..+/i, MUST_BE_EMAIL)],
    [OrderFields.phone]: [required, regexpValidation(/^((\+7|7|8)+([0-9]){10})$/, MUST_BE_PHONE)],
    [OrderFields.cardNumber]: [required],
  },
}));

export default ValidatedItem;
