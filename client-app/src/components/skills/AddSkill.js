import React, { useState } from 'react';

function AddSkill() {
  const [skillName, setSkillName] = useState('');
  const [skillLevel, setSkillLevel] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Define the new skill object
    const newSkill = {
      name: skillName,
      level: skillLevel
    };
  
    // Send the new skill to the server
    fetch('/api/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSkill)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Reset the form fields
      setSkillName('');
      setSkillLevel('');
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  };
  

  return (
    <div>
      <h2>Add Skill</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={skillName} onChange={(event) => setSkillName(event.target.value)} />
        </label>
        <label>
          Level:
          <select value={skillLevel} onChange={(event) => setSkillLevel(event.target.value)}>
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>
        <button type="submit">Add Skill</button>
      </form>
    </div>
  );
}

export default AddSkill;
