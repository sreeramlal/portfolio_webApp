import React from 'react'
 
 

function Profile() {
  return (
    <div>
       <section id="profile">
      {/* <div className="section__pic-container">
        <img className="image_round" src={profile_img} alt="profile_img" />
      </div> */}
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Sreeramlal VP</h1>
        <p className="section__text__p2">MERN Stack Developer</p>
        <div className="btn-container">
        <a href="https://www.linkedin.com"><button className="btn btn-color-2">LinkedIn</button></a> 
          
          
          <a href="https://www.github.com"><button className="btn btn-color-1">GitHub</button></a> 
          
        </div>
         
      </div>
    </section>
      </div>
  );
}

export default Profile;
