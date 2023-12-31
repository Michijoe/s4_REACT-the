import { useState } from 'react';
import Button from './Button'

const AddForm = ({ onAdd, onCancel }) => {
    const [nom, setNom] = useState('');
    const [categorie, setCategorie] = useState('');
    const [description, setDescription] = useState('');
    const [prix, setPrix] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!nom) {
            alert("Merci d'ajouter un nom au produit");
            return;
        }
        onAdd({ nom, categorie, description, prix });

        setNom('');
        setCategorie('');
        setDescription('');
        setPrix('');
    }

    return (
        <section className="modal">
            <div className="modal-content">
                <h2>Ajouter un produit</h2>
                <form onSubmit={onSubmit}>
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
                    <Button text='Enregistrer' color='#DBA745' onClick={onSubmit} />
                    <Button text='Annuler' color='#8E3829' onClick={onCancel} />
                </form>
            </div>

        </section>
    )
};

export default AddForm;
