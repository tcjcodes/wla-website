import styled from "styled-components"

const BaseAnchor = styled.a.attrs(props => ({
  // https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
  rel: props.target === "_blank" ? "noopener noreferrer" : "",
}))`
  text-decoration: none;
  font-weight: normal;
  font-style: italic;
  &&& {
    color: grey;
    &:hover {
      color: black;
    }
  }
`

export default BaseAnchor
