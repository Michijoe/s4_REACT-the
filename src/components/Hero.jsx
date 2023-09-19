import Banner from '../assets/hero.jpg'
import { PiPlantFill } from 'react-icons/pi'
import { useState } from 'react'


const Hero = () => {
    const [activeNav, setActiveNav] = useState("#");

    return (
        <section className='herobanner'>
            <img src={Banner} alt="Hero banner image" />
            <h2 className='herobanner-text'>Consultez notre catalogue
                <a href="#produits" onClick={() => setActiveNav('#produits')}> <PiPlantFill /></a>
            </h2>

        </section>
    )
}

export default Hero