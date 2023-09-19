import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalogue from './components/Catalogue';
import AddForm from './components/AddForm';
import Footer from './components/Footer';

function App() {
  const [catalogue, setCatalogue] = useState([
    {
      id: 1,
      nom: 'Réveil du printemps - Thé vert, aux fleurs de jasmin',
      categorie: 'Thé vert',
      description: "Le Réveil du Printemps vous transporte dans un monde de douceur et d'élégance avec notre classique thé vert aux fleurs de jasmin. Cette infusion délicate capture l'essence même de la saison du renouveau.",
      prix: 5.00,
    },
    {
      id: 2,
      nom: 'Réveil du printemps - Thé vert, aux fleurs de jasmin',
      categorie: 'Thé vert',
      description: "Le Réveil du Printemps vous transporte dans un monde de douceur et d'élégance avec notre classique thé vert aux fleurs de jasmin. Cette infusion délicate capture l'essence même de la saison du renouveau.",
      prix: 5.50,
    },
    {
      id: 3,
      nom: 'Réveil du printemps - Thé vert, aux fleurs de jasmin',
      categorie: 'Thé vert',
      description: "Le Réveil du Printemps vous transporte dans un monde de douceur et d'élégance avec notre classique thé vert aux fleurs de jasmin. Cette infusion délicate capture l'essence même de la saison du renouveau.",
      prix: 15.30,
    },
    {
      id: 4,
      nom: 'Réveil du printemps - Thé vert, aux fleurs de jasmin',
      categorie: 'Thé vert',
      description: "Le Réveil du Printemps vous transporte dans un monde de douceur et d'élégance avec notre classique thé vert aux fleurs de jasmin. Cette infusion délicate capture l'essence même de la saison du renouveau.",
      prix: 5,
    },
    {
      id: 5,
      nom: 'Réveil du printemps - Thé vert, aux fleurs de jasmin',
      categorie: 'Thé vert',
      description: "Le Réveil du Printemps vous transporte dans un monde de douceur et d'élégance avec notre classique thé vert aux fleurs de jasmin. Cette infusion délicate capture l'essence même de la saison du renouveau.",
      prix: 5,
    }
  ]);

  // DELETE
  const deleteProduct = (id) => {
    setCatalogue(catalogue.filter((product) => product.id !== id));
  }

  // ADD
  const addProduct = (product) => {
    const id = Math.floor(Math.random() * 1000);
    const newProduct = { id, ...product };
    setCatalogue([...catalogue, newProduct]);
  }

  // UPDATE
  const modifProduct = (id) => {
    setCatalogue(catalogue.map((produit) => produit.id === id ? { ...produit, nom: produit.nom, categorie: produit.categorie, description: produit.description } : produit));
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        {catalogue.length > 0 ? (
          <Catalogue produits={catalogue} onDeleteCatalogue={deleteProduct} onModifCatalogue={modifProduct} />
        ) : (
          'Pas de produits'
        )}
        <AddForm onAdd={addProduct} />
      </main>
      <Footer />
    </>
  );
}

export default App;
