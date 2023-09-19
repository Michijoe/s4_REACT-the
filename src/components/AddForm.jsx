import { useState } from 'react';

const AddForm = ({ onAdd }) => {
    const [nom, setNom] = useState('');
    const [categorie, setCategorie] = useState('');
    const [description, setDescription] = useState('');
    const [prix, setPrix] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        // si pas de text, alerte et on sort de la fonction
        if (!nom) {
            alert("Merci d'ajouter un nom au produit");
            return;
        }
        // fonction onAdd qui est dans App.js et qui passe les valeurs de la nouvelle tâche
        onAdd({ nom, categorie, description, prix });

        // reinit du form après l'ajout
        setNom('');
        setCategorie('');
        setDescription('');
        setPrix('');
    }

    return (
        <section id="formulaire" className="add-product">
            <div className="add-product__header">
                <h2>Ajouter un produit</h2>
            </div>
            <form className="add-product__form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="">Produit
                        <input
                            type="text"
                            placeholder="Ajouter un produit"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label htmlFor="">Catégorie
                        <input
                            type="text"
                            placeholder="Ajouter une catégorie"
                            value={categorie}
                            onChange={(e) => setCategorie(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label htmlFor="">Prix
                        <input
                            type="number"
                            placeholder="Ajouter un prix"
                            value={prix}
                            onChange={(e) => setPrix(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label htmlFor="">Description
                        <textarea
                            rows="10"
                            placeholder="Ajouter une description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                </div>
                <input type="submit" value="Enregistrer" className="button button-block" />
            </form>
        </section>
    )
};

export default AddForm;
