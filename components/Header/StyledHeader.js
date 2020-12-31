import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 0;
  margin: 0;
  ${(props) => props.height && `height: ${props.height}px;`};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
`;

export default StyledHeader;
