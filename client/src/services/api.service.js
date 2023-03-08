import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:3001/api",
});

// const commonConfig = {
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json",
//   },
// };

// export default function api(baseURL) {
//   return axios.create({ baseURL, ...commonConfig });
// }
