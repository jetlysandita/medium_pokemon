import StyledHeader from "./StyledHeader";

export default function Header({ customHeight }) {
  return (
    <StyledHeader customHeight={customHeight}>
      <h1>Pokemon</h1>
    </StyledHeader>
  );
}
