import { PiPlantFill } from 'react-icons/pi'
import { FaDollarSign } from 'react-icons/fa'
import { PiChatTeardropTextBold } from 'react-icons/pi'
import Button from './Button'

function Produit({ produit, onDelete, onUpdate }) {
    return (
        <div className="catalogue__produit">
            <h3>{produit.nom}</h3>
            <p><PiPlantFill /> {produit.categorie}</p>
            <p><PiChatTeardropTextBold /> {produit.description}</p>
            <p><FaDollarSign /> {produit.prix} CAD</p>
            <div>
                <Button text='Modifier' color='var(--color-purple)' onClick={() => onUpdate(produit)} />
                <Button text='Supprimer' color='#8E3829' onClick={() => onDelete(produit.id)} />
            </div>
        </div>
    )
}

export default Produit