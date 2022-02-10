import './Footer.scss'

const Footer = () => {
    const actualYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <img src="/footer_logo.svg" alt="" className="footer__logo" />
            <p className="footer__text">
                © {actualYear} Kasa. All rights reserved
            </p>
        </footer>
    )
}

export default Footer
