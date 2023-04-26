import React from 'react';
import styled from 'styled-components';
import logo from './images/logo.png'


const Bg = styled("div")`
    background: rgba(47, 47, 47, 0.92);
    width: 1500px;
height: 368px;
 margin-top: 100px;
 gap: 4rem;
 display: flex;
 justify-content: center;
`
const DIV1 =styled("div")`
  margin-top: 80px;
`
const DIV2 = styled("div")`
    margin-top: 108px;
`
const IMG1 =styled("img")`
    
`
const H =styled("H2")`
    color: white;
    font-size: 30px;
`
const P =styled("p")`
    width: 95px;
height: 56px;
font-size: 17px;
color: #a7a7a7;
`
const B = styled("button")`
color: white;
width: 120px;
height: 39px;
border: none;
margin-top: 250px;
margin-left: -332px;
background: #F59B00;
border-radius: 4px;
`
const I = styled("input")`
width: 264px;
height: 49px;

opacity: 0.35;
border: 1px solid #B0A9A9;
border-radius: 5px;
`
const Footer = () =>{
    return(
      <>
      <Bg>
        <DIV2>
        <IMG1 src={logo} alt="" />
        <P>Lorem ipsum dolor sit amet  consectetur adipiscing  sed do eiusmod.</P>
        </DIV2>
        <DIV1>
        <H>Special Categories</H>
        <P>water resistant <br /> charging system <br /> artificial leather</P>
        </DIV1>
        <DIV1>
        <H>Contact us</H>
        <P>88-855-55-53 <br /> nimadur@gmail.com <br /> nimadur.com</P>
        </DIV1>
        <DIV1>
        <H>News Latter</H>
        <I type="text" placeholder='Enter Your Email'/>
        </DIV1>
        <B>Subscribe</B>
      </Bg>
      </>
    )
  }
  
  export default Footer;