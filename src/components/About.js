import React from 'react'

const About = () => {
  return (
    <div className='about-section'>
    <div><img src={require('./img/piyush.jpeg')} className="profile-image" alt="profile"/> </div>
      <div id="about" >
      <h1>About Me</h1>
      <h2>Developer & Designer</h2>
      <p style={{marginTop:'14px'}}>I am a React Js developer.I can provide clean
code and pixel perfect design.I make the web bassed appliaction websites more interactive and responsive.I knows the languages like html css and javascript.
A responsive design makes your websites accessible to all users,regardless of there device</p>
</div>

    </div>
  )
}

export default About
