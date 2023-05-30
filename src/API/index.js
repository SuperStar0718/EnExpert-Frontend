import Axios from "axios";

export const clientPublicIP = `https://185.202.236.172`;
// export const publicIP = `http://192.168.100.6:5000`;
// export const publicIP = `http://localhost:5000`;
export const publicIP = `https://api.en-expert.com`;
export const base_url = `${publicIP}`;

export const connection_string = `${base_url}`;

export const publicAPI = Axios.create({ baseURL: connection_string });

export const privateAPI = Axios.create({ baseURL: connection_string });

export const page = 0;
export const perPage = 10;

export const attachToken = async () => {
  const jwt = localStorage.getItem("token");
  privateAPI.defaults.headers.common.Authorization = `Bearer ${jwt}`;
  // console.log("Token Attached");
};
