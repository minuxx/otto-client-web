import React, {useContext} from 'react'
import styled from 'styled-components'
import Ranking from './Ranking'
import GlobalContext from '../contexts/store'
import RidingInfo from './RidingInfo';


const Container = styled.div`
  width: 100%;
  height: 100vh;
  // background-color: ${(props) => props.theme.mainBlue};
`;

function Controller() {
  const pages = [
    <Ranking/>,
  ];

  const {state: {page}} = useContext(GlobalContext)

  return <Container>
    {pages[page]}
  </Container>
}

export default Controller