import React from "react";
import { useState, useEffect } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Nav } from "./Nav/Nav";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [category, setCategory] = useState([]);
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const categoryCollection = collection(db, "category");
    getDocs(categoryCollection).then((res) =>
      setCategory(res.docs.map((category) => category.data()))
    );
  }, [setCategory]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <>
      <SocialBar>
        {user ? (
          <div className="user">{user.displayName || user.email} </div>
        ) : (
          <Link to="/login" className="linkLog">
            Login
          </Link>
        )}
        {user && <button onClick={handleLogout}>Salir</button>}

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

  .linkLog {
    display: flex;
    flex-direction: row;
    margin: 10px;
    color: gray;
    align-items: center;
  }
  .linkLog:hover {
    color: white;
  }
  .user {
    display: flex;
    color: white;
    margin-right: 10px;
  }
  button {
    height: 30px;
    background-color: gray;
    margin-right: 10px;
  }
`;
