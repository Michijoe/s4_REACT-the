import Product from "./Product"
import Button from "./Button"

function Catalogue({ produits, onAdd, onDeleteCatalogue, onUpdateCatalogue }) {
    return (
        <section className="catalogue">
            {/* Header catalogue */}
            <div className="catalogue__header">
                <h2>Catalogue des thés</h2>
                <Button text='Ajouter un produit' color='#DBA745' onClick={onAdd} />
            </div>
            {/* Contenu catalogue */}
            <div className="catalogue__produits">
                {produits.map((produit) => (
                    <Product key={produit.id} produit={produit} onDelete={onDeleteCatalogue} onUpdate={onUpdateCatalogue} />
                ))}
            </div>
        </section>
    )
}

export default Catalogue