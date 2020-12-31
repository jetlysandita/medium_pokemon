import MainLayout from "../layouts/MainLayout";
export default function Home(props) {
  const { data } = props;
  return (
    <MainLayout>
      {data.results.map((pokemon, i) => {
        return <div key={i}>{pokemon.name}</div>;
      })}
    </MainLayout>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.baseUrlApi}pokemon?limit=10`);
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
