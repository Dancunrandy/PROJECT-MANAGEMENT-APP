import React, { useState } from 'react';

function DeleteProject({ project, onDelete }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    // Delete project from database
    onDelete();
  };

  return (
    <div>
      {showConfirmation ? (
        <div>
          <p>Are you sure you want to delete this project?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setShowConfirmation(false)}>No</button>
        </div>
      ) : (
        <button onClick={() => setShowConfirmation(true)}>Delete</button>
      )}
    </div>
  );
}

export default DeleteProject;
