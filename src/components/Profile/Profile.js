import React from "react";
import { useAuthContext } from "../../Context/AuthContext";
import styled from "styled-components";

export const Profile = () => {
  const { user } = useAuthContext();

  return (
    <>
      <ProfileClass>
        {user ? <h2>{user.displayName || user.email}</h2> : <div>Profile</div>}
        <img src="" alt="" />
        <div>Profile</div>
        <div>Favoritos</div>
      </ProfileClass>
    </>
  );
};

const ProfileClass = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;
