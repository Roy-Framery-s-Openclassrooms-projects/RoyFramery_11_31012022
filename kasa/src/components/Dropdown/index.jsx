// CSS
import './Dropdown.scss'

const Dropdown = ({ title, content, className }) => {
    const handleDropdown = (e) => {
        const contentNode = e.target.nextSibling
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
        <div className={className}>
            <div className="dropdown__button" onClick={handleDropdown}>
                <div className="dropdown__title">{title}</div>
                <img className="dropdown__arrow" src="/arrow-down.svg" alt="" />
            </div>
            <div className="dropdown__content">
                {Array.isArray(content) ? (
                    <ul className="dropdown__list">
                        {content.map((equipment) => (
                            <li
                                key={equipment}
                                className="dropdown__list-element"
                            >
                                {equipment}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="dropdown__text">{content}</p>
                )}
            </div>
        </div>
    )
}

export default Dropdown
