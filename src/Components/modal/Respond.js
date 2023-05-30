import { useState } from "react";
import { Modal, Button, Typography, Input, Row, Col, Checkbox } from "antd";

const LoginPopup = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        className="btn-outlined secondary-border"
      >
        Respond
      </Button>
      <Modal
        visible={isModalVisible}
        centered
        footer={false}
        // closable={false}
        onCancel={handleCancel}
        keyboard={true}
        maskClosable={true}
        className="modal-respond"
        width={"auto"}
      >
        <Row gutter={[30, 30]}>
          <Col xs={24} md={12} className="section">
            <Typography.Title level={5}>Brand</Typography.Title>
            <Typography.Title level={5}>Product Name</Typography.Title>
            <Typography.Title level={5}>
              Price <span className="secondary">€185.00</span>
            </Typography.Title>
            <Typography.Title level={5}>
              Qty <span className="secondary">100</span>
            </Typography.Title>
            <p>I am Interested in</p>
          </Col>
          <Col xs={24} md={12} className="section">
            <p className="name">
              3M <Typography.Title level={5}>Product Code</Typography.Title>
              <p>1626W</p>
            </p>
            <p>Tegaderm Dressing, Case 400</p>
            <Input placeholder="Enter Your Price." />
            <Input placeholder="Enter Your  Quantity." />
            <Checkbox.Group
              options={["Buying", "Selling"]}
              className="check-grp"
            />
          </Col>
          <Col xs={24} className="section">
            <Input.TextArea
              rows={7}
              placeholder="Notes:"
              style={{ resize: "none" }}
            />
          </Col>
          <Col xs={24}>
            <Button type="primary">Submit</Button>
          </Col>
        </Row>
        {/* <Row gutter={[30, 30]}>
          <Col xs={24} md={12} className="section">
            <Typography.Title level={5}>Brand</Typography.Title>
            <p>3M</p>
          </Col>
          <Col xs={24} md={12} className="section">
            <Typography.Title level={5}>Product Code</Typography.Title>
            <p>1626W</p>
          </Col>
          <Col xs={24} className="section">
            <Typography.Title level={5}>Product Name</Typography.Title>
            <p>Tegaderm Dressing, Case 400</p>
          </Col>
          <Col xs={24} className="section">
            <Typography.Title level={5}>Price</Typography.Title>
            <span className="secondary">€185.00</span>
            <Input placeholder="Enter Your Price." />
          </Col>
          <Col xs={24} className="section">
            <Typography.Title level={5}>Qty</Typography.Title>
            <span>100</span>
            <Input placeholder="Enter Your  Quantity." />
          </Col>
          <Col xs={24} className="section">
            <p>I am Interested in</p>
            <Checkbox.Group options={["Buying", "Selling"]} />
          </Col>
          <Col xs={24} className="section">
            <Input.TextArea
              rows={7}
              placeholder="Notes:"
              style={{ resize: "none" }}
            />
          </Col>
          <Col xs={24}>
            <Button type="primary">Submit</Button>
          </Col>
        </Row> */}
      </Modal>
    </>
  );
};

export default LoginPopup;
