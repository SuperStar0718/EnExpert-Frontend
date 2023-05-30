import { useState } from "react";
import { Button, Form, Input, Typography, Divider } from "antd";
import { useHistory, Redirect, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clientLogin } from "../redux/index";
import logo from "../Assets/logo2.png";

const Login = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [demoLoading, setDemoLoading] = useState(false);

  const clientLoginFnc = async (values, demo = false) => {
    const { email, password } = values;
    if (demo) {
      setDemoLoading(true);
      await dispatch(clientLogin({ email, password }, history,true));
      setDemoLoading(false);
    } else {
      setLoading(true);
      await dispatch(clientLogin({ email, password }, history));
      setLoading(false);
    }
  };

  if (localStorage.hasOwnProperty("token")) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="temp-login-main">
        <div className="login-main">
          <img src={logo} />
          <p>Sign in to your account to continue</p>
          <Form
            layout="vertical"
            onFinish={clientLoginFnc}
            className="login-form"
          >
            <Typography.Title level={2}>Welcome!</Typography.Title>

            <Form.Item name={"email"} label={"Email"}>
              <Input />
            </Form.Item>
            <Form.Item name={"password"} label={"Password"}>
              <Input type="password" />
            </Form.Item>
            <div className="remember-check">
              <span />
              {/* <Checkbox>Remember Me</Checkbox> */}
              <Link>Forgot Password?</Link>
            </div>
            <Form.Item>
              <Button type="primary" loading={loading} htmlType="submit">
                Login
              </Button>
            </Form.Item>

            <div>
              <Divider>OR</Divider>
              <Button
                type="primary"
                loading={demoLoading}
                onClick={() => {
                  clientLoginFnc(
                    {
                      email: "demoaccount@gmail.com",
                      password: "12345678",
                    },
                    true
                  );
                }}
              >
                Login to Demo Dashboard
              </Button>
            </div>
            <div className="signup">
              Don’t have an account?{" "}
              <Link to="/signup">
                <span>Sign up</span>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
};

export default Login;
