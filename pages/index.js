import Footer from "components/Footer";
import Layout from "components/Layout";
import NewsLetter from "components/NewsLetter";
import ResourceHighlights from "components/ResourceHighlight";
import ResourceList from "components/ResourceList";
import Head from "next/head";

export default function Home({ resources }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <Layout>
        <ResourceHighlights resources={resources} />
        <NewsLetter />
        <ResourceList resources={resources} />
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();
  return {
    props: { resources: data },
  };
}
