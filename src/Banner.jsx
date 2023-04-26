import React from 'react';
import logo from './images/logo.png'
import bg from './images/bg.png'
import home from './images/home.png'
import shrift from './images/shrift.png'
import styled from 'styled-components';
import cta from './images/cta.png'
import { Link } from 'react-router-dom';

const BG = styled("div")`
  background-color: #2F2F2F;
  /* margin-top: -23px; */
  width: 1520px;
  /* height: 728px; */
  padding-top: 50px;
  margin-left: -10px;
`
const Row = styled('div')`
  display: flex;
  justify-content: flex-end;
  gap: 2rem;
  margin-right: 120px;
`;
const Img = styled("img")`
  display: flex;
  position: absolute;
  left: 225px;
  margin-top: 45px;
`

const A = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 22px;
  margin-top: 32px;
  transition:  0.5s;
  margin-left: 30px;
  margin-top: 45px;
  &:hover{
  color: gray;
  border-bottom: 2px solid #ffffff;
  font-weight: bold;
}
`
const Btn = styled(Link)`
  background-color: #F59B00;
  color: white;
  font-size: 20px;
  font-weight: bolder;
  border: none;
  border-radius: 5px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  text-decoration: none;
  margin-top: 30px;
`
const SHRIFT = styled("div")`
    /* margin-top: 120px; */
    margin-left: 225px;
  `
const P = styled("p")`
    color: #FFFFFF;
    font-size: 16px;
  `
const H1 = styled("h2")`
    color: #F59B00;
    font-weight: 500;
    font-size: 20px;
  `
const H2 = styled("h1")`
  color: 
#FFFFFF;
  font-weight: bold;
  font-size: 61px;
  font-weight: 700;
`
const Btnn = styled("button")`
  background-color: #F59B00;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  width: 140px;
height: 49px;
`
const BGRASM = styled("div")`
margin-left: 600px;
margin-top: -450px;
  `
const Ba = styled("img")`
margin-top: -130px;
margin-left: 60px;
width: 849px;
height: 565px;
`
const Sa = styled("span")`
  color: #4288a5;
`
const Sd = styled("span")`
  color: #7a66d4;
`
const Bw = styled("img")`
margin-top: -415px;
margin-left: 100px;
width: 620px;
height: 714px;
`
const STR = styled("img")`
  width: 240px;
  height: 150px;
  position: relative;
  left: 200px;
  top: -60px;
`


const Banner = () => {
    return (
        <>
            <BG>
                <SHRIFT>
                    <H1>LOOK STYLISH BE STYLISH</H1>
                    <H2 style={{ marginTop: "20px" }}>Look Stylish <br /> Be <Sa>Styl</Sa><Sd>ish.</Sd></H2>
                    <P style={{ marginTop: "-20px" }}>Before starting this business you should have ideas <br /> about the market and products to Compete with the <br />  Existing Businesses.</P>
                    <Btnn>Join Shop</Btnn>
                    <h1></h1>
                    <STR src={cta}></STR>
                </SHRIFT>
                <BGRASM>
                    <Ba src={bg}></Ba>
                    <Bw src={home}></Bw>
                </BGRASM>
            </BG>
        </>
    )
}

export default Banner;
