import { useState } from 'react';
import Button from './Button'

const UpdateForm = ({ product, onUpdate, onCancel }) => {
    const id = product.id;
    const [nom, setNom] = useState(product.nom);
    const [categorie, setCategorie] = useState(product.categorie);
    const [description, setDescription] = useState(product.description);
    const [prix, setPrix] = useState(product.prix);

    const onSubmit = (e) => {
        e.preventDefault();
        onUpdate({ id, nom, categorie, description, prix });
    }

    return (
        <section id="formulaire" className="modal">
            <div className="modal-content">
                <h2>Modifier un produit</h2>
                <form>
                    <div className="form-control">
                        <label htmlFor="">Nom
                            <input
                                type="text"
                                value={nom}
                                onChange={(e) => setNom(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Catégorie
                            <input
                                type="text"
                                value={categorie}
                                onChange={(e) => setCategorie(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Prix
                            <input
                                type="number"
                                value={prix}
                                onChange={(e) => setPrix(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Description
                            <textarea
                                rows="10"
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

export default UpdateForm;
