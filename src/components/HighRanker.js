import React from 'react'
import styled from 'styled-components'
import bronze from '../images/bronze.png'
import silver from '../images/silver.png'
import gold from '../images/gold.png'
import {parseAmountFormat, parsePhoneNum} from './utils'

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

function HighRanker({data, activeTab}) {

  function activeChange(rider) {
    switch (activeTab) {
      case 'R':
        return <><span>{parseAmountFormat(rider?.totalRevenue)}</span>원</>
      case 'C':
        return <><span>{parseAmountFormat(rider?.totalCount)}</span>건</>
      case 'D':
        return <><span>{parseAmountFormat(rider?.totalDistance)}</span>km</>
    }
  }


  return (
    <Wrapper>
      <PodiumBox>
        <img src={silver}/>
        <RiderID>{data[1]?.phoneNum ? `라이더 ${parsePhoneNum(data[1].phoneNum)}` : '-'}</RiderID>
        <Amount>{activeChange(data[1])}</Amount>
      </PodiumBox>
      <WinnerBox>
        <img src={gold}/>
        <RiderID>{data[0]?.phoneNum ? `라이더 ${parsePhoneNum(data[0].phoneNum)}` : '-'}</RiderID>
        <Amount>{activeChange(data[0])}</Amount>
      </WinnerBox>
      <PodiumBox>
        <img src={bronze}/>
        <RiderID>{data[2]?.phoneNum ? `라이더 ${parsePhoneNum(data[2].phoneNum)}` : '-'}</RiderID>
        <Amount>{activeChange(data[2])}</Amount>
      </PodiumBox>
    </Wrapper>
  )
}

export default HighRanker;