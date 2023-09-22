import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Hero from './components/Hero';
import Catalogue from './components/Catalogue';
import AddForm from './components/AddForm';
import Footer from './components/Footer';
import UpdateForm from './components/UpdateForm';


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



  //////////////   ADD   ////////////////////////////////////
  // Toggle true/false pour affichage de la modale d'ajout de produit
  const [showAddForm, setShowAddForm] = useState(false);

  // Ajouter un produit au catalogue et fermer la modale
  const addProduct = (product) => {
    const id = Math.floor(Math.random() * 1000);
    const newProduct = { id, ...product };
    setCatalogue([...catalogue, newProduct]);
    setShowAddForm(false);
  }

  ////////////   UPDATE   ////////////////////////////////////
  // Variable editingProduct qui contiendra le produit à modifier
  const [editingProduct, setEditingProduct] = useState(null);

  // Au clic sur le bouton modifier, on alimente editingProduct avec le produit sélectionné
  const handleUpdateClick = (product) => {
    setEditingProduct(product);
  };

  // Au clic sur le bouton valider, on met à jour le catalogue et on vide editingProduct
  const updateProduct = (updatedProduct) => {
    setCatalogue(catalogue.map((product) => product.id === updatedProduct.id ? updatedProduct : product));
    setEditingProduct(null);
  };

  ///////////   DELETE   ////////////////////////////////////
  // Au clic sur le bouton supprimer, on met à jour le catalogue en filtrant le produit à supprimer
  const deleteProduct = (id) => {
    setCatalogue(catalogue.filter((product) => product.id !== id));
  };


  return (
    <BrowserRouter basename={"/react"}>
      <Header />
      <main>
        <Routes>
          {/* ACCUEIL */}
          <Route exact path={`/`} element={<Hero />} />

          {/* CATALOGUE */}
          <Route path={'/catalogue'} element={catalogue.length > 0 ? (
            <Catalogue
              produits={catalogue}
              onAdd={() => setShowAddForm(true)}
              onDeleteCatalogue={deleteProduct}
              onUpdateCatalogue={handleUpdateClick} />
          ) : (
            'Pas de produits'
          )} />
        </Routes>
        {/* MODALE AJOUT PRODUIT */}
        {showAddForm && <AddForm
          onAdd={addProduct}
          onCancel={() => setShowAddForm(false)} />}

        {/* MODALE UPDATE PRODUIT */}
        {editingProduct && <UpdateForm
          product={editingProduct}
          onUpdate={updateProduct}
          onCancel={() => setEditingProduct(null)} />}

      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;