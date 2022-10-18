import React from "react";
import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Nav } from "./Nav/Nav";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const NavBar = () => {
  const [category, setCategory] = useState([]);

  const categoryCollection = collection(db, "category");
  getDocs(categoryCollection).then((res) =>
    setCategory(res.docs.map((category) => ({ ...category.data() })))
  );

  return (
    <>
      <SocialBar>
        <InstagramIcon fontSize="medium" sx={{ color: "gray" }} />
        <WhatsAppIcon fontSize="medium" sx={{ color: "gray" }} />
      </SocialBar>

      <StyledHeader>
        <Nav category={category} />
      </StyledHeader>
    </>
  );
};

export default NavBar;

const StyledHeader = styled.header`
  margin-bottom: 80px;
`;

const SocialBar = styled.div`
  display: flex;
  background-color: black;
  height: 40px;
  justify-content: right;
  padding-right: 10%;
  align-items: center;
`;
