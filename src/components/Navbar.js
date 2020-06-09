import React from "react"
import styled from "styled-components"

import NavbarLinks from "./NavbarLinks"

const Navigation = styled.nav`
  height: 10vh;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 2;
  align-self: center;
`;

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;


const Navbar = () => {
  return (
    <Navigation>
      <Navbox>
        <NavbarLinks />
      </Navbox>
    </Navigation>
  )
}
  
  export default Navbar