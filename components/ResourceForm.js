import { useState } from "react";

const DEFAULT_DATA = {
  //id: "2",
  title: "",
  description: "",
  link: "",
  //image: "https://image.com/",
  priority: 1,
  timeToFinish: 60,
  //status: "inactive",
};

const ResourceForm = ({ initialData, onFormSubmit }) => {
  const [form, setForm] = useState(initialData || DEFAULT_DATA);

  const resetForm = () => setForm(DEFAULT_DATA);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const submitForm = () => onFormSubmit(form);
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "8px 24px",
        }}
      >
        <label>title</label>
        <input
          type="text"
          value={form.title}
          onChange={handleChange}
          name="title"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "8px 24px",
        }}
      >
        <label>description</label>
        <textarea
          value={form.description}
          onChange={handleChange}
          name="description"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "8px 24px",
        }}
      >
        <label>link</label>
        <input
          type="text"
          value={form.link}
          onChange={handleChange}
          name="link"
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "8px 24px",
        }}
      >
        <label>priority</label>
        <select value={form.priority} onChange={handleChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "8px 24px",
        }}
      >
        <label>timeToFinish</label>
        <input
          type="number"
          value={form.timeToFinish}
          onChange={handleChange}
          name="timeToFinish"
        />
      </div>
      <div
        style={{ display: "flex", flexDirection: "row", padding: "8px 24px" }}
      >
        <button type="button" onClick={submitForm}>
          submit
        </button>
        <button type="button" onClick={resetForm}>
          cancel
        </button>
      </div>
    </form>
  );
};

export default ResourceForm;
