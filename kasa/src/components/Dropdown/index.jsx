import aboutUs from '../../__mocks__/aboutUs'

// CSS
import './Dropdown.css'

const Dropdown = ({ title }) => {
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
                break
            default:
        }
    }

    return (
        <div className="dropdown">
            <div className="dropdown__title">{title}</div>
            <div className="dropdown__content">{content}</div>
        </div>
    )
}

export default Dropdown
