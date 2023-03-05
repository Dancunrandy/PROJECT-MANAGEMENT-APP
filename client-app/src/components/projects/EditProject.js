
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EditProject = () => {
  const { projectId } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`http://localhost:9292/projects/${projectId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setName(data.name);
        setDescription(data.description);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [projectId]);

  const handleEdit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:9292/projects/${projectId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div>
      <h1>Edit Project</h1>
      <form onSubmit={handleEdit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditProject;
