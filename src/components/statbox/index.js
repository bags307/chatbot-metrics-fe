import React, { useState, useReducer, useEffect, Component } from "react";
import styled, { css } from "styled-components";

const axios = require('axios');


let foo  = 'http://localhost:1337/summaries/conversations?dateStart=2019-12-01&dateEnd=2019-12-31'
const Statbox = (props)  => {
    console.log(props)
    const [data, setData] = useState({count:0});
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:1337/summaries/${props.type}?dateStart=${props.dateStart}&dateEnd=${props.dateEnd}`);
            setData({count:result.data.results.current})
            console.log(result)
        };
        fetchData()



    },[props]);


   /* useEffect(async () => {
        const result = await axios(
            'http://localhost:1337/summaries/conversations?dateStart=2019-12-01&dateEnd=2019-12-31'
        );
        setData(result.results.current);

    }, [data]);*/

    return (
        <Container>
            <StatBoxValue>{data.count}</StatBoxValue>
            <StatBoxTitle>{props.title}</StatBoxTitle>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  width: 389px;
  height: 161px;
  background-color: rgba(255,255,255,1);
  border-radius: 18px;
  flex-direction: column;
  box-shadow: 4px 5px 10px  0.57px rgba(0,0,0,1) ;
  margin: 20px
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

export default Statbox;