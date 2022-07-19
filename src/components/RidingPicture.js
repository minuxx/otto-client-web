import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import IconRemove from '../images/icon-remove.png'

const Box = styled.div`
    display: flex;
    position: relative;
    border: 1px solid #D9D9D9;
    border-radius: 15px;

    width: 80px;
    height: 80px;

    .remove {
        width: 20px;
        height: 20px;
        position: absolute;
        left: 84%;
        top: -9%;
    }

    .riding-picture {
        width: 100%;
        object-fit: contain;
    }
`

function RidingPicture({ index, file, onRemovePicture }) {
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
            <img className="remove" src={IconRemove} alt="icon-remove" onClick={() => onRemovePicture(index)}/>
            <img className="riding-picture" src={imgUrl} alt="riding-capture" />
        </Box>
    )
}

export default RidingPicture