import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  border-bottom: solid;
  border-bottom-width: 1px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <MenuItem>Ger Started</MenuItem>
            <MenuItem>Products</MenuItem>
            <MenuItem>About</MenuItem>
          </Left>
          <Center></Center>
          <Right>
            <MenuItem>Sign In</MenuItem>
            <MenuItem> Register</MenuItem>
            <MenuItem></MenuItem>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
