import React from 'react';
import Livro from './Livro';

export default function LivroList({ livros, updateLivro, deleteLivro, toggleComplete }) {
  return (
    <div>
      {livros.map(livro => (
        <Livro
          key={livro.id}
          livro={livro}
          updateLivro={updateLivro}
          deleteLivro={deleteLivro}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}
