import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return <FooterClass>Footer</FooterClass>;
};

const FooterClass = styled.footer`
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: black;
  height: 50px;
  margin-top: 100px;
`;
