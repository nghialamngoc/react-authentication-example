import axios from "../libs/axios";
import { delay } from "../utils/delay";

export const loginApi = async (username: string, password: string) => {
  try {
    const response = await axios.post(`/login`, { username, password });

    return response?.data;
  } catch (error) {
    console.error("login error:", error);
    throw error;
  }
};

export const refreshTokenApi = async (refreshToken: string) => {
  try {
    await delay(3000);
    const response = await axios.post(`/refresh-token`, { refreshToken });
    return response?.data;
  } catch (error) {
    console.error("refreshToken error:", error);
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await axios.get(`/user`);
    return response?.data?.user;
  } catch (error) {
    console.error("getUser error:", error);
    throw error;
  }
};

export const fakeApi = async () => {
  await axios.get(`/anotherApi`);
};
