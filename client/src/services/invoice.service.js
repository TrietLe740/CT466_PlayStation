import createApiClient from "./api.service";

export default class InvoiceService {
  constructor(baseUrl = "/api/invoices") {
    this.api = createApiClient(baseUrl);
  }

  async create(data) {
    console.log(data);
    return (await this.api.post("/", data)).data;
  }

  async getAll() {
    return (await this.api.get("/")).data;
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
