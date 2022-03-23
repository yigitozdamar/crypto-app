import React from "react";
import millify from "millify";
import { Row, Col, Statistic, Typography } from "antd";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { Title } = Typography;

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          {" "}
          <Statistic title="Total CryptoCurrencies" value="5" />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="Total Exchanges" value="5" />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="Total Market Cap" value="5" />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="Total 24h Volume" value="5" />{" "}
        </Col>
        <Col span={12}>
          {" "}
          <Statistic title="Total Markets" value="5" />{" "}
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
