import axios from "axios";
import Layout from "components/Layout";
import { useRouter } from "next/router";
import ResourceForm from "components/ResourceForm";

const ResourceCreate = () => {
  const router = useRouter();

  const createResource = (formData) => {
    axios
      .post("/api/resources", formData)
      .then((_) => router.push("/"))
      .catch((err) => alert(err?.response?.data));
  };

  return (
    <Layout>
      <h1>add</h1>
      <ResourceForm onFormSubmit={createResource} />
    </Layout>
  );
};

export default ResourceCreate;
