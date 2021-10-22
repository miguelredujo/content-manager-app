import Layout from "components/Layout";
import ResourceForm from "components/ResourceForm";
import axios from "axios";

const ResourceEdit = ({ resource }) => {
  const updateResource = (formData) => {
    axios
      .patch("/api/resources", formData)
      .then((_) => alert("data updated!"))
      .catch((err) => alert(err?.response?.data));
  };

  return (
    <Layout>
      <h1>update</h1>
      <ResourceForm initialData={resource} onFormSubmit={updateResource} />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const resData = await fetch(`${process.env.API_URL}/resources/${params.id}`);
  const data = await resData.json();
  return {
    props: { resource: data },
  };
}

export default ResourceEdit;
