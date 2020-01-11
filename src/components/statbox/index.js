import React, {useState, useReducer, useEffect, Component} from "react";
import styled, {css} from "styled-components";

const axios = require('axios');


let foo = 'http://localhost:1337/summaries/conversations?dateStart=2019-12-01&dateEnd=2019-12-31'
const Statbox = (props) => {
    console.log(props)
    const [count, setCount] = useState(0);
    const [dif, setDif] = useState(0)
    const [isNeg, setIsNeg] = useState(false)
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


    return isLoading ? (<Container><LoadMessage>Loading...</LoadMessage></Container>) : (
        <Container>

            <ChangeCountGroupStack>
                <ChangeCountGroup>
                    <ChangeCount2 neg={isNeg}>
                        <ChangeCountValue dif={dif}>{dif}</ChangeCountValue>
                    </ChangeCount2>
                </ChangeCountGroup>
                <Count>{count}</Count>
            </ChangeCountGroupStack>
            <Title>{props.title}</Title>

        </Container>
    );
}
const LoadMessage = styled.div`
    color:black`
const Container = styled.div`
  display: flex;
  width: 325px;
  height: 132px;
  background-color: rgba(255,255,255,1);
  border-radius: 20px;
  flex-direction: column;
  margin:20px;
  box-shadow: 5px 5px 15px  0.54px rgba(0,0,0,1) ;
`;

const ChangeCountGroup = styled.div`
  top: 32px;
  left: 192px;
  width: 87px;
  height: 33px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const ChangeCount2 = styled.div`
  width: 95px;
  height: 37px;
  background-color: ${props => props.neg ? "rgba(126,0,33,1)" : "rgba(126,211,33,1)"};
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const ChangeCountValue = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
  text-align: center;
`;

const Count = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  width: 204px;
  height: 91px;
  color: #121212;
  position: absolute;
  font-size: 75px;
  font-weight: regular;
  font-style: normal;
`;

const ChangeCountGroupStack = styled.div`
  width: 279px;
  height: 91px;
  margin-top: 28px;
  margin-left: 22px;
  position: relative;
`;

const Title = styled.span`
  font-family: Roboto;
  color: #121212;
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
  text-align: left;
  margin-top: -111px;
  margin-left: 22px;
`;

export default Statbox;
