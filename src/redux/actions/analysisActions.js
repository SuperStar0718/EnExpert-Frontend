import { notification } from "antd";
import { privateAPI, attachToken } from "../../API";
import { GET_ANALYSIS_DATA } from "../types/generalTypes";

export const getAnalysisData = (payload) => {
  return async (dispatch) => {
    try {
      attachToken();
      const res = await privateAPI.post(`/analysis/get-analysis`, payload);

      if (res) {
        dispatch({
          type: GET_ANALYSIS_DATA,
          payload: res.data,
        });
        return res.data;
      }
    } catch (err) {
      console.log("err", err);
      // swal("", err?.response?.data?.message || "Server Error", "error");
    }
  };
};
