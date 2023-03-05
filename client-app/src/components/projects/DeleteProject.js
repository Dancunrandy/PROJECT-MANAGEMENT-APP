import React from 'react';
import { useParams } from "react-router-dom";

const DeleteProject = () => {
  const { projectId } = useParams();

  const handleDelete = () => {
    fetch(`http://localhost:9292/projects/${projectId}`, {
      method: "DELETE",
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
      <h1>Delete Project</h1>
      <p>Are you sure you want to delete this project?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};


export default DeleteProject;
