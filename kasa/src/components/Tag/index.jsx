// CSS
import './Tag.scss'

const Tag = ({ tagName }) => {
    return (
        <div className="tag">
            <p className="tag__text">{tagName}</p>
        </div>
    )
}

export default Tag
