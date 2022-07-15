import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import TitleText from '../components/TitleText'
import Tab from '../components/Tab'
import RankLadder from '../components/RankLadder'


const HeadContainer = styled.div`
  color: white;
  background-color: ${(props) => props.theme.mainBlue};
  border-radius: 0px 0px 15px 15px;
`

function Ranking() {

  return <>
    <HeadContainer>
      <Header/>
      <TitleText/>
      <Tab/>
    </HeadContainer>

    <RankLadder />
  </>
}

export default Ranking;