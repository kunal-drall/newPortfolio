import projectsData from './Data'

const Works = () => {

  return <> 

      {projectsData.map((project) => {
        const {id, title,description, image, tags} = project; 
        return (
          <div className="project__card" key={id}>
            <div className="project__card-grid">
              <div className="project__ImgDemo">
                <img className="project__img" src={image} alt={title} />
                <div className="project__buttons">
                  <a
                    href="https://buy-me-a-beer-eight.vercel.app/"
                    target="_blank"
                    className="project__button demo"
                  >
                    Demo{" "}
                    <i className="bx bx-right-arrow-alt project__button-icon"></i>
                  </a>
                  <a
                    href="https://github.com/shaktiiii/BuyMeABeer"
                    target="_blank"
                    className="project__button viewCode"
                  >
                    View Code{" "}
                  </a>
                </div>
              </div>

              <div className="project__data">
                <h2 className="project__name">{title}</h2>
                <p className="project__description">{description}</p>
                <p className="project__tech">
                  {tags.map((tech) => {
                    return <span className="project__tech-item"> {tech}</span>;
                  })}
                </p>
              </div>
            </div>
          </div>
        );
        }) 
      }
      <div className="flex">
        <a href="https://github.com/shaktiiii" className="viewMore">View More</a>
      </div>
      </>

  
}
export default Works