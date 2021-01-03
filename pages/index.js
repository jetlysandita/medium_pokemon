import PokemonCard from "../components/PokemonCard";
import MainLayout from "../layouts/MainLayout";

export const config = { amp: true };

export default function Home() {
  return (
    <MainLayout>
      <amp-list
        load-more="manual"
        width="auto"
        height="80"
        src="/api/pokemon"
        load-more-bookmark="next"
      >
        <template type="amp-mustache">
          <PokemonCard url="{{url}}" name="{{name}}" />
        </template>
      </amp-list>
      <amp-layout layout="responsive" width="0" height="0"></amp-layout>
    </MainLayout>
  );
}
