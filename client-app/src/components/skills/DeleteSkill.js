import React, { useState } from 'react';

const DeleteSkill = () => {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send delete skill request to server
    fetch(`http://localhost:9292/skills/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
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
      <h1>Delete Skill</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <button type="submit">Delete Skill</button>
      </form>
    </div>
  );
};

export default DeleteSkill;
