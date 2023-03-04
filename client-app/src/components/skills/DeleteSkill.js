import React, { useState } from 'react';

function DeleteSkill ({ skill, onDelete }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    // Delete skill from database
    onDelete();
  };

  return (
    <div>
      {showConfirmation ? (
        <div>
          <p>Are you sure you want to delete this skill?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setShowConfirmation(false)}>No</button>
        </div>
      ) : (
        <button onClick={() => setShowConfirmation(true)}>Delete</button>
      )}
    </div>
  );
}

export default DeleteSkill;
