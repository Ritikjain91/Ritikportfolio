import React from 'react';
import './Hero.css';
import profile_img from '../../assets/Ritikjainportfolio.png'; 
function Hero() {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      <h1>
        <span>Hey, My Name is Ritik </span> 
        I am a full stack developer based in India
      </h1>
      <p>
  I am a passionate software engineer with 2 years of experience specializing in both frontend and backend development. I have a solid foundation in React.js, SQL, HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and Data Structures and Algorithms (DSA). I have solved many problems on LeetCode and HackerRank. My expertise extends to using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Git for version control. I have successfully integrated complex functionalities to build robust and scalable applications.
  <br /><br />
  I am currently exploring new opportunities in both multinational corporations and startups, aiming to leverage my skills in creating innovative solutions. My professional approach is driven by a commitment to quality and efficiency, ensuring that every project I work on meets the highest standards.
</p>

      <div className="hero-action">
        <div className="hero-connect">
          Connect With Me
        </div>
        <div className="hero-resume">
          
        <a href="https://resume-gilt-tau.vercel.app/">My Resume</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
