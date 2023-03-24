import createApiClient from "./api.service";

export default class AuthService {
  constructor(baseUrl = "http://localhost:3001/api/user") {
    this.api = createApiClient(baseUrl);
  }

  async login(data) {
    return await this.api.post(`/login`, data);
  }

  async register(data) {
    return await this.api.post(`/register`, data);
  }
}
