import React from 'react'
import styled from 'styled-components'
import bronze from '../images/bronze.png'
import silver from '../images/silver.png'
import gold from '../images/gold.png'
import {parseAmountFormat} from './utils'

const Wrapper = styled.div`
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const PodiumBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 110px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-weight: 500;

  img {
    width: 30px;
  }
`
const WinnerBox = styled(PodiumBox)`
  height: 125px;
  margin: 0 10px;

  img {
    width: 40px;
  }
`
const RiderID = styled.div`
  font-size: 12px;
  margin-top: 15px;
`
const Amount = styled.div`
  margin-top: 5px;
  font-size: 14px;
  span {
    font-size: 16px;
    font-weight: 700;
  }
`

function HighRanker() {

  return (
    <Wrapper>
      <PodiumBox>
        <img src={silver}/>
        <RiderID>라이더 5054</RiderID>
        <Amount><span>{parseAmountFormat(469330)}</span>원</Amount>
      </PodiumBox>
      <WinnerBox>
        <img src={gold}/>
        <RiderID>라이더 5054</RiderID>
        <Amount><span>{parseAmountFormat(469330)}</span>원</Amount>
      </WinnerBox>
      <PodiumBox>
        <img src={bronze}/>
        <RiderID>라이더 5054</RiderID>
        <Amount><span>{parseAmountFormat(469330)}</span>원</Amount>
      </PodiumBox>
    </Wrapper>
  )
}

export default HighRanker;