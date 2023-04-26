import React from "react";
import styled from "styled-components";
import bag1 from './images/bag1.png'
import DA from './images/DA.png'
import AAA from './images/AAA.png'
import AS from './images/AS.png'

const He = styled("div")`
display: flex;
justify-content: center;
gap: 6rem;
`
const A = styled("a")`
font-weight: 500;
font-size: 20px;
color: #2F2F2F;
text-decoration: none;
margin-top: 60px;
transition:  0.5s;
&:hover{
  color: #2F2F2F;
  border-bottom: 2px solid #F59B00;
  font-weight: bold;
}
`
const Bag = styled("div")`
display: flex;
justify-content: center;
gap: 2rem;
margin-top: 50px;
`
const Bagg1 = styled("img")`
border: 1px solid black;
border-radius: 5px;
`

function Section() {
  return (
    <>
    <He>
        <A href="">Water Resistant</A>
        <A href="">Charging System</A>
        <A href="">Artificial Leather</A>
        <A href="">Modern Clothes</A>
    </He>
    <Bag>
        <Bagg1 src={bag1} alt="" />
        <Bagg1 src={DA} alt="" />
        <Bagg1 src={AAA} alt="" />
        <Bagg1 src={AS} alt="" />
    </Bag>
    </>
  );
}

export default Section;
