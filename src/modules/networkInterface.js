import axios from 'axios';
import { BASE_URL } from '../constants';

const networkInterface = (
  url,
  method,
) => {
  let cancel;
  const requestConfig = {
    url,
    method,
    cancelToken: new axios.CancelToken((c) => {
      cancel = c;
    }),
  };

  const apiClient = axios.create({ baseURL: BASE_URL });

  const execute = (cb) => apiClient(requestConfig)
    .then((response) => {
      const resStatus = (response && response.status) || 0;
      const resHeaders = (response && response.headers) || undefined;
      const resData = (response && response.data) || [];

      cb(null, resStatus, resData, null, resHeaders);
    });

  const abort = () => cancel();

  return { execute, abort };
};

export default networkInterface;
