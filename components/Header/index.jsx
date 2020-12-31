import StyledHeader from "./StyledHeader";

export default function Header({ height }) {
  return (
    <StyledHeader height={height}>
      <h1>Pokemon</h1>
    </StyledHeader>
  );
}
