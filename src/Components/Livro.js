import React, { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './Livro.css';

function Livro({ livro, updateLivro, deleteLivro }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(livro.title);

  const handleUpdate = () => {
    updateLivro(livro.id, { title: newTitle });
    setIsEditing(false);
  };

  return (
    <div className={`livro-container ${livro.isCompleted ? 'completed' : ''}`}>
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="livro-input"
        />
      ) : (
        <span className="livro-title">{livro.title}</span>
      )}
      <div className="livro-buttons">
        <button onClick={() => (isEditing ? handleUpdate() : setIsEditing(true))} className="button-edit">
          {isEditing ? <CheckCircleIcon id="i" /> : <EditIcon id="i" />}
        </button>
        <button onClick={() => deleteLivro(livro.id)} className="button-delete">
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}

export default Livro;
