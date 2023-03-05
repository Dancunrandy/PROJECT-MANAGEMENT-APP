import React, { useState } from 'react';
import SkillForm from '../skills/SkillForm';

function EditProject({ project, handleClose }) {
  const [projectName, setProjectName] = useState(project.name);
  const [projectDescription, setProjectDescription] = useState(project.description);
  const [projectUrl, setProjectUrl] = useState(project.url);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // make a PUT request to update project in the database
    const projectId = project.id;
    const updatedProject = { name: projectName, description: projectDescription, url: projectUrl };
  
    fetch(`http://localhost:9292/projects/${projectId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProject),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update project');
        }
        // project updated successfully, do something here
      })
      .catch((error) => {
        console.error(error);
      });
  
    // close the edit form
    handleClose();
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
      <SkillForm/>
    </div>
  );
}

export default EditProject;
