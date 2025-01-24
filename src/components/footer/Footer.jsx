import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Shaktiii  </h1>

            <ul className="footer__list">
                <li>
                <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                <a href="#projects" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">

                <a href="https://www.linkedin.com/in/dubeyshakti/" className="footer__social-link" target="_blank">
                    <i class="uil uil-linkedin-alt"></i>
                </a>

                <a href="https://twitter.com/shaktidubey_" className="footer__social-link" target="_blank">
                    <i class="uil uil-twitter-alt"></i>
                </a>

                <a href="https://github.com/shaktiiii" className="footer__social-link" target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>

            </div>

            <div className="footer__copy">&#169; Shakti Dubey. All rights Reserved </div>
        </div>
    </footer>
  )
}
export default Footer