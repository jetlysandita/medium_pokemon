import Head from "next/head";
export default function MainLayout(props) {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <div>{children}</div>
    </>
  );
}
