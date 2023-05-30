import { notification } from "antd";
import { privateAPI, attachToken } from "../../API";
import { GET_ANALYSIS_DATA } from "../types/generalTypes";

export const getEnergyGraphData = async (payload) => {
  try {
    attachToken();
    const res = await privateAPI.post(`/energy/get-energy-graph`, payload);

    if (res) {
      return res.data;
    }
  } catch (err) {
    console.log("err", err);
    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};
