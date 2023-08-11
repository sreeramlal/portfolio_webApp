import React from 'react'
 import project_1 from  '../../assets/images/projects/project_1.png'
import project_2 from  '../../assets/images/projects/project_2.png'
import project_3 from  '../../assets/images/projects/project_3.png'
 
 

 

function Project() {
  return (
    <div>
       <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project_1}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Blog Articles</h2>
            <div className="btn-container">
            
               <a href="https://www.github.com"><button className="btn btn-color-2 project-btn">GitHub</button></a> 
              
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project_2}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">BMI Calculator</h2>
            <div className="btn-container">
            <a href="https://www.github.com"><button className="btn btn-color-2 project-btn">GitHub</button></a> 

              
            </div>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project_3}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Portfolio</h2>
            <div className="btn-container">
            <a href="https://www.github.com"><button className="btn btn-color-2 project-btn">GitHub</button></a> 

               
            </div>
          </div>
        </div>
      </div>
       
    </section>
      </div>
  );
}

export default Project;
