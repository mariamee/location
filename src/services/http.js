import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  patch: axios.patch,
};
