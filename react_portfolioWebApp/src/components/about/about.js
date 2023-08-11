import React from 'react';
// import profile_img from '../../assets/images/profile/sreeram.jpg';
 import education from '../../assets/icons/education.png';
import experience from '../../assets/icons/experience.png';
 


function About() {
  return (
    <div>
       <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        {/* <div className="section__pic-container">
        <img
        src={arrow}
        alt="Arrow icon"
        className="icon arrow"
        onclick="location.href='./#experience'"
      />
        </div> */}
        <div className="about-details-container">
        <div className="text-container">
            <p>
            I am an enthusiastic and dedicated web developer, thrilled to present myself as a recent graduate with a BCA degree from the esteemed University of Calicut.
             My educational journey has equipped me with a solid foundation in computer applications and programming, laying the groundwork for my exciting venture into the world of web development.
            My passion for creating seamless and visually captivating online experiences led me to pursue a Certification in MERN Stack Development from Techmindz at Infopark,Kochi. 
            This certification has empowered me with the skills necessary to bring ideas to life using cutting-edge technologies and frameworks.
            My approach to web development is driven by a harmonious blend of innovation and functionality. I take immense pride in designing user-friendly websites that not only resonate with the brand's essence but also offer users a delightful journey through intuitive interfaces. I firmly believe that the digital landscape is an ever-evolving canvas, and I am committed to staying at the forefront of industry trends and best practices.
 
            </p> <br/> <br/>
          </div>
          <div className="about-containers">
            
            <div className="details-container">
              <img
                src={experience}
                alt="Experience icon"
                className="icon"
              />
              <h3>Certifications</h3>
              <p>  Mern Stack Development [Techmindz]</p>
              <p> Front-End Development [Edunet Foundations]</p>
            </div>
            <div className="details-container">
              <img
                src={education}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>BCA - Bachelors Degree</p>
              <p>DHSE - Higher Seconday</p>
              <p>CBSE -     10th</p>

            </div>
          </div>
         
        </div>
      </div>
       
    </section>
      </div>
  );
}

export default About;
