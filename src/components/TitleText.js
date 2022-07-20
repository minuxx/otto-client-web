import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {getConstant} from '../service'


const Wrapper = styled.div`
  padding: 10px 30px;
`
const MainTitle = styled.div`
  font-size: 24px;
  font-weight: 800;

  div:nth-child(2) {
    margin-top: 5px;
    margin-bottom: 10px;
  }
`
const SubTitle = styled.div`
  margin-top: 15px;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  opacity: 0.7;
`

function TitleText() {
  const [info, setInfo] = useState({dataInfo:'오전 00시',timeInfo:'집계 기준 :'});

  useEffect(() => {
    bootstrap()
  }, [])

  async function bootstrap() {
    try {
      const resp = await getConstant()
      setInfo(resp.data)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Wrapper>
      <MainTitle>
        <div>{`오늘 ${info.timeInfo}까지의`}</div>
        <div>라이딩 랭킹을 공개합니다</div>
      </MainTitle>
      <SubTitle>{info.dateInfo}</SubTitle>
    </Wrapper>
  )
}

export default TitleText;