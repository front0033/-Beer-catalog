import { ApiErrorsStore } from 'models/ApiErrors';
import { getErrorText, onFulfilled, onRejected, statusErrors } from './ApiClient';

jest.mock('models/ApiErrors', () => ({
  __esModule: true,
  // addError: jest.fn(),
  ApiErrorsStore: {
    addError: jest.fn(),
  },
  default: {
    addError: jest.fn(),
    ApiErrorsStore: {
      addError: jest.fn(),
    },
  },
}));

describe('ApiClient', () => {
  it('getErrorText without errors', () => {
    const values = { message: 'some-error-text' };
    expect(getErrorText(values)).toBe('{"message":"some-error-text"}');
  });

  it('getErrorText without errors.error', () => {
    const values = { errors: { message: 'some-error-text' } };
    expect(getErrorText(values)).toBe('{"message":"some-error-text"}');
  });

  it('getErrorText without errors.error.message', () => {
    const values = { errors: { error: { test: '???????' } } };
    expect(getErrorText(values)).toBe('{"test":"???????"}');
  });

  it('getErrorText with values.errors.error.message', () => {
    const values = { errors: { error: { message: 'some-error-text' } } };
    expect(getErrorText(values)).toBe('"some-error-text"');
  });

  it('onFulfilled', () => {
    expect(onFulfilled('Okey')).toBe('Okey');
  });

  it('processServerError not calls if skipError: true', async () => {
    const spyError = spyOn(ApiErrorsStore, 'addError');
    const error = {
      config: {
        skipError: true,
      },
    };

    await onRejected(error).catch(() => {
      expect(spyError).not.toHaveBeenCalled();
    });
  });

  it('processServerError adds error with server response.data if status is in unknown', async () => {
    const spyError = spyOn(ApiErrorsStore, 'addError');
    const response = {
      status: 700,
      data: 'test error',
    };
    const error = {
      config: {
        skipError: false,
      },
      response,
    };

    await onRejected(error).catch(() => {
      expect(spyError).toHaveBeenCalledWith(`Сервер вернул ошибку: ${getErrorText(error.response.data)}`);
    });
  });

  it('processServerError adds error with server response.status if status is in known statuses', async () => {
    const spyError = spyOn(ApiErrorsStore, 'addError');
    const response = {
      status: 404,
    };
    const error = {
      config: {
        skipError: false,
      },
      response,
    };

    await onRejected(error).catch(() => {
      expect(spyError).toHaveBeenCalledWith(`Ошибка: ${statusErrors[error.response.status]}`);
    });
  });

  it('processServerError adds error with server common error status if no data specified and status unknown', async () => {
    const spyError = spyOn(ApiErrorsStore, 'addError');
    const response = {
      status: 'X',
    };
    const error = {
      config: {
        skipError: false,
      },
      response,
    };

    await onRejected(error).catch(() => {
      expect(spyError).toHaveBeenCalledWith(`Сервер вернул ошибку: ${statusErrors.default}`);
    });
  });

  it('processServerError adds error with server response.request if no data and status specified', async () => {
    const spyError = spyOn(ApiErrorsStore, 'addError');
    const request = {
      something: 'test',
    };
    const error = {
      config: {
        skipError: false,
      },
      request,
    };

    await onRejected(error).catch(() => {
      expect(spyError).toHaveBeenCalledWith(statusErrors.network);
    });
  });

  it('processServerError adds error with common error if no data, status and request specified', async () => {
    const spyError = spyOn(ApiErrorsStore, 'addError');
    const error = {
      config: {
        skipError: false,
      },
    };

    await onRejected(error).catch(() => {
      expect(spyError).toHaveBeenCalledWith(statusErrors.default);
    });
  });

  it('onRejected rejects error and add axios: true property', async () => {
    const error = {
      config: {
        skipError: false,
      },
    };

    await onRejected(error).catch((e) => {
      expect(e).toHaveProperty('axios', true);
    });
  });
});
