import React from "react";
import { Card, Dropdown, Checkbox, Button } from "antd";
// import Paginate from "./Pagination";
import logo from "./img/Mask Group 1.png";
import loc from "./img/location.svg";
import bed from "./img/Group 86.svg";
import dim from "./img/Group 75.svg";
import tub from "./img/Group 73.svg";
import Sort from "./img/Vector.svg";
import { Data } from "./properties";

const items = [
  {
    label: <Checkbox value="1">Low to High</Checkbox>,
  },
  {
    label: <Checkbox value="2">High to Low</Checkbox>,
  },
];

const CardList = ({ search, select }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>
          <strong style={{ fontSize: "20px" }}>{Data.length}</strong> Properties Available
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
      <div style={{ overflow: "scroll", height: "800px", width: "auto" }}>
        {Data?.filter((item) =>{
          return search.toLowerCase() === 'No match Found' || select.includes(item.beds) ? item : item.location.toLowerCase().includes(search);
        }).map((value, key) => {
          return (
            <div key={key}>
              <div
                style={{
                  width: "880px",
                  border: "1px solid #e8e8e8",
                  borderRadius: "10px",
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
                      <p style={{ marginRight: "20px" }}>{value.beds}</p>
                      <img alt="tub" src={tub} />
                      <p style={{ marginRight: "20px" }}>{value.baths}</p>
                      <img alt="dim" src={dim} />
                      <p style={{ marginRight: "20px" }}>
                        {value.area} sq meters
                      </p>
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

export default CardList;
