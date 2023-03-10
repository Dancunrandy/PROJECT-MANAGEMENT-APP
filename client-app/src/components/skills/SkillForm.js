import { useState } from 'react';
import AddSkill from './AddSkill';
import DeleteSkill from './DeleteSkill';

const SkillForm = () => {
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send skill data to server
    fetch('/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        level
      })
    })
    
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  };

  return (
    <div>
      <h1>Skill Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Level:
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>
        <button className='skillform' type="submit">Submit</button>
      </form>
      <DeleteSkill/>
      <AddSkill/>
    </div>
  );
};

export default SkillForm;
