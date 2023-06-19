import { React, useState } from "react";
import { Card, Dropdown, Button, Radio, Space } from "antd";
// import Paginate from "./Pagination";
import logo from "./img/Mask Group 1.png";
import loc from "./img/location.svg";
import bed from "./img/Group 86.svg";
import dim from "./img/Group 75.svg";
import tub from "./img/Group 73.svg";
import Sort from "./img/Vector.svg";
import { Data } from "./properties";
import styled from "styled-components";


const CardList = ({ filteredData }) => {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const items = [
    {
      label: (
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            <Radio value={1}>Low to High</Radio>
            <Radio value={2}>High to Low</Radio>
          </Space>
        </Radio.Group>
      ),
    },
  ];

  const dataValue = filteredData?.length>0 ? filteredData : Data;

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          <strong style={{ fontSize: "20px" }}>{dataValue.length}</strong> Properties
          Available
        </p>
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <Button type="text">
            <img alt="sort" src={Sort} height="18px" />
            Sort By Price
          </Button>
        </Dropdown>
      </div>
      <div style={{ overflowY: "scroll", height: "800px", width: "auto" }}>
        {dataValue?.sort((a, b) =>
            value === 2
              ? a.price < b.price
                ? 1
                : -1
              : a.price > b.price
              ? 1
              : -1
          )
          .map((value) => {
            return (
              <div key={value.id}>
                <div
                  style={{
                    width: "880px",
                    border: "1px solid #e8e8e8",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Card
                    hoverable
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                    cover={
                      <img
                        alt="example"
                        src={logo}
                        style={{
                          padding: "20px",
                          width: "200px",
                          marginTop: "18px",
                          marginRight: "-20px",
                        }}
                      />
                    }
                  >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div>
                        <h2>
                          {value.name}
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: "initial",
                              marginLeft: "20px",
                            }}
                          >
                            {value.type}
                          </span>
                        </h2>
                      </div>
                      <div className="location" style={{ display: "flex" }}>
                        <img
                          alt={loc}
                          src={loc}
                          style={{
                            height: "20px",
                            marginTop: "",
                            marginRight: "10px",
                          }}
                        />
                        <p style={{ marginTop: "0px" }}>{value.location}</p>
                      </div>
                      <div
                        className="description"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          marginTop: "-14px",
                        }}
                      >
                        <img alt="bedrooms" src={bed} />
                        <StyledP>{value.beds}</StyledP>
                        <img alt="tub" src={tub} />
                        <StyledP>{value.baths}</StyledP>
                        <img alt="dim" src={dim} />
                        <StyledP>
                          {value.area} sq meters
                        </StyledP>
                        <h2 style={{ marginLeft: "200px" }}>₹{value.price}</h2>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            );
          })}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <Paginate /> */}
      </div>
    </>
  );
};

const StyledP = styled.p`
margin-right: 14px;`;

export default CardList;
