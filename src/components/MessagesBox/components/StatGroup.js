import React, { useState, Component } from "react";
import styled, { css } from "styled-components";
import Icon, {Entypo} from "react-web-vector-icons"

function StatGroup(props) {
    console.log(props.count)
  return props.loading? (
    <Container {...props}>
      <ChangeBoxStack>
        <ChangeBox>
          <ChangeValue>...</ChangeValue>
        </ChangeBox>
        <StatValue>...</StatValue>

        <MessagesTotal>Messages {props.subtitle}</MessagesTotal>
      </ChangeBoxStack>
    </Container>
  ) :(
        <Container {...props}>
            <ChangeBoxStack>
                <ChangeBox>
                    <ChangeValue>{props.dif}</ChangeValue>
                </ChangeBox>
                <StatValue>{props.count}</StatValue>

                <MessagesTotal>Messages {props.subtitle}</MessagesTotal>
            </ChangeBoxStack>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChangeBox = styled.div`
  top: 35px;
  left: 197px;
  width: 87px;
  height: 33px;
  background-color: rgba(192,45,45,1);
  position: absolute;
  border-radius: 4px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const ChangeValue = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
  text-align: center;
`;

const StatValue = styled.span`
  font-family: Roboto;
  top: 3px;
  left: 0px;
  width: 204px;
  height: 91px;
  color: #121212;
  position: absolute;
  font-size: 75px;
  font-weight: regular;
  font-style: normal;
`;

const MessagesTotal = styled.span`
  font-family: Roboto;
  top: 88px;
  left: 6px;
  color: rgba(33,33,33,1);
  position: absolute;
  font-size: 30px;
  font-weight: regular;
  font-style: normal;
`;

const ChangeBoxStack = styled.div`
  width: 284px;
  height: 118px;
  position: relative;
`;

export default StatGroup;
