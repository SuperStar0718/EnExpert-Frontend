import { notification } from "antd";
import { privateAPI, attachToken } from "../../API";

export const getDigitalization = async () => {
  try {
    attachToken();
    const res = await privateAPI.get(`/digitalization/get-digitalization`);

    if (res) {
      return res.data;
    }
  } catch (err) {
    console.log("err", err);
    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};

export const getHistogramData = async (paayload) => {
  try {
    attachToken();
    const res = await privateAPI.post(
      `/digitalization/get-histogram-data`,
      paayload
    );

    if (res) {
      return res.data;
    }
  } catch (err) {
    console.log("err", err);
    // swal("", err?.response?.data?.message || "Server Error", "error");
  }
};
