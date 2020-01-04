import React, { Component } from "react";
import styled, { css } from "styled-components";

function test(props) {
    return (
        <testBox>
            <StatBoxValue>1,000</StatBoxValue>
            <StatBoxTitle>TOTAL CONVERSATIONS</StatBoxTitle>
        </testBox>
    );
}

const testBox = styled.div`
  display: flex;
  width: 389px;
  height: 161px;
  background-color: rgba(255,255,255,1);
  border-radius: 18px;
  flex-direction: column;
  box-shadow: 4px 5px 10px  0.57px rgba(0,0,0,1) ;
`;

const StatBoxValue = styled.span`
  font-family: Roboto;
  color: rgba(30,30,30,1);
  font-size: 30px;
  font-weight: 700;
  font-style: normal;
  margin-top: 50px;
  margin-left: 31px;
`;

const StatBoxTitle = styled.span`
  font-family: Helvetica;
  color: rgba(30,30,30,1);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  margin-top: -55px;
  margin-left: 31px;
`;

export default test;