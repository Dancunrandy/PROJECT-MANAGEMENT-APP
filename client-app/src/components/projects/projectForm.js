import React, { useState } from 'react';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectUrl, setProjectUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Define the new project object
    const newProject = {
      name: projectName,
      description: projectDescription,
      url: projectUrl
    };
    
    // Send the new project to the server
    fetch('/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProject)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Reset the form fields
      setProjectName('');
      setProjectDescription('');
      setProjectUrl('');
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="projectName">Project Name:</label>
      <input
        id="projectName"
        type="text"
        value={projectName}
        onChange={e => setProjectName(e.target.value)}
        required
      />
      <label htmlFor="projectDescription">Project Description:</label>
      <textarea
        id="projectDescription"
        value={projectDescription}
        onChange={e => setProjectDescription(e.target.value)}
        required
      />
      <label htmlFor="projectUrl">Project URL:</label>
      <input
        id="projectUrl"
        type="url"
        value={projectUrl}
        onChange={e => setProjectUrl(e.target.value)}
        required
      />
      <button type="submit">Add Project</button>
    </form>
  );
};

export default ProjectForm;
