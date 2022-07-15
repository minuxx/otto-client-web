import React, {useState} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  font-weight: 700;
`
const TabItem = styled.div`
  padding: 8px;
  opacity: 0.5;
  border-bottom: ${(props) => props.isActive && '2px solid white'};
  opacity: ${(props) => props.isActive && 1};

`

function Tab() {
  const [activeTab, setActiveTab] = useState('profit');

  return (
    <Wrapper>
      <TabItem isActive={activeTab === 'profit'} onClick={() => setActiveTab('profit')}>수익 랭킹</TabItem>
      <TabItem isActive={activeTab === 'count'} onClick={() => setActiveTab('count')}>건수 랭킹</TabItem>
      <TabItem isActive={activeTab === 'distance'} onClick={() => setActiveTab('distance')}>거리 랭킹</TabItem>
    </Wrapper>
  )
}

export default Tab;