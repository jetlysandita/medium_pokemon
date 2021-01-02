import Head from "next/head";
import Header from "../components/Header";

export default function MainLayout(props) {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <Header customHeight={80} />
      <div>{children}</div>
    </>
  );
}
