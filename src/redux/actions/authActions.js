import { notification } from "antd";
import { publicAPI, privateAPI, attachToken } from "../../API";
import {
  SET_USER_COLORS,
  SET_USER_RESTRICTIONS,
  SET_BAR_COLORS,
  SET_LIVE_PAGE_CONFIG,
} from "../types/generalTypes";

export const clientLogin = (payload, history, isDemo = false) => {
  return async (dispatch) => {
    try {
      const res = await publicAPI.post(`/client/login`, payload);
      if (res) {
        console.log("hello",payload);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.user.userName);
        if (isDemo) {
          localStorage.setItem("isDemo", true);
        }
        notification.success({
          message: res.data.message,
          duration: 3,
        });
        attachToken();
        dispatch({
          type: SET_USER_COLORS,
          payload: res.data.user.colors,
        });
        dispatch({
          type: SET_USER_RESTRICTIONS,
          payload: res.data.user.sidebarAccess,
        });
        dispatch({
          type: SET_BAR_COLORS,
          payload: res.data.user.barColors,
        });
        dispatch({
          type: SET_LIVE_PAGE_CONFIG,
          payload: res.data.user.livePageConfig,
        });
        history.replace("/");
      }
    } catch (err) {
      notification.error({
        message: err?.response?.data?.message || "Server Error",
        duration: 3,
      });
    }
  };
};

export const clientSignup = async (payload, history) => {
  // return async (dispatch) => {
  try {
    const res = await publicAPI.post(`/client/create`, payload);
    if (res) {
      notification.success({
        message: res.data.message,
        duration: 3,
      });
      history.replace("/login");
    }
  } catch (err) {
    notification.error({
      message: err?.response?.data?.message || "Server Error",
      duration: 3,
    });
  }
};

export const clientUpdate = async (payload) => {
  // return async (dispatch) => {
  try {
    attachToken();
    const res = await privateAPI.post(`/client/update`, payload);
    if (res) {
      notification.success({
        message: res.data.message,
        duration: 3,
      });
    }
  } catch (err) {
    notification.error({
      message: err?.response?.data?.message || "Server Error",
      duration: 3,
    });
  }
};

export const updateClientLocation = async (payload) => {
  // return async (dispatch) => {
  try {
    attachToken();
    const res = await privateAPI.post(`/client/update-location`, payload);
    if (res) {
      console.log(res.data.message);
    }
  } catch (err) {
    notification.error({
      message: err?.response?.data?.message || "Server Error",
      duration: 3,
    });
  }
};

export const clientUpdatePassword = async (payload) => {
  // return async (dispatch) => {
  try {
    attachToken();
    const res = await privateAPI.post(`/client/update-password`, payload);
    if (res) {
      notification.success({
        message: res.data.message,
        duration: 3,
      });
    }
  } catch (err) {
    notification.error({
      message: err?.response?.data?.message || "Server Error",
      duration: 3,
    });
  }
};

export const getClient = () => {
  return async (dispatch) => {
    try {
      attachToken();
      const res = await privateAPI.get(`/client/get`);
      if (res) {
        console.log("res.data", res.data);
        dispatch({
          type: SET_USER_COLORS,
          payload: res.data.colors,
        });
        dispatch({
          type: SET_USER_RESTRICTIONS,
          payload: res.data.sidebarAccess,
        });
        dispatch({
          type: SET_BAR_COLORS,
          payload: res.data.barColors,
        });
        dispatch({
          type: SET_LIVE_PAGE_CONFIG,
          payload: res.data.livePageConfig,
        });
        return res.data;
      }
    } catch (err) {
      // notification.error({
      //   message: err?.response?.data?.message || "Server Error",
      //   duration: 3,
      // });
    }
  };
};

export const updateLoadActions = async (payload) => {
  // return async (dispatch) => {
  try {
    attachToken();
    const res = await privateAPI.post(
      `/client/update-loadpeak-actions`,
      payload
    );
    if (res) {
      notification.success({
        message: res.data.message,
        duration: 5,
      });
    }
  } catch (err) {
    // notification.error({
    //   message: err?.response?.data?.message || "Server Error",
    //   duration: 3,
    // });
  }
};
// };
