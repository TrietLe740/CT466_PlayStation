import createApiClient from "./api.service";

export default class SearchService {
  constructor(baseUrl = "http://localhost:3001/api/search") {
    this.api = createApiClient(baseUrl);
  }

  async search(query) {
    return (await this.api.get("/", { params: { q: query } })).data;
  }
}
