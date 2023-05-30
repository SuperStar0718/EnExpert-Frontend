import { notification } from "antd";
import axios from "axios";
import { publicAPI, privateAPI, attachToken, clientPublicIP } from "../../API";

export const createLog = async (payload) => {
  try {
    attachToken();
    await privateAPI.post(`/logs/create`, payload);
    console.log("payload", payload);
  } catch (err) {
    console.log("err", err);
  }
};

export const getElectricConsumption = async () => {
  // return async (dispatch) => {
  try {
    attachToken();
    const res = await privateAPI.get(`/home/get-electric-consumption`);
    // const res = await axios.get(
    //   `${clientPublicIP}/dashboard/liveelectricconsumption`,
    //   {
    //     withCredentials: false,
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   }
    // );
    if (res) {
      // console.log("response : ", res.data);
      return res.data;
    }
  } catch (err) {
    console.log("err", err);
    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};
// };

export const getEnergyCost = async (payload) => {
  // return async (dispatch) => {
  try {
    attachToken();
    const res = await privateAPI.post(`/home/get-energy-cost`, payload);
    if (res) {
      // console.log("response : ", res.data);
      return res.data;
    }
  } catch (err) {
    console.log("err", err);
    // notification.error({
    //   message: err?.response?.data?.message || "Server Error",
    //   duration: 3,
    // });
    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};
// };

export const getElectricConsumptionGraph = async (payload) => {
  // return async (dispatch) => {
  try {
    attachToken();
    const res = await privateAPI.post(
      `/home/get-total-electric-consumption`,
      payload
    );
    if (res) {
      // console.log("response : ", res.data);
      return res.data;
    }
  } catch (err) {
    console.log("err", err);

    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};

export const getRoundChartData = async (payload) => {
  // return async (dispatch) => {
  try {
    attachToken();
    const res = await privateAPI.post(
      `/home/get-round-electric-consumption`,
      payload
    );
    if (res) {
      // console.log("response : ", res.data);
      return res.data;
    }
  } catch (err) {
    console.log("err", err);

    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};
// };

export const getHeatmap = async (payload) => {
  // return async (dispatch) => {
  try {
    attachToken();
    const res = await privateAPI.post(`/home/get-heat-map`, payload);
    if (res) {
      // console.log("response : ", res.data);
      return res.data;
    }
  } catch (err) {
    console.log("err", err);
    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};
// };

export const getPvProduction = async (payload) => {
  // return async (dispatch) => {
  try {
    attachToken();
    const res = await privateAPI.post(`/home/get-pv-production`, payload);
    if (res) {
      // console.log("response : ", res.data);
      return res.data;
    }
  } catch (err) {
    console.log("err", err);
    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};
// };

export const getPowerQualtiy = async () => {
  try {
    attachToken();
    const res = await privateAPI.get(`/home/get-power-qualtiy`);
    if (res) {
      return res.data;
    }
  } catch (err) {
    console.log("err", err);
  }
};
