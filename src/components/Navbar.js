import { React, useState } from "react";
import styled from "styled-components";
import { Select, Input, Slider, Checkbox, Row, Col } from "antd";
import logo from "./img/Group 18.svg";
import Card from "./Card";
import Map from "./Map";

const { Search } = Input;

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const onSelectChange = (e) => {
    setSelect(e);
        console.log(select);
  };
  return (
    <>
      <CheckBoxWrapper>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <RowStyle>
          <Col span={12}>
            <Search
              style={{
                width: "100%",
              }}
              placeholder="Search location"
              onChange={handleChange}
              allowClear
              enterButton
            />
          </Col>
          <Col span={1}></Col>
          <Col span={4}>
            <Select
              defaultValue="Any price"
              // onChange={handleChange}
              options={[
                {
                  label: (
                    <Slider
                      range={{
                        draggableTrack: true,
                      }}
                      defaultValue={[20, 50]}
                    />
                  ),
                },
              ]}
            />
          </Col>
          <Col span={1}></Col>
          <Col span={4}>
            <Select
              // onChange={onSelectChange}
              defaultValue="3 Bedrooms"
              options={[
                {
                  label: (
                    <Checkbox.Group
                      onChange={onSelectChange}
                    >
                      <Checkbox value="1">1</Checkbox>
                      <Checkbox value="2">2</Checkbox>
                      <Checkbox value="3">3</Checkbox>
                      <Checkbox value="4+">4+</Checkbox>
                    </Checkbox.Group>
                  ),
                },
              ]}
            />
          </Col>
        </RowStyle>
      </CheckBoxWrapper>
      <Row>
        <Col span={12}>
          <Map />
        </Col>
        <Col span={12}>
          <Card search={search} select={select} />
        </Col>
      </Row>
    </>
  );
};

export default Navbar;

const CheckBoxWrapper = styled.div`
  padding: 20px 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 10px #0000001;
  .ant-select {
    width: 100%;
  }
`;
const Logo = styled.div`
  // display: none;
`;
const RowStyle = styled(Row)`
  width: 50%;
`;
