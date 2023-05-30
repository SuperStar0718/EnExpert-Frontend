import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loader = ({ size }) => {
  return (
    <Spin
      indicator={
        <LoadingOutlined style={{ fontSize: size ? size : 60 }} spin />
      }
    />
  );
};

export default Loader;
