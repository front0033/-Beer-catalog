import axios from 'axios';
import { ApiErrorsStore } from 'store';
type IStatusErrors = {
  [key in string | number]: string;
};

export const statusErrors: IStatusErrors = {
  404: 'Запрашиваемый ресурс не найден',
  502: 'Сервис недоступен (502)',
  503: 'Сервис недоступен (503)',
  504: 'Время ожидания ответа превышено (504)',
  network: 'Сервер не ответил, вероятно, проблемы с сетью',
  default: 'Неизвестная сетевая ошибка',
};

// получение разнородных ошибок от сервисов
export const getErrorText = (values: any) => {
  if (!values.errors) {
    return JSON.stringify(values);
  }

  if (!values.errors.error) {
    return JSON.stringify(values.errors);
  }

  if (!values.errors.error.message) {
    return JSON.stringify(values.errors.error);
  }

  return JSON.stringify(values.errors.error.message);
};

export const processServerError = (error: any) => {
  if (error.response) {
    // Запрос прошёл, но сервер ответил чем-то отличным от 2хх кода
    if (statusErrors[error.response.status]) {
      ApiErrorsStore.addError(`Ошибка: ${statusErrors[error.response.status]}`);
    }
  } else if (error.request) {
    // Запрос отправлен, но ответ не пришёл
    ApiErrorsStore.addError(statusErrors.network);
  } else {
    ApiErrorsStore.addError(statusErrors.default);
  }
};

export const onRejected = (error: any) => {
  // если в конфиге не отключена обработка ошибок
  if (!error.config.skipError) {
    processServerError(error);
  }

  // eslint-disable-next-line no-param-reassign
  error.axios = true;

  return Promise.reject(error);
};

export const onFulfilled = (response: any) => response;

const API_URL = 'https://api.punkapi.com/v2';

const ApiClient = axios.create({
  baseURL: API_URL,
  timeout: 60 * 1000,
});

ApiClient.interceptors.response.use(onFulfilled, onRejected);

export default ApiClient;
