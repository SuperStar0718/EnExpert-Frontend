import { useState } from "react";
import { Button, Form, Input, Typography, Select, notification } from "antd";
import { useHistory, Redirect, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { countryCodes } from "../CountryCodes";
import { clientSignup } from "../redux";
import logo from "../Assets/logo2.png";

const { Option } = Select;

const Login = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("");

  const Login = async (values) => {
    if (values.password === values.Cpassword) {
      setLoading(true);
      await clientSignup({ ...values }, history);
      // await dispatch(clientSignUp({ ...values, countryCode }, history));
      setLoading(false);
    } else {
      notification.error({
        message: "Password and Confirm Password Doesnot Matched.",
        duration: 3,
      });
    }
  };

  if (localStorage.hasOwnProperty("token")) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="temp-login-main signup-main">
        <div className="login-main">
          <img src={logo} />
          <p>Fill below fields to cretae your account</p>

          {/* <Typography.Title level={2}>Sign Up</Typography.Title> */}
          <Form layout="vertical" onFinish={Login}>
            <Form.Item name={"userName"} label={"Name"}>
              <Input />
            </Form.Item>
            {/* <Form.Item name={"company"} label={"Company Name"}>
              <Input />
            </Form.Item>
            <Form.Item name={"legalCompanyName"} label={"Legal Company Name"}>
              <Input />
            </Form.Item>
            <Form.Item name={"address"} label={"Address"}>
              <Input />
            </Form.Item>
            <Form.Item name={"city"} label={"City"}>
              <Input />
            </Form.Item>
            <Form.Item name={"provience"} label={"Provience/State"}>
              <Input />
            </Form.Item>
            <Form.Item name={"country"} label={"Country"}>
              <Input />
            </Form.Item>
            <Form.Item name={"zipCode"} label={"Postal /Zip Code"}>
              <Input />
            </Form.Item> */}
            <Form.Item name={"email"} label={"Email Address"}>
              <Input />
            </Form.Item>
            {/* <Form.Item name={"countryCode"} label={"Country Code"}>
              <Input />
            </Form.Item> */}
            {/* <Form.Item name={"phone"} label={"Telephone #"}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Select
                  showSearch
                  // placeholder="country"
                  optionFilterProp="children"
                  style={{
                    width: "100px",
                    marginRight: "5px",
                    height: "40px",
                  }}
                  // value={defaultCountryCode ? defaultCountryCode : ""}
                  onChange={(value, key) => {
                    setCountryCode(value);
                    // setNewphone(`${key.key}`);
                    // console.log(
                    //   "phone :>> ",
                    //   `${value}/${key.key}/${user?.phone}`
                    // );
                  }}
                  // onSearch={onSearch}
                >
                  {countryCodes.map((code) => (
                    <Option
                      // style={{ color: "black" }}
                      value={`${code.code}`}
                      key={`${code.dial_code}`}
                    >
                      {code.code}
                    </Option>
                  ))} 
                </Select>
                <Input />
              </div>
            </Form.Item> */}
            <Form.Item name={"password"} label={"Password"}>
              <Input type="password" />
            </Form.Item>
            <Form.Item name={"Cpassword"} label={"Confirm Password"}>
              <Input type="password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" loading={loading} htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            <div className="signup">
              Already have account?{" "}
              <Link to="/login">
                <span>Login</span>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    );
  }
};

export default Login;
