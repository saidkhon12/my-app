import React from "react";
import styled from "styled-components";
import bagss from './images/bagss.png'
import {GrFormNextLink} from "react-icons/gr"


const DIV = styled("div")`
margin-top: 100px;
display: flex;
justify-content: center;
`
const DIV2 = styled("div")`
margin-top: 200px;
`
const H1 = styled("h1")`
display: flex;
justify-content: center;
font-size: 31px;
`
const P = styled("p")`
display: flex;
justify-content: center;
`
const Pp = styled("p")`
display: flex;
justify-content: center;
margin-top: -10px;
font-size: 16px;

`
const Img = styled("img")`
margin-top: -60px;
`
const Btn = styled("button")`
    color: #F59B00;
    width: 120px;
    height: 40px;
    background-color: white;
    border: 1px solid #17a5fc;
    border-radius: 4px;
`
const Df = styled("div")`
display: flex;
justify-content: center;
margin-top: 50px;
`
function New1() {
  return (
    <>
    <DIV2>
    <H1>Our Available Product</H1>
    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /></P>
    <Pp>eiusmod tempor incididunt ut labore et dolore.</Pp>
    </DIV2>
    <DIV>
    <Img src={bagss} alt="" />
    </DIV>
    <Df>
    <Btn>See More<img style={{width:"15px",height:"10px",marginLeft:"8px",}} src="https://www.iconpacks.net/icons/1/free-arrow-icon-211-thumb.png" alt="" /></Btn>
    </Df>
    </>
  );
}

export default New1;
