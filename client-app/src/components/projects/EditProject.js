import React, { useState } from 'react';

function EditProject({ project }) {
  const [projectName, setProjectName] = useState(project.name);
  const [projectDescription, setProjectDescription] = useState(project.description);
  const [projectUrl, setProjectUrl] = useState(project.url);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update project in database
    // Close edit form
  };

  return (
    <div>
      <h2>Edit Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={projectName} onChange={(event) => setProjectName(event.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={projectDescription} onChange={(event) => setProjectDescription(event.target.value)} />
        </label>
        <label>
          URL:
          <input type="text" value={projectUrl} onChange={(event) => setProjectUrl(event.target.value)} />
        </label>
        <button type="submit">Update Project</button>
      </form>
    </div>
  );
}

export default EditProject;
