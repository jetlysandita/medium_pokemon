import StyledPokemonCard from "./StyledPokemonCard";

export default function PokemonCard({ url, name }) {
  return <StyledPokemonCard href={url}>{name}</StyledPokemonCard>;
}
