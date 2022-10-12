import axios from 'axios';
import { getEnvironment } from '../constants/BaseUrl';

const instance = axios.create({
  baseURL: getEnvironment(),
});

export { instance as HttpClient };
