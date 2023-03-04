import React from 'react';

const Dashboard = () => {
  // Placeholder data
  const projects = [
    { id: 1, name: 'Project A', description: 'This is project A' },
    { id: 2, name: 'Project B', description: 'This is project B' },
    { id: 3, name: 'Project C', description: 'This is project C' },
  ];

  const skills = [
    { id: 1, name: 'Skill A', level: 'Beginner' },
    { id: 2, name: 'Skill B', level: 'Intermediate' },
    { id: 3, name: 'Skill C', level: 'Advanced' },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
