import Banner from '../assets/hero.jpg'
import { PiPlantFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className='herobanner'>
            <img src={Banner} alt="Hero banner" />
            <h2 className='herobanner-text'>Consultez notre catalogue
                <Link to="/catalogue"> <PiPlantFill /></Link>
            </h2>
        </section>
    )
}

export default Hero