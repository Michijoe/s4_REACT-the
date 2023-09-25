import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home';
import Catalogue from './components/Catalogue';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';
import Footer from './components/Footer';


function App() {
  const [catalogue, setCatalogue] = useState([]);

  /////////// Récupérer les données du server //////////////////////
  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts();
      setCatalogue(productsFromServer);
      console.log(productsFromServer);
    };
    getProducts();
  }, [])

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products');
    const data = await res.json();
    return data;
  };

  //////////////   ADD   ////////////////////////////////////
  // Toggle true/false pour affichage de la modale d'ajout de produit
  const [showAddForm, setShowAddForm] = useState(false);

  // Ajouter un produit au catalogue et fermer la modale
  const addProduct = async (product) => {
    // post sur le server
    const res = await fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(product),
    });
    const newProduct = await res.json();

    // post dans le state
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
  const updateProduct = async (updatedProduct) => {
    // put sur le server
    await fetch(`http://localhost:5000/products/${updatedProduct.id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updatedProduct),
    });

    // put dans le state
    setCatalogue(catalogue.map((product) => product.id === updatedProduct.id ? updatedProduct : product));

    setEditingProduct(null);
  };

  ///////////   DELETE   ////////////////////////////////////
  // Au clic sur le bouton supprimer, on met à jour le catalogue en filtrant le produit à supprimer
  const deleteProduct = async (id) => {
    // delete sur le server
    await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    });

    // delete dans le state
    setCatalogue(catalogue.filter((product) => product.id !== id));
  };


  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          {/* ACCUEIL */}
          <Route path="/" element={<Home />} />

          {/* CATALOGUE */}
          <Route path="/catalogue" element={catalogue.length > 0 ? (
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