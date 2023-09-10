import React from 'react'
import ProjectItem from './ProjectItem'

import { getProjectData } from './getProjectData'



const Projects = () => {
console.log(getProjectData)
  return (
    <section className='projects' id='projects'>
      <div className='heading1'>
        <h1>Latest Projects</h1>
      </div>
      <div className="project__container">
        {getProjectData && getProjectData.length > 0 && getProjectData.map(project => (
          <ProjectItem 
            key={project.id}
            title={project.title} 
            images={project.images}
            github_url={project.github_url} 
          />
        ))}
      </div>
    </section>
  )
}

export default Projects