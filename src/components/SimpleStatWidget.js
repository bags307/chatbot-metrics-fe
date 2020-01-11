import React, {Component, useEffect, useState} from "react";
import styled, { css } from "styled-components";
import SimpleStatGroupSet from "./SimpleStatGroupSet";
import axios from 'axios'
function SimpleStatWidget(props) {
    const [count, setCount] = useState(0);
    const [dif, setDif] = useState(0)
    const [isNeg, setIsNeg] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:1337/summaries/${props.type}?dateStart=${props.dateStart}&dateEnd=${props.dateEnd}`);
            if (props.type != 'messages') {
                setCount(result.data.results.current)
                setDif(result.data.results.current - result.data.results.previous)
                console.log(result)
                let negCheck = result.data.results.current - result.data.results.previous
                if (negCheck < 0) {
                    setIsNeg(true)

                } else {
                    setIsNeg(false)
                }
                console.log(isNeg)
            } else {
                setCount(result.data.results.total.current)
                setDif(result.data.results.total.current - result.data.results.total.previous)
                console.log(result)
                let negCheck = result.data.results.total.current - result.data.results.total.previous
                if (negCheck < 0) {
                    setIsNeg(true)

                } else {
                    setIsNeg(false)
                }
            }
            setIsLoading(false)


        };
        fetchData()


    }, [props]);

    return (
    <Container {...props}>
      <SimpleStatGroup>
        <SimpleStatGroupSet
          style={{
            width: 219,
            height: 91
          }}
          count= {count}
          dif = {dif}
          isNeg = {isNeg}
          title={props.title}
          subTitle={props.subTitle}
          isLoading={isLoading}
        />
      </SimpleStatGroup>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(255,255,255,1);
  border-radius: 10px;
  flex-direction: column;
  box-shadow: 0px 0px 5px  5px rgba(0,0,0,0.03) ;
`;

const SimpleStatGroup = styled.div`
  width: 200px;
  height: 90px;
  flex-direction: column;
  display: flex;
  margin-top: 14px;
  margin-left: 15px;
`;

export default SimpleStatWidget;
