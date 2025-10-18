import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
  const skills = [
    { name: "HTML & CSS", level: 50 },
    { name: "React JS", level: 70 },
    { name: "JavaScript", level: 60 },
    { name: "Express JS", level: 50 },
    { name: "Node JS", level: 50 },
    { name: "MongoDB", level: 50 },
    { name: "Python", level: 60 },
    { name: "Django", level: 50 },
    { name: "Docker", level: 40 },
    { name: "ChatGPT API", level: 70 },
    { name: "Gemini AI", level: 60 },
    { name: "DeepSeek", level: 65 }
  ];

  const achievements = [
    { number: "2+", text: "Years of Experience" },
    { number: "70+", text: "Projects Completed" },
    { number: "10+", text: "Happy Clients" }
  ];

  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme pattern" />
      </div>
      
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Profile" />
        </div>
        
        <div className="about-right">
          <div className="about-para">
            <p>My name is Ritik Jain, and I am a skilled software engineer with 2 years of experience in both frontend and backend development.</p>
            <p>I have a strong command over the MERN stack and SQL databases. On the backend, I specialize in Node.js and Express.js, building scalable and efficient server-side applications. I am also experienced in working with SQL databases for structured data management. On the frontend, I am proficient in React.js, creating dynamic and interactive user interfaces. Additionally, I have experience with MongoDB as a NoSQL database, allowing for flexible and efficient data handling.</p>
            <p>I also work with Python, Django, and Docker for backend development and deployment. I have extensive experience integrating AI tools like ChatGPT, Gemini AI, and DeepSeek into applications to create intelligent and responsive solutions.</p>
          </div>
        </div>
      </div>
      
      <div className="about-skills">
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="about-skill">
              <p>{skill.name}</p>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="about-achievements">
        {achievements.map((achievement, index) => (
          <React.Fragment key={index}>
            <div className="about-achievement">
              <h1>{achievement.number}</h1>
              <p>{achievement.text}</p>
            </div>
            {index < achievements.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default About