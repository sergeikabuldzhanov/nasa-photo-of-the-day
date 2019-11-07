import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

export default function Picure(props){
    console.log(props);
    const ImgContainer = styled.div`
    width: 800px;
    margin: 20px auto;
    `;
    const Image = styled.img`
    width: 100%;
    
    `;

    return(
        <ImgContainer>
            <Image src = {props.data.url} alt = {props.data.title}/>
        </ImgContainer>
    )
}