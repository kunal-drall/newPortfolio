import './projects.css'
import Works from './Works'

const Projects = () => {
  return (
    <section className="project section" id="projects">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">Most Recent Projects</span>

      <div className="projects__container container grid">
        <Works/>
      </div>
      
    </section>
  )
}
export default Projects