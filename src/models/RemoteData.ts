import { types, Instance } from 'mobx-state-tree';

/* eslint-disable no-param-reassign */
export enum RemoteDataStatuses {
  initial = 'initial',
  pending = 'pending',
  error = 'error',
  loadSuccess = 'loadSuccess',
  saveSuccess = 'saveSuccess',
}

export const RemoteDataModel = types
  .model('RemoteDataModel')
  .volatile(() => ({
    loadStatus: RemoteDataStatuses.initial,
  }))
  .views((self) => ({
    get dataInitial(): boolean {
      return self.loadStatus === RemoteDataStatuses.initial;
    },
    get dataPending(): boolean {
      return self.loadStatus === RemoteDataStatuses.pending;
    },
    get dataError(): boolean {
      return self.loadStatus === RemoteDataStatuses.error;
    },
    get dataLoadSuccess(): boolean {
      return self.loadStatus === RemoteDataStatuses.loadSuccess;
    },
    get dataSaveSuccess(): boolean {
      return self.loadStatus === RemoteDataStatuses.saveSuccess;
    },
  }))
  .actions((self) => ({
    setInitial: () => {
      self.loadStatus = RemoteDataStatuses.initial;
    },
    setPending: () => {
      self.loadStatus = RemoteDataStatuses.pending;
    },
    setError: () => {
      self.loadStatus = RemoteDataStatuses.error;
    },
    setLoadSuccess: () => {
      self.loadStatus = RemoteDataStatuses.loadSuccess;
    },
    setSaveSuccess: () => {
      self.loadStatus = RemoteDataStatuses.saveSuccess;
    },
  }));

export interface IRemoteDataModel extends Instance<typeof RemoteDataModel> {}
