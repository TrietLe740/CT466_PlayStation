import createApiClient from "./api.service";

export default class AuthService {
  constructor(baseUrl = "http://localhost:3001/api/user") {
    this.api = createApiClient(baseUrl);
  }

  async login(data) {
    return await this.api.post(`/login`, data);
  }

  async adminLogin(data) {
    return await this.api.post(`/adminLogin`, data);
  }

  async register(data) {
    return await this.api.post(`/register`, data);
  }

  async getAll() {
    return (await this.api.get("/findAllUser")).data;
  }

  async get(id) {
    return (await this.api.get(`/${id}`)).data;
  }

  async update(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }

  async delete(id) {
    return (await this.api.delete(`/${id}`)).data;
  }
}
