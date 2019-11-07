import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

export default function Explanation(props){

    const P = styled.p`
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2rem;
    text-align: start;
    `;

    return (<P>{props.explanation}</P>);
}