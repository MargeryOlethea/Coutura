import axios from "axios";
import Swal from "sweetalert2";

const baseApi = axios.create({
  baseURL: "https://phase2-aio.vercel.app",
});

baseApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export { baseApi };
export async function fetchProducts({ setLoading }) {
  try {
    setLoading(true);
    const { data } = await baseApi.get(`/apis/branded-things/products`);

    return data.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error.response.data.error}`,
    });
  } finally {
    setLoading(false);
  }
}

export async function fetchCategories({ setLoading }) {
  try {
    setLoading(true);
    const { data } = await baseApi.get(`/apis/branded-things/categories`);

    return data.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error.response.data.error}`,
    });
  } finally {
    setLoading(false);
  }
}

export async function fetchProduct({ setLoading, id }) {
  try {
    setLoading(true);
    const { data } = await baseApi.get(`/apis/branded-things/products/${id}`);
    return data.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: `${error.response.data.error}`,
    });
  } finally {
    setLoading(false);
  }
}
