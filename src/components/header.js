import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import BaseAnchor from "./BaseAnchor"

const StyledTitle = styled.h1`
  font-family: "La Belle Aurore", "Bradley Hand", "Brush Script MT", cursive;
  font-weight: 400;
  font-size: 350%;
  margin: 0;
`

const StyledAnchor = styled(BaseAnchor)`
  &&& {
    color: #4d4d4d;
  }

  font-weight: normal;
`
const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        paddingTop: `3rem`,
        textAlign: "center",
      }}
    >
      <StyledTitle>
        <StyledAnchor
          href="https://www.instagram.com/withloveava_/"
          title="@withlovava_ Instagram"
        >
          {siteTitle}
        </StyledAnchor>
      </StyledTitle>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
