import React, {useState, Component } from "react";
import styled, { css } from "styled-components";

function Index(props) {
    const [newEndDate, setNewEndDate] = useState("end");
    const [newStartDate, setNewStartDate] = useState("start")
   //const handleChange = () => startDate = newStartDate

  return (
    <Container>
      <EndDate placeholder={newEndDate}  onInput={e => setNewEndDate(e.target.value)}/>
      <StartDate placeholder={newStartDate} onInput={e => setNewStartDate(e.target.value)}/>
      <Submit onClick={() => props.setDate({dateStart:newStartDate, dateEnd:newEndDate})}>SUMBIT</Submit>
        <div>{newEndDate}</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 409px;
  height: 431px;
  background-color: rgba(230, 230, 230,1);
  flex-direction: column;
`;

const EndDate = styled.input`
  font-family: Roboto;
  width: 370px;
  height: 46px;
  color: #121212;
  font-size: 18px;
  font-weight: regular;
  font-style: normal;
  margin-top: 124px;
  margin-left: 20px;
  border: none;
  background: transparent;
`;

const StartDate = styled.input`
  font-family: Roboto;
  width: 370px;
  height: 46px;
  color: #121212;
  font-size: 18px;
  font-weight: regular;
  font-style: normal;
  margin-top: -136px;
  margin-left: 20px;
  border: none;
  background: transparent;
`;

const Submit = styled.button`
  width: 319px;
  height: 62px;
  background-color: rgba(181,10,10,1);
  margin-top: 135px;
  margin-left: 30px;
`;

export default Index;
