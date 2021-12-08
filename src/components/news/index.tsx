import React, { useEffect, useState } from "react";
import { Avatar, Card, Col, Input, Row, Typography, Select } from "antd";
import millify from "millify";
import moment from "moment";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../../services/cryptoNewsApi";
import { Loader } from "../";

const { Title, Text } = Typography;
const { Option } = Select;
const demoImage =
  "https://www.bing.com/th?id=OVFT.6Tolds6hp3PFd5tLxnyfbi&pid=News";

const News = ({ simplified }: any) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(cryptoNews);
  if (!cryptoNews?.value)
    return (
      <>
        <Loader />
      </>
    );
  return (
    <>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value: string) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency: any) => (
              <Option value={currency.name}>{currency.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      <br />
      <Row gutter={[24, 24]} className="crypto-card-container">
        {cryptoNews?.value.map((news: any, i: any) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.name}
                  </Title>
                  <img
                    src={
                      news?.image?.thumbnail?.contentUrl
                        ? news?.image?.thumbnail?.contentUrl
                        : demoImage
                    }
                    alt={demoImage}
                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                  />
                </div>
                <p>
                  {news.description > 100
                    ? `${news.description.substring(0, 100)} ...`
                    : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar
                      src={
                        news?.provider[0]?.image?.thumbnail?.contentUrl
                          ? news?.provider[0]?.image?.thumbnail?.contentUrl
                          : demoImage
                      }
                      alt="news"
                    />
                    <Text className="provider-name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  <Text>
                    {moment(news.datePublished).startOf("second").fromNow()}
                  </Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
