import Product from "./Product"
import Button from "./Button"

function Catalogue({ produits }) {
    const onClick = (e) => {
        console.log(e);
    };

    return (
        <section id="catalogue" className="catalogue">
            <div className="catalogue__header">
                <h2>Catalogue des thés</h2>
                <a href="#formulaire"><Button text='Ajouter un produit' color='#DBA745' onClick={onClick} /></a>

            </div>
            <div className="catalogue__produits">
                {produits.map((produit) => (
                    <Product produit={produit} />
                ))}
            </div>
        </section>
    )
}

export default Catalogue