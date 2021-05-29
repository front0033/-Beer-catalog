import { applySnapshot, types } from 'mobx-state-tree';

const BreadCrumbModel = types.model({
  id: types.string,
  label: types.string,
  url: types.string,
});

const BreadCrumbsModel = types
  .model({
    items: types.array(BreadCrumbModel),
  })
  .actions((self) => ({
    set: (items: Array<{ id: string; label: string; url: string }>) => {
      applySnapshot(self.items, items);
    },
  }));

export default BreadCrumbsModel;
