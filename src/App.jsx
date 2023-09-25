import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/Header';
import Home from './components/Home';
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
      nom: 'Le souk Marocain - Thé vert à la menthe',
      categorie: 'Thé vert',
      description: "Voyagez au cœur du Souk marocain avec notre thé vert à la menthe, une infusion traditionnelle et rafraîchissante qui capture l'essence de la culture marocaine.",
      prix: 8.50,
    },
    {
      id: 3,
      nom: 'Détox - Tisane menthe tilleul',
      categorie: 'Tisane',
      description: "Purifie, nettoie et ré-enligne. Sensation de bien-être après chaque gorgée. Parfait aussi pour l’heure du coucher ne contenant aucune caféine.",
      prix: 6.50,
    },
    {
      id: 4,
      nom: 'La belle framboise | Tisane sans théine',
      categorie: 'Tisane',
      description: "Découvrez notre délicieuse infusion La belle framboise, un mélange harmonieux d'ingrédients soigneusement sélectionnés pour vous offrir une expérience gustative rafraîchissante et fruitée.",
      prix: 4.00,
    },
    {
      id: 5,
      nom: 'Chaï au chocolat | Thé noir épices et chocolat',
      categorie: 'Thé noir',
      description: "Tisane de plantes avec des notes agréables de chocolat accompagnée d’épices indiennes.",
      prix: 8.50,
    },
    {
      id: 6,
      nom: 'Chaï au chocolat | Thé noir épices et chocolat',
      categorie: 'Thé noir',
      description: "Tisane de plantes avec des notes agréables de chocolat accompagnée d’épices indiennes.",
      prix: 8.50,
    },
    {
      id: 7,
      nom: 'La Fiesta | Chaï à la noix de coco',
      categorie: 'Chai',
      description: "'est la fiesta ! Qu'on s'amuse entre amis ou en famille, il y a des odeurs qui restent ancrées dans nos souvenirs de fête. La vanille, la noix de coco, des notes de annelle et de gingembre... wow !",
      prix: 7.50,
    },
    {
      id: 8,
      nom: 'Les yeux bleus - Tisane sans caféine',
      categorie: 'Tisane',
      description: "Un soupçon de caramel donne à cette tisane fruitée une douce saveur c'est comme un bonbon.",
      prix: 6.50,
    },
    {
      id: 10,
      nom: 'Le vieux corsaire - Pour les amoureux d\'orange!',
      categorie: 'Thé noir',
      description: "Il en a vu des mers, des pirates et des contrées lointaines. Son navire craquant sous le poids des marchandises et des canons, il l’a maintenu à flot dans les pires tempêtes et dans les orages les plus violents. ",
      prix: 7.50,
    },
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