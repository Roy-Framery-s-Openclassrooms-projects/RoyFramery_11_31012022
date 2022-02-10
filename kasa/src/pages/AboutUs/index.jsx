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
                    className="aboutUs__dropdown"
                    title="fiabilité"
                    content={content('fiabilité')}
                />
                <Dropdown
                    className="aboutUs__dropdown--fadeInWithDelay"
                    title="respect"
                    content={content('respect')}
                />
                <Dropdown
                    className="aboutUs__dropdown--fadeInWithDelay"
                    title="service"
                    content={content('service')}
                />
                <Dropdown
                    className="aboutUs__dropdown--fadeInWithDelay"
                    title="sécurité"
                    content={content('sécurité')}
                />
            </div>
        </div>
    )
}

export default AboutUs
