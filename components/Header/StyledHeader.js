import styled from "styled-components";

const StyledHeader = styled.div`
  padding: 10px;
  margin: 0;
  display: flex;
  align-items: center;
  ${(props) => props.customHeight && `height: ${props.customHeight}px;`};
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
`;

export default StyledHeader;
