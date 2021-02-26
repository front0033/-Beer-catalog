/* eslint-disable no-param-reassign */
import { types, cast } from 'mobx-state-tree';

const BaseModel = types.model({} as Record<string, any>).actions((self) => {
  // TODO: replace any type
  const setField = (key: string, value: any) => {
    self[key] = cast(value);
  };

  return {
    setField,
  };
});

export default BaseModel;
