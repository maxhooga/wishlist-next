import axios, { AxiosInstance } from "axios";

const API_HOST = "http://localhost";
const API_PORT = 4000;

export class Api {
  request: AxiosInstance;

  constructor() {
    this.request = axios.create({
      baseURL: `${API_HOST}:${API_PORT}`,
    });
  }

  fetchProducts = ({ page, perPage }: { page: number; perPage: number }) => {
    return this.request.get(
      `/api/v1/admin/products?page=${page}&perPage=${perPage}`
    );
  };
}

export default new Api();
