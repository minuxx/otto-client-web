import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`
const ImageBox = styled.img`
  width: 100%;
`
const Text = styled.div`
  margin-top: 19px;
  margin-left: 15px;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.5px;
`

function ImageUploadExample({imgSrc, informText}) {

  return (
    <Wrapper>
      <ImageBox src={imgSrc}/>
      <Text>
        {informText}
      </Text>
    </Wrapper>
  )
}

export default ImageUploadExample;