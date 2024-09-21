import React, { useState, useEffect } from 'react';
import { db } from './Firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import LivroList from './Components/ListarLivro';
import AddLivro from './Components/AddLivro';
import './App.css';

function App() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const fetchLivros = async () => {
      const livrosCollection = collection(db, 'livros');
      const livroSnapshot = await getDocs(livrosCollection);
      const livroList = livroSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLivros(livroList);
    };
    fetchLivros();
  }, []);

  const addLivro = async (livro) => {
    const newLivro = { ...livro, isCompleted: false };
    const docRef = await addDoc(collection(db, 'livros'), newLivro);
    setLivros([...livros, { id: docRef.id, ...newLivro }]);
  };

  const updateLivro = async (id, updatedLivro) => {
    const livroDoc = doc(db, 'livros', id);
    await updateDoc(livroDoc, updatedLivro);
    setLivros(livros.map(livro => (livro.id === id ? { id, ...updatedLivro } : livro)));
  };

  const deleteLivro = async (id) => {
    const livroDoc = doc(db, 'livros', id);
    await deleteDoc(livroDoc);
    setLivros(livros.filter(livro => livro.id !== id));
  };

  const toggleComplete = async (livro) => {
    const updatedLivro = { ...livro, isCompleted: !livro.isCompleted };
    await updateLivro(livro.id, updatedLivro);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <img src={require('./Components/logo.jpg')} alt="Logo" title="Gestão de Livros Logo" style={{ width: '40px', height: '40px' }} />
        <p>Bibliotech</p>
      </nav>
      <h1>Cadastro de Livros</h1>
      <AddLivro addLivro={addLivro} />
      <LivroList livros={livros} updateLivro={updateLivro} deleteLivro={deleteLivro} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
