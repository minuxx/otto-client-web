import React from 'react'
import styled from 'styled-components'
import bronze from '../images/bronze.png'
import silver from '../images/silver.png'
import gold from '../images/gold.png'
import {parseAmountFormat, parsePhoneNum} from './utils'

const Wrapper = styled.div`
  margin: 15px;
  margin-bottom: 30px;
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
  height: 120px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-weight: 500;

  img {
    width: 30px;
  }
`
const WinnerBox = styled(PodiumBox)`
  height: 130px;
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
const PlatformIcons = styled.div`
  margin-top: 10px;
`

function HighRanker({data, activeTab, showPlatformIcons}) {

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

  if (data.length === 0) return;

  return (
    <Wrapper>
      <PodiumBox>
        <img src={silver}/>
        <RiderID>{data[1]?.phoneNum ? `라이더 ${parsePhoneNum(data[1].phoneNum)}` : '-'}</RiderID>
        <Amount>{activeChange(data[1])}</Amount>
        <PlatformIcons>{showPlatformIcons(data[1].platformTypes)}</PlatformIcons>
      </PodiumBox>
      <WinnerBox>
        <img src={gold}/>
        <RiderID>{data[0]?.phoneNum ? `라이더 ${parsePhoneNum(data[0].phoneNum)}` : '-'}</RiderID>
        <Amount>{activeChange(data[0])}</Amount>
        <PlatformIcons>{showPlatformIcons(data[0].platformTypes)}</PlatformIcons>
      </WinnerBox>
      <PodiumBox>
        <img src={bronze}/>
        <RiderID>{data[2]?.phoneNum ? `라이더 ${parsePhoneNum(data[2].phoneNum)}` : '-'}</RiderID>
        <Amount>{activeChange(data[2])}</Amount>
        <PlatformIcons>{showPlatformIcons(data[2].platformTypes)}</PlatformIcons>
      </PodiumBox>
    </Wrapper>
  )
}

export default HighRanker;