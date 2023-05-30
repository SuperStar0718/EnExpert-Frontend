import { notification } from "antd";
import { privateAPI, attachToken } from "../../API";

export const getStatsLivePage = async () => {
  try {
    attachToken();
    const res = await privateAPI.get(`/live/get-stats`);

    if (res) {
      return res.data;
    }
  } catch (err) {
    console.log("err", err);
    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};

export const getHeatConsumption = async () => {
  try {
    attachToken();
    const res = await privateAPI.get(`/live/get-heat-consumption`);

    if (res) {
      return res.data;
    }
  } catch (err) {
    console.log("err", err);
    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};
export const getWaterConsumption = async () => {
  try {
    attachToken();
    const res = await privateAPI.get(`/live/get-water-consumption`);

    if (res) {
      return res.data;
    }
  } catch (err) {
    console.log("err", err);
    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};
export const getBatteryLevels = async () => {
  try {
    attachToken();
    const res = await privateAPI.get(`/live/get-battery-levels`);

    if (res) {
      return res.data;
    }
  } catch (err) {
    console.log("err", err);
    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};
export const getPvProductionLivePage = async () => {
  try {
    attachToken();
    const res = await privateAPI.get(`/live/get-pv-production`);

    if (res) {
      return res.data;
    }
  } catch (err) {
    console.log("err", err);
    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};
