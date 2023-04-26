import React from "react";
import styled from "styled-components";
import men from './images/men.png'
import wqwq from './images/wqwq.png'


const DIV = styled("div")`
    background-color: #2F2F2F;
    width: 1146px;
    border-radius: 10px;
height:549px;
`
const Img = styled("img")`
    width: 492px;
    height: 549px;
    border-radius: 10px;
`
const DIVV = styled("div")`
    display: flex;
    justify-content: center;
    margin-top: 130px;
`
const SHRIF = styled("div")`
    
`
const INPUT1 = styled("input")`
    width: 232px;
height: 54px;
margin-left: 600px; 
opacity: 0.25;
border: 1px solid #FFFFFF;
border-radius: 10px;
margin: 20px;
`
const INPUT2 = styled("input")`
    width: 232px;
height: 54px;


opacity: 0.25;
border: 1px solid #FFFFFF;
border-radius: 10px;
`
const INPUT3 = styled("input")`
    display: flex;
    margin-left: 20px;
    width: 514px;
height: 54px;


opacity: 0.25;
border: 1px solid #FFFFFF;
border-radius: 10px;
`
const FF = styled("img")`
   width: 1146px;
height: 72px;
`
const SA = styled("div")`
    display: flex;
    justify-content: center;
    margin-top: 120px;
`
const Pp = styled("p")`
    color: #929292;
    margin-top:40px;
    margin-left: 600px;
    font-size: 16px;
`
const B = styled("button")`
margin-left: 40px;
width: 133px;
height: 49px;
border: none;
color: white;
background: #F59B00;
border-radius: 5px;
`
const P =styled("p")`
  color: white;
  margin-top: -450px;
  margin-left: 600px;
  font-size: 31px;
`
function Registr() {
  return (
    <>
    <DIVV>
    <DIV>
    <Img src={men} alt="" />
        <P>Lorem ipsum dolor sit amet <br />  adipiscing elit.</P>
<div style={{marginTop:"-20px",marginLeft:"580px"}}>
<INPUT1 type="text" placeholder="Name" />
        <INPUT2 type="text"  placeholder="Email"/>
        <INPUT3 type="text" placeholder="Adress" />
</div>
<Pp>Lorem inpus dolor sit amet.<B>Join Now</B></Pp>
    </DIV>
    </DIVV>
    <SA>
    <FF src={wqwq}></FF>
    </SA>
    </>
  );
}

export default Registr;