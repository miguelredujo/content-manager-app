import Layout from "components/Layout";
import Link from "next/link";
import axios from "axios";
import moment from "moment";

const ResourceDetail = ({ resource }) => {
  const activateResource = () => {
    axios
      .patch("/api/resources", { ...resource, status: "active" })
      .then((_) => location.reload())
      .catch((err) => alert(err?.response?.data));
  };
  return (
    <Layout>
      <section>
        <h3>{moment(resource.createAt).format("LLL")}</h3>
        <h1>{resource.title}</h1>
        <p>{resource.description}</p>
        <p>time to finish: {resource.timeToFinish}</p>
        {resource.status === "inactive" && (
          <>
            <Link href={`/resources/${resource.id}/edit`}>
              <button>update</button>
            </Link>
            <button onClick={activateResource} style={{ marginLeft: "8px" }}>
              activate
            </button>
          </>
        )}
      </section>
    </Layout>
  );
};

// ResourceDetail.getInitialProps = async ({ query }) => {
//   const resData = await fetch(
//     `${process.env.API_URL}/resources/${query.id}`
//   );
//   const data = await resData.json();
//   return { resource: data };
// };

// export async function getStaticPaths() {
//   const resData = await fetch(`${process.env.API_URL}/resources`);
//   const data = await resData.json();
//   const paths = data.map((r) => {
//     return { params: { id: r.id } };
//   });
//   return {
//     paths,
//     // means that other paths should be resolve into 404 page
//     fallback: false,
//   };
// }
// export async function getStaticProps({ params }) {
//   const resData = await fetch(
//     `${process.env.API_URL}/resources/${params.id}`
//   );
//   const data = await resData.json();
//   return {
//     props: { resource: data },
//     revalidate: 1,
//   };
// }

export async function getServerSideProps({ params }) {
  const resData = await fetch(`${process.env.API_URL}/resources/${params.id}`);
  const data = await resData.json();
  return {
    props: { resource: data },
  };
}

export default ResourceDetail;
