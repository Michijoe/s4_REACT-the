import Banner from '../assets/hero.webp'
import { PiPlantFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className='home'>
            <div className='home__herobanner'>
                <img src={Banner} alt="Hero banner" />
                <Link to="/catalogue"><h2 className='home__herobanner-text'>Consultez le catalogue des thés <PiPlantFill /></h2></Link>
            </div>
            <div className="home__about">
                <h2>Plongée au cœur de l'univers envoûtant du Thé</h2>
                <p>Bienvenue dans le monde enchanté du thé, où chaque tasse révèle une histoire unique et une expérience sensorielle inoubliable. Chez "React Tea", notre vocation est de vous transporter dans un voyage au pays des saveurs et des arômes exquis.</p>
                <h3>L'art du Thé : une passion, une expertise</h3>
                <p>Notre fondateur, passionné par l'art du thé depuis son plus jeune âge, a parcouru les terres lointaines où cette précieuse feuille est cultivée et récoltée avec amour. De ces périples est née la conviction profonde que chaque variété de thé est un trésor unique à partager.</p>
                <p>Notre équipe dévouée, formée par les meilleurs experts en thé, sélectionne méticuleusement les feuilles les plus délicates et les mélanges les plus raffinés. Du thé noir au thé vert, du thé oolong au thé blanc, nous offrons une palette complète de saveurs, d'arômes et de bienfaits pour satisfaire les palais les plus exigeants.</p>
            </div>
        </section>
    )
}

export default Home