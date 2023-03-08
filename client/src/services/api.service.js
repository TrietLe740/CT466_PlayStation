import axios from "axios";

const commonConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export default function api(baseURL) {
  return axios.create({ baseURL, ...commonConfig });
}
