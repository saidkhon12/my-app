import React from 'react';
import styled from 'styled-components';
import asa from './images/asa.png'


const Img = styled("img")`
   width: 829.22px;
   height: 646px;
   margin-left: 50px;
   margin-top: 80px;
`
const SHR = styled("div")`
    margin-top: -460px;
    margin-left: 950px;
`
const H3 = styled("h3")`
    color: #F59B00;
    font-size: 20px;
`
const H2 = styled("h2")`
    color: #2F2F2F;
    font-size: 31px;
`
const P = styled("p")`
font-size: 16px;
color: #2F2F2F;
`
const Btn = styled("button")`
width: 134px;
height: 49px;
border: none;
color: white;
background: #F59B00;
border-radius: 5px;
`
const New = () =>{
    return(
      <>
      <Img src={asa} alt="" />
      <SHR>
        <H3>CREATIVE BAG ONLY FOR YOU.</H3>
        <H2>Lorem Ipsum Dolor Sit Amet <br /> Consectetur Adipiscing Elit <br /> Sed Do Eiusmod.</H2>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad minim veniam.</P>
        <Btn>See More</Btn>
      </SHR>
      </>
    )
  }
  
  export default New;