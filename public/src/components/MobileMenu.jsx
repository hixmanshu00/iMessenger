import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { BsFillChatFill } from "react-icons/bs";

const MobileMenuButton = styled.button`
  background-color: #4f04ff21;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const MobileMenu = ({toggleMenu}) => {

  return (
    <div>
      <MobileMenuButton onClick={toggleMenu}>
        <BsFillChatFill size={24} />
      </MobileMenuButton>
    </div>
  );
};

export default MobileMenu;
