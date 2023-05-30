import { notification } from "antd";
import { publicAPI, privateAPI, attachToken } from "../../API";

export const getMaxLoad = async () => {
  // return async (dispatch) => {
  try {
    attachToken();
    const res = await privateAPI.get(`/loadpeak/get-max-load`);
    if (res) {
      return res.data;
    }
  } catch (err) {
    console.log("err", err);
    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};

export const getCurrentMonthLoad = async (payload) => {
  // return async (dispatch) => {
  try {
    attachToken();
    const res = await privateAPI.post(
      `/loadpeak/get-electric-consumption`,
      payload
    );
    if (res) {
      return res.data;
    }
  } catch (err) {
    console.log("err", err);
    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};

export const getMonthlyLoad = async () => {
  // return async (dispatch) => {
  try {
    attachToken();
    const res = await privateAPI.get(`/loadpeak/get-monthly-consumption`);
    if (res) {
      return res.data;
    }
  } catch (err) {
    console.log("err", err);
    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};
