import './Banner.css'

const Banner = ({ image, text }) => {
    const heightBanner =
        window.screen.width <= '576' && window.location.pathname === '/'
            ? '111px'
            : '223px'
    return (
        <div className="banner" style={{ height: heightBanner }}>
            <img src={image} alt="" className="banner__img" />
            <div className="banner__overlay"></div>
            {text ? <h1 className="banner__text">{text}</h1> : null}
        </div>
    )
}

export default Banner
