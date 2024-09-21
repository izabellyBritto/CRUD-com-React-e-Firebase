import React, { useState } from 'react';

function AddLivro({ addLivro }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addLivro({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Adicionar Novo Livro"
      />
      <button type="submit">Cadastrar Livro</button>
    </form>
  );
}

export default AddLivro;
