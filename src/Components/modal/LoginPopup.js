import React, { useState } from "react";
import { Modal, Button, Typography, Divider, Row, Col } from "antd";

const LoginPopup = ({ show, data }) => {
  const [isModalVisible, setIsModalVisible] = useState(show);

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
      <Button type="link" onClick={showModal}>
        View
      </Button>
      <Modal
        visible={isModalVisible}
        centered
        footer={false}
        // closable={false}
        width={"50%"}
        onCancel={handleCancel}
        className="modal-popup"
      >
        <Row>
          <Col xs={24} md={12}>
            <Typography.Title level={4}>
              Client Name : <span>{data.client.name}</span>
            </Typography.Title>
          </Col>
          <Col xs={24} md={12}>
            <Typography.Title level={4}>
              Contact : <span>{data.client.phone}</span>
            </Typography.Title>
          </Col>
          <Col xs={24} md={12}>
            <Typography.Title level={4}>
              Product : <span>{data.product.name}</span>
            </Typography.Title>
          </Col>
          <Col xs={24} md={12}>
            <Typography.Title level={4}>
              Email : <span>{data.client.email}</span>
            </Typography.Title>
          </Col>
          <Col xs={24} md={12}>
            <Typography.Title level={5}>
              Brand : <span>{data.brand.name}</span>
            </Typography.Title>
          </Col>
          <Col xs={24} md={12}>
            <Typography.Title level={5}>
              Product ID : <span>{data.product.productCode}</span>
            </Typography.Title>
          </Col>
          <Col xs={24}>
            <Typography.Title level={5}>
              Description : <span>{data.notes}</span>
            </Typography.Title>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default LoginPopup;
