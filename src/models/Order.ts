import { cast, types } from 'mobx-state-tree';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import BaseModel from './Base';

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
  [OrderFields.houseNumber]: '',
  [OrderFields.name]: '',
  [OrderFields.email]: '',
  [OrderFields.phone]: '',
  [OrderFields.cardNumber]: '',
};

const OrderModel = types.model({
  [OrderFields.city]: types.maybeNull(types.string),
  [OrderFields.street]: types.maybeNull(types.string),
  [OrderFields.houseNumber]: types.maybeNull(types.string),
  [OrderFields.name]: types.maybeNull(types.string),
  [OrderFields.email]: types.maybeNull(types.string),
  [OrderFields.phone]: types.maybeNull(types.string),
  [OrderFields.cardNumber]: types.maybeNull(types.string),
});

const ajv = new Ajv();
addFormats(ajv);

const schema = {
  properties: {
    [OrderFields.city]: { type: 'string' },
    [OrderFields.street]: { type: 'string' },
    [OrderFields.houseNumber]: { type: 'number' },
    [OrderFields.name]: { type: 'string' },
    [OrderFields.email]: { format: 'email' },
    [OrderFields.phone]: { type: 'number' },
    [OrderFields.cardNumber]: { type: 'number' },
  },
};

const validator = ajv.compile(schema);

const Validator = types.model('Validator', {} as Record<OrderFields, string | number>).views((self) => ({
  get isValid() {
    return validator(self);
  },
  propertyValidation(prop: OrderFields) {
    const obj = {
      [prop]: cast(self[prop]),
    };

    validator(obj);
    return validator.errors;
  },
}));

const ValidatedItem = types.compose(BaseModel, OrderModel, Validator);

export default ValidatedItem;
