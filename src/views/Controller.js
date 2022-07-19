import React, {useContext} from 'react'
import styled from 'styled-components'
import Ranking from './Ranking'
import GlobalContext from '../contexts/store'
import RidingInfo from './RidingInfo';
import Result from './Result'
import ImageUploadInform from './ImageUploadInform'
import SelectionPushPage from './SelectionPushPage'


const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 430px;
  margin: 0 auto;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
     //background-color: ${(props) => props.theme.mainBlue};
`;

function Controller() {
  const pages = [
    <Ranking/>, <RidingInfo/>, <ImageUploadInform/>, <SelectionPushPage/>, <Result/>
  ];

  const {state: {page}} = useContext(GlobalContext)

  return <Container>
    {pages[page]}
  </Container>
}

export default Controller