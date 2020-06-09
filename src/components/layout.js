import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import "./layout.css"

const Container = styled.div`
  width: 100vw;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        {children}
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
