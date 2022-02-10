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

    const content = (title) => {
        switch (title) {
            case 'fiabilité':
                return aboutUs.fiability
                break
            case 'respect':
                return aboutUs.respect
                break
            case 'service':
                return aboutUs.service
                break
            case 'sécurité':
                return aboutUs.security
                break
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
                <Dropdown
                    title="fiabilité"
                    content={content('fiabilité')}
                    className="dropdown dropdown__fiability"
                />
                <Dropdown
                    title="respect"
                    content={content('respect')}
                    className="dropdown dropdown__respect"
                />
                <Dropdown
                    title="service"
                    content={content('service')}
                    className="dropdown dropdown__service"
                />
                <Dropdown
                    title="sécurité"
                    content={content('sécurité')}
                    className="dropdown dropdown__security"
                />
            </div>
        </div>
    )
}

export default AboutUs
