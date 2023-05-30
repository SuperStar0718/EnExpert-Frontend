import { Typography, Button } from "antd";
import Respond from "../Components/modal/Respond";

const MarketCard = () => {
  return (
    <div className="market-card">
      <div className="top-bar">
        <div>
          <Typography.Title level={4}>Brand</Typography.Title>
          <p>3M</p>
        </div>
        <div>
          <Typography.Title level={4}>Product ID</Typography.Title>
          <p className="secondary">1626W</p>
        </div>
        <div>
          <Typography.Title level={4}>Qty</Typography.Title>
          <p className="secondary">300</p>
        </div>
        <div>
          <Typography.Title level={4}>Price</Typography.Title>
          <p className="price">€185.00</p>
        </div>
        <Respond />
      </div>
      <div>
        <Typography.Title level={4}>Product</Typography.Title>
        <p className="secondary desc">
          Rapid Diagnostic Test Kit Icon DS Strep A imachromatographic Assay
          Strep A Test Throat / Tonsil Saliva Sample CLIA Waived 25 Tests
        </p>
      </div>
    </div>
  );
};

export default MarketCard;
