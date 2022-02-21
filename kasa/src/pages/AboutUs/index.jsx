import { useEffect } from 'react'
import Banner from '../../components/Banner'
import aboutUs from '../../__mocks__/aboutUs'
import Dropdown from '../../components/Dropdown'

// CSS
import './AboutUs.scss'

const AboutUs = () => {
    useEffect(() => {
        document.title = 'À propos'
    }, [])

    // Switch to display content in the dropdown by title
    const content = (title) => {
        switch (title) {
            case 'fiability':
                return aboutUs.fiability
            case 'respect':
                return aboutUs.respect
            case 'service':
                return aboutUs.service
            case 'sécurity':
                return aboutUs.security
            default:
                console.log('default')
                break
        }
    }

    const image =
        window.screen.width <= '576'
            ? '/bannerAboutUsSmall.png'
            : '/bannerAboutUs.png'
    return (
        <div className="aboutUs">
            <Banner image={image} />
            <div className="aboutUs__dropdowns">
                <Dropdown title="fiabilité" content={content('fiability')} />
                <Dropdown title="respect" content={content('respect')} />
                <Dropdown title="service" content={content('service')} />
                <Dropdown title="sécurité" content={content('sécurity')} />
            </div>
        </div>
    )
}

export default AboutUs
