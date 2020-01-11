import React, {Component, useEffect, useState} from "react";
import styled, { css } from "styled-components";
import StatGroup from "./components/StatGroup";
import CardTitle from "./components/CardTitle";
import axios from 'axios'
function Index(props) {
    const [count, setCount] = useState({
        received:{
            current:0,
            previous:0,
            dif:0
        },
        sent:{
            current:0,
            received:0,
            dif:0
        }
    }
    )



    //const [dif, setDif] = useState({}){props.received}
    const [isNeg, setIsNeg] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:1337/summaries/${props.type}?dateStart=${props.dateStart}&dateEnd=${props.dateEnd}`);

                //setCount(...result)
                setCount({
                    received:{
                        current:result.data.results.received.current,
                        previous:result.data.results.received.previous,
                        dif: result.data.results.received.current - result.data.results.received.previous,
                        isNeg: ((result.data.results.received.current - result.data.results.received.previous) <0) ? true :false
                    },
                    sent:{
                        current:result.data.results.sent.current,
                        received:result.data.results.sent.previous,
                        dif: result.data.results.sent.current - result.data.results.sent.previous,
                        isNeg: ((result.data.results.sent.current - result.data.results.sent.previous) <0) ? true :false
                    }
                })
            setIsLoading(false)
                //setDif(result.data.results.total.current - result.data.results.total.previous)
                //console.log(count)
                /*let negCheck = result.data.results.total.current - result.data.results.total.previous
                if (negCheck < 0) {
                    setIsNeg(true)

                } else {
                    setIsNeg(false)
                }
*/
            setIsLoading(false)
            //console.log(props)

        };
        fetchData()


    }, [props]);
  return (
    <StatGroupStackRow>
      <StatGroupStack>
          <CardTitle
              style={{
                  top: 0,
                  left: 0,
                  width: 51,
                  height: 20,
                  position: "absolute"
              }}
              title={props.title}
          ></CardTitle>
        <StatGroup
          style={{
            top: 17,
            left: 0,
            width: 283,
            height: 118,
            position: "absolute"
          }}
        count={count.received.current}
          dif={count.received.dif}
          loading={isLoading}
          subtitle='Received'
        ></StatGroup>

      </StatGroupStack>
      <StatGroup
        style={{
          width: 283,
          height: 118,
          marginLeft: 62,
          marginTop: 19
        }}
        count={count.sent.current}
        dif={count.sent.dif}
        loading={isLoading}
        subtitle='Sent'
      ></StatGroup>
      <StatGroup
        style={{
          width: 283,
          height: 118,
          marginLeft: 33,
          marginTop: 19
        }}
      ></StatGroup>
    </StatGroupStackRow>
  );
}

const StatGroupStack = styled.div`
  width: 283px;
  height: 135px;
  position: relative;
`;

const StatGroupStackRow = styled.div`
    width:90%;
  height: 137px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 400px;
  margin-left: 22px;
  margin-top: 8px;
`;

export default Index;
