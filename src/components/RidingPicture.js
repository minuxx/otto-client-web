import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`
    display: flex;
    border: 1px solid #D9D9D9;
    border-radius: 15px;

    width: 80px;
    height: 80px;
`

function RidingPicture({ file }) {
    const [imgUrl, setImgUrl] = useState(null)

    const handleImgFile = useCallback(() => {
        if (file === null) return
  
        let reader = new FileReader()
        reader.onloadend = () => {
            setImgUrl(reader.result)
        }
  
        reader.readAsDataURL(file)
     }, [file])

     useEffect(() => {
        handleImgFile()
     }, [handleImgFile])

    return (
        <Box>
            <img src={imgUrl} alt="riding-capture" />
        </Box>
    )
}

export default RidingPicture