import React, { Component } from "react";
import styled, { css } from "styled-components";

function SimpleStatGroupSet(props) {
    console.log(props)
  return props.isLoading ? (
      <Container {...props}>
          <TitleType>{props.title}</TitleType>
          <SimpleStatValueRow>
              <SimpleStatValue>Loading</SimpleStatValue>
              <ChangeBox>
                  <ChangeValue>...</ChangeValue>
              </ChangeBox>
          </SimpleStatValueRow>
          <SubTitle>{props.subTitle}</SubTitle>
      </Container>
  ) :
      (
          <Container {...props}>
              <TitleType>{props.title} {props.isNeg}</TitleType>
              <SimpleStatValueRow>
                  <SimpleStatValue>{props.count}</SimpleStatValue>
                  <ChangeBox isNeg={props.isNeg}>
                      <ChangeValue>{props.dif}</ChangeValue>
                  </ChangeBox>
              </SimpleStatValueRow>
              <SubTitle>{props.subTitle}</SubTitle>
          </Container>
      );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleType = styled.span`
  font-family: Roboto;
  width: 145px;
  height: 18px;
  color: #121212;
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  text-align: left;
  font-family:'roboto-regular'
`;

const SimpleStatValue = styled.span`
  
  width: 107px;
  height: 35px;
  color: #121212;
  font-size: 30px;
  font-weight: 600;
  font-family:'roboto-regular'
`;

const ChangeBox = styled.div`
  width: 72px;
  height: 30px;
  background-color: ${props => (props.isNeg) ? "red" : "rgba(126,211,33,1)"};
  flex-direction: column;
  display: flex;
  align-items:center;
  justify-content:center;
  margin-left: 1px;
  margin-top: 4px;
  border-radius:5px
`;

const ChangeValue = styled.span`
  font-family: 'roboto-regular';
  color: rgba(255,255,255,1);
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  
  align:center
`;

const SimpleStatValueRow = styled.div`
  height: 35px;
  flex-direction: row;
  display: flex;
  margin-top: 4px;
  margin-left: 25px;
  margin-right: 14px;
`;

const SubTitle = styled.span`
  font-family: roboto-regular;
  width: 140px;
  height: 18px;
  color: #121212;
  font-size: 14px;
  text-align: center;
  margin-top: 16px;
  margin-left: 79px;
`;

export default SimpleStatGroupSet;
