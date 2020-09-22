import axios from 'axios';
import networkInterface from '../networkInterface';

jest.mock('axios');

describe('network interface', () => {
  const callback = jest.fn();
  const url = 'testUrl';
  const method = 'GET';
  const cancel = jest.fn();
  axios.CancelToken = (executor) => {
    executor(cancel);
  };
  it('success flow should works correctly', async () => {
    const response = { data: [], status: 200, headers: 'some headers' };
    axios.create = jest.fn().mockReturnValue(jest.fn().mockResolvedValue(response));

    const {
      abort,
      execute,
    } = networkInterface(url, method);

    await execute(callback);

    expect(callback).toHaveBeenCalledWith(
      null,
      response.status,
      response.data,
      null,
      response.headers,
    );

    abort();

    expect(cancel).toHaveBeenCalled();
  });

  it('success flow should works correctly with default values', async () => {
    const response = {};
    axios.create = jest.fn().mockReturnValue(jest.fn().mockResolvedValue(response));
    const {
      execute,
    } = networkInterface(url, method);

    await execute(callback);

    expect(callback).toHaveBeenCalledWith(
      null,
      0,
      [],
      null,
      undefined,
    );
  });
});
