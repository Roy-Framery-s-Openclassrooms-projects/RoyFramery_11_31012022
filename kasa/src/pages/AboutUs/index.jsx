import { useEffect } from 'react'
import Banner from '../../components/Banner'
// import aboutUs from '../../__mocks__/aboutUs'

// CSS
import './AboutUs.css'

const AboutUs = () => {
    useEffect(() => {
        document.title = 'À propos'
    }, [])

    const image =
        window.screen.width <= '576'
            ? '/bannerAboutUsSmall.png'
            : '/bannerAboutUs.png'
    return (
        <div className="aboutUs">
            <Banner image={image} />
            <div className="aboutUs__dropdowns">{/* dropdowns */}</div>
        </div>
    )
}

export default AboutUs
