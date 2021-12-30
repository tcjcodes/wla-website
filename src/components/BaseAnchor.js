import styled from "styled-components"

const BaseAnchor = styled.a`
  text-decoration: none;
  font-weight: bold;
  &&& {
    color: grey;
    &:hover {
      color: black;
    }
  }
`

export default BaseAnchor
