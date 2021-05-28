import { applySnapshot, types } from 'mobx-state-tree';

const BreadCrumbModel = types.model({
  id: types.string,
  label: types.string,
  link: types.string,
});

const BreadCrumbsModel = types
  .model({
    items: types.array(BreadCrumbModel),
  })
  .actions((self) => ({
    replaceEnd: (items: Array<{ id: string; label: string; link: string }>) => {
      const firstItem = self.items.toJSON()[0];
      const lastItems = items;

      applySnapshot(self.items, [firstItem, ...lastItems]);
    },
    setOne: () => {
      const firstItem = self.items.toJSON()[0];

      applySnapshot(self.items, [firstItem]);
    },
  }));

export default BreadCrumbsModel;
