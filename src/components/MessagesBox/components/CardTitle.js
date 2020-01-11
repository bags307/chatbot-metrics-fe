import React, { Component } from "react";
import styled, { css } from "styled-components";

function CardTitle(props) {
  return (
    <Container {...props}>
      <Title>{props.title}</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  font-family: Roboto;
  color: #121212;
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
  text-align: left;
`;

export default CardTitle;
