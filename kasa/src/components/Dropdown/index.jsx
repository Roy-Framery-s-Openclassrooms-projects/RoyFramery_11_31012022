// CSS
import './Dropdown.css'

const Dropdown = ({ title, content }) => {
    const handleDropdown = (e) => {
        const contentNode = e.target.nextSibling
        console.log(contentNode)
        const arrow = e.target.lastChild

        if (contentNode.classList.contains('show')) {
            contentNode.classList.remove('show')
            arrow.classList.remove('rotate')
        } else {
            contentNode.classList.add('show')
            arrow.classList.add('rotate')
        }
    }

    return (
        <div className="dropdown">
            <div className="dropdown__button" onClick={handleDropdown}>
                <div className="dropdown__title">{title}</div>
                <img className="drowdown__arrow" src="/arrow-down.svg" alt="" />
            </div>
            <div className="dropdown__content">
                <p className="dropdown__text">{content}</p>
            </div>
        </div>
    )
}

export default Dropdown
