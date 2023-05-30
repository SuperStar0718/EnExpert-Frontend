import { useState, useEffect } from "react";
import {
  Button,
  Radio,
  Input,
  Typography,
  Upload,
  notification,
  Form,
  Row,
  Col,
  Select,
  Tag,
} from "antd";
import { PaperClipOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PlusOutlined } from "@ant-design/icons";

import Layout from "../Layout/MainLayout";
import {
  clientUpdate,
  getClient,
  clientUpdatePassword,
  updateClientLocation,
} from "../redux";

import { useTranslation } from "react-i18next";
// import { useSelector, useDispatch } from 'react-redux';
// import { switchLang } from '../../redux';

const { Paragraph } = Typography;

const Profile = () => {
  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  const { i18n, t } = useTranslation();
  const dispatch = useDispatch();
  const restrictions = useSelector((state) => state.userReducer.restrictions);
  // const dispatch = useDispatch();

  // const handleEngClick = () => {
  //   i18n.changeLanguage('eng');
  //   dispatch(switchLang('eng'));
  // };

  // const handleSpaClick = () => {
  //   i18n.changeLanguage('spa');
  //   dispatch(switchLang('spa'));
  // };

  const [isEdit, setIsEdit] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Data, setData] = useState(null);

  const [loading, setLoading] = useState(false);
  const [passloading, setPassLoading] = useState(false);

  const history = useHistory();

  const isDemo = localStorage.hasOwnProperty("isDemo");

  const getData = async () => {
    const data = await dispatch(getClient());
    setData(data);
    i18n.changeLanguage(data.language);
  };

  useEffect(async () => {
    await getData();

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        updateClientLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (e) => {
        console.log(e);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }, []);

  function integerInRange(value, min, max) {
    if (value >= min && value <= max) {
      return true;
    } else {
      // console.log("no in range");
      return false; // Not in range
    }
  }

  const updateProfile = async (values) => {
    // console.log("values", values);
    let isPvOn = restrictions.pvProduction
      ? true
      : values.barColors?.length === 3;
    if (values.colors?.length === Data.dataChannels && isPvOn) {
      let validPriceEnergyDelivery,
        validPriceEnergyInput,
        validMaxPowerSupply,
        validLoadPeakPrice,
        validPriceWaterDelivery,
        validPriceGasDelivery,
        validPriceHeatDelivery;

      if (values.priceElectricDelivery) {
        validPriceEnergyDelivery = integerInRange(
          Number(values.priceElectricDelivery),
          0.00001,
          100
        );
      }

      if (values.priceWaterDelivery) {
        validPriceWaterDelivery = integerInRange(
          Number(values.priceWaterDelivery),
          0.00001,
          100
        );
      }
      if (values.priceGasDelivery) {
        validPriceGasDelivery = integerInRange(
          Number(values.priceGasDelivery),
          0.00001,
          100
        );
      }
      if (values.priceHeatDelivery) {
        validPriceHeatDelivery = integerInRange(
          Number(values.priceHeatDelivery),
          0.00001,
          100
        );
      }

      if (values.priceEnergyInput) {
        validPriceEnergyInput = integerInRange(
          Number(values.priceEnergyInput),
          0.00001,
          100
        );
      }
      if (values.maxPowerSupply) {
        validMaxPowerSupply = integerInRange(
          Number(values.maxPowerSupply),
          1,
          1000000
        );
      }
      if (values.loadPeakPrice) {
        validLoadPeakPrice = integerInRange(
          Number(values.loadPeakPrice),
          0.00001,
          100
        );
      }

      if (
        validPriceEnergyDelivery &&
        validPriceEnergyInput &&
        validMaxPowerSupply &&
        validLoadPeakPrice &&
        validPriceWaterDelivery &&
        validPriceGasDelivery &&
        validPriceHeatDelivery
      ) {
        if (values.batteryColor?.length > 1 && values.heatColors?.length > 1) {
          notification.warn({
            message: "You can have only 1 battery color and 1 heat color",
            duration: 5,
          });
        } else {
          setLoading(true);

          let payload = {
            ...values,
            livePageConfig: {
              ...Data?.livePageConfig,
              batteryColor: values.batteryColor[0],
              heatColors: values.heatColors[0],
            },
            zipCode: values.zipCode,
            id: Data?._id,
          };
          await clientUpdate(payload);
          await getData();
          setLoading(false);
        }
      } else {
        notification.error({
          message:
            "Provided values are not in range (Max Power Supply range is 1 to 1000000 and other fields range is 0.00001 to 100.0)",
          duration: 5,
        });
      }
    } else {
      notification.error({
        message:
          "You cannot set more than " +
          Data.dataChannels +
          " global colors. or Power Quality colors cannot be more than 3",
        duration: 5,
      });
    }
  };

  const onFinish = async (values) => {
    setPassLoading(true);

    await clientUpdatePassword(values);
    await getData();

    setPassLoading(false);
    form.resetFields();
  };

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    return (
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 3,
        }}
      >
        {label}
      </Tag>
    );
  };

  return (
    <Layout active={"settings"}>
      <Typography.Title level={1}>{t("settings")}</Typography.Title>
      <Typography.Title level={4} style={{ margin: "30px 0" }}>
        Update Profile
      </Typography.Title>

      <Form
        layout="vertical"
        form={form2}
        onFinish={updateProfile}
        fields={[
          {
            name: "userName",
            value: Data?.userName,
          },
          {
            name: "email",
            value: Data?.email,
          },
          {
            name: "language",
            value: Data?.language,
          },
          {
            name: "priceElectricDelivery",
            value: Data?.priceElectricDelivery,
          },
          {
            name: "priceEnergyInput",
            value: Data?.priceEnergyInput,
          },
          {
            name: "priceWaterDelivery",
            value: Data?.priceWaterDelivery,
          },
          {
            name: "priceHeatDelivery",
            value: Data?.priceHeatDelivery,
          },
          {
            name: "priceGasDelivery",
            value: Data?.priceGasDelivery,
          },
          {
            name: "maxPowerSupply",
            value: Data?.maxPowerSupply,
          },
          {
            name: "loadPeakPrice",
            value: Data?.loadPeakPrice,
          },
          {
            name: "colors",
            value: Data?.colors,
          },
          {
            name: "barColors",
            value: Data?.barColors,
          },
          {
            name: "heatColors",
            value: [Data?.livePageConfig?.heatColors],
          },
          {
            name: "batteryColor",
            value: [Data?.livePageConfig?.batteryColor],
          },
          {
            name: "zipCode",
            value: Data?.zipCode,
          },
        ]}
      >
        <Row gutter={[30, 30]}>
          <Col xs={24} md={12}>
            <Form.Item
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your old password!",
              //   },
              // ]}
              name={"userName"}
              label="User Name"
            >
              <Input disabled={isDemo} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
              ]}
              name={"email"}
              label="Email"
            >
              <Input disabled />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item name={"zipCode"} label="Zip Code">
              <Input type={"number"} />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name={"priceElectricDelivery"}
              label="Price Energy Delivery (€/kWh)"
            >
              <Input type={"number"} />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name={"priceWaterDelivery"}
              label="Price Water Delivery (€/kWh)"
            >
              <Input type={"number"} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name={"priceGasDelivery"}
              label="Price Gas Delivery (€/kWh)"
            >
              <Input type={"number"} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name={"priceHeatDelivery"}
              label="Price Heat Delivery (€/kWh)"
            >
              <Input type={"number"} />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item
              name={"priceEnergyInput"}
              label="Price Energy Input (€/kWh)"
            >
              <Input type={"number"} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name={"maxPowerSupply"} label="Max Power Supply (kW)">
              <Input type={"number"} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name={"loadPeakPrice"} label="Load Peak Price (€/kW)">
              <Input type={"number"} />
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item name={"language"} label="Select Language">
              <Select>
                <Select.Option value={"de"}>German (DE)</Select.Option>
                <Select.Option value={"it"}>Italian (ITA)</Select.Option>
                <Select.Option value={"en"}>English (EN)</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item name={"colors"} label="Set Global Color Preferences">
              <Select
                disabled={isDemo}
                showArrow
                tagRender={tagRender}
                style={{
                  width: "100%",
                }}
                mode="tags"
              ></Select>
            </Form.Item>
          </Col>

          {!restrictions?.pvProduction && (
            <Col xs={24} md={12}>
              <Form.Item
                name={"barColors"}
                label="Set Power Quality Bars Colors"
              >
                <Select
                  disabled={isDemo}
                  showArrow
                  tagRender={tagRender}
                  style={{
                    width: "100%",
                  }}
                  mode="tags"
                ></Select>
              </Form.Item>
            </Col>
          )}

          <Col xs={24} md={12}>
            <Form.Item name={"heatColors"} label="Set Heat Consumption Colors">
              <Select
                disabled={isDemo}
                showArrow
                tagRender={tagRender}
                style={{
                  width: "100%",
                }}
                mode="tags"
              ></Select>
            </Form.Item>
          </Col>

          <Col xs={24} md={12}>
            <Form.Item name={"batteryColor"} label="Set Battery Level Color">
              <Select
                disabled={isDemo}
                showArrow
                tagRender={tagRender}
                style={{
                  width: "100%",
                }}
                mode="tags"
              ></Select>
            </Form.Item>
          </Col>

          <Col xs={24}>
            <Form.Item>
              <Button loading={loading} htmlType="submit" type="primary">
                Save Profile
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>

      <Typography.Title level={4} style={{ margin: "30px 0" }}>
        Update Password
      </Typography.Title>

      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Row gutter={[30, 30]}>
          <Col xs={24} md={12}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input your old password!",
                },
              ]}
              name={"oldPass"}
              label="Old Password"
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input your new password!",
                },
              ]}
              name={"newPass"}
              label="New Password"
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Please input confirm new password!",
                },
              ]}
              name={"ConfirmPass"}
              label="Confirm New Password"
            >
              <Input.Password />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item>
              <Button loading={passloading} htmlType="submit" type="primary">
                Update
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default Profile;
