const Info = () => {
  return (
    <div className="about__info grid">

        <div className="about__box">
            <i className="bx bx-cube-alt about__icon"></i>
            <h3 className="about__title">Created</h3>
            <span className="about__subtitle">7+ FullStack Dapps</span>
        </div>

        <div className="about__box">
            <i className="bx bx-code-alt about__icon"></i>
            <h3 className="about__title">Written</h3>
            <span className="about__subtitle">15+ Smart Contracts</span>
        </div>

        <div className="about__box">
            <i className="bx bx-support about__icon"></i>
            <h3 className="about__title">Support </h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}
export default Info