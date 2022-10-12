import { HttpClient } from '../http';

class AuthService {
  login(data) {
    return HttpClient.post('/v2/login', data);
  }
}

const instance = new AuthService();

export { instance as AuthService };
