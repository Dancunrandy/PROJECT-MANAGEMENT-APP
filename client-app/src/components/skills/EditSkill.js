import React, { useState } from 'react';

function EditSkill({ skill }) {
  // set initial state for skillName and skillLevel using the 'useState' hook
  const [skillName, setSkillName] = useState(skill.name);
  const [skillLevel, setSkillLevel] = useState(skill.level);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // make a PUT request to update skill in the database
    const skillId = skill.id; // assuming skill object has an id property
    const updatedSkill = { id: skillId, name: skillName, level: skillLevel };
  
    fetch(`/api/skills/${skillId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedSkill),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update skill');
        }
        // skill updated successfully, do something here
      })
      .catch((error) => {
        console.error(error);
      });
  
    // close the edit form
    handleClose();
  };
  
  const handleClose = () => {
    // close the edit form
  };
  
  return (
    <div>
      <h2>Edit Skill</h2>
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
        <button type="submit">Update Skill</button>
      </form>
      <button onClick={handleClose}>Cancel</button>
    </div>
  );
}

export default EditSkill;
