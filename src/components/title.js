import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

export default function Title(props){

    const H2 = styled.h2`
    font-family: sans-serif;
    font-size: 3rem;
    color: darkslategray;
    width: 100%;
    margin: 0 auto;
    `;

    return (<H2>{props.title}</H2>);
}