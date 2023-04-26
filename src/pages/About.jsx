import React from 'react';
import styled from 'styled-components';
import Navbar from '../nav';
import Footer from '../footer';


const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

const AboutHeader = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const AboutContent = styled.div`
  max-width: 800px;
  text-align: center;
  line-height: 1.5;
  font-size: 18px;
  margin-bottom: 50px;

  p {
    margin-bottom: 20px;
  }
`;


const About = () => {
    return (
        <>
            <Navbar />
            <AboutContainer>
                <AboutHeader>About Us</AboutHeader>
                <AboutContent>
                    <p>We are a team of passionate bag enthusiasts who believe that great bags should be accessible to everyone.</p>
                    <p>Our mission is to create high-quality bags that are both functional and stylish, without compromising on affordability.</p>
                    <p>From backpacks to tote bags, we have a wide range of products that cater to different needs and lifestyles. We believe that our bags are not just accessories, but an extension of our customers' personal style.</p>
                    <p>Thank you for choosing us and being a part of our journey.</p>
                </AboutContent>
            </AboutContainer>
            <Footer/>
        </>
    );
};

export default About;