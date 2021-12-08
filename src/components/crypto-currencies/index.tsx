import React, { useEffect, useState } from "react";
import { Card, Col, Input, Row } from "antd";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../../services/cryptoApi";
import { Loader } from "../";

const CryptoCurrencies = ({ simplified }: any) => {
  const coins = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(coins);
  const [cryptos, setCryptos] = useState(data?.data?.coins);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const filteredData = data?.data?.coins.filter((crypto: any) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [data, searchTerm]);

  if (cryptos && !isFetching) {
    return (
      <>
        {!simplified && (
          <div className="search-crypto">
            <Input
              placeholder="Search Cryptocurrencies"
              onChange={(e: any) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </div>
        )}

        <Row gutter={[32, 32]} className="crypto-card-container">
          {cryptos.map((currency: any) => (
            <Col
              xs={24}
              sm={12}
              lg={6}
              className="crypto-card"
              key={currency.id}
            >
              <Link to={`/crypto/${currency.id}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={
                    <img
                      className="crypto-image"
                      src={currency.iconUrl}
                      alt={""}
                    />
                  }
                  hoverable
                >
                  <p>Price : {millify(currency.price)}</p>
                  <p>Market Cap : {millify(currency.marketCap)}</p>
                  <p>Daily Change : {millify(currency.change)}</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </>
    );
  }
  return (
    <>
      <Loader />
    </>
  );
};

export default CryptoCurrencies;
