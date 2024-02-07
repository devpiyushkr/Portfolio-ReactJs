import React from "react";

const Home = () => {
  return (
    <div>
    <div className="container">
      <div className="intro-container">
        <h2>Hi,my name is</h2>
        <h1 style={{ fontSize: "40px" }}>Piyush Kumar</h1>
        <h2>
          I'm a <span> React Js Developer</span>
        </h2>
        <p style={{ marginTop: "10px" }}>
          I am a React Js developer.My expertise is to create and
          <br></br>develop websites and web based application..
        </p>
        <div style={{ marginTop: "15px", marginLeft: "10px" }}>
         <a href=" https://www.linkedin.com/in/piyush-kumar-bb2699263"><i
            style={{ color: "blue", fontSize: "25px"}}
            className="fa fa-linkedin"></i></a> 
          <a href="https://github.com/devpiyushkr">
          <i style={{ fontSize: "25px", marginLeft: "15px" }}
            className="fa fa-github"/></a>
        </div>
        <button style={{background:'transparent',outline:'none',border:'1px solid black'
        ,padding:'5px 10px',borderRadius:'10px',marginTop:'10px'}}>More about me</button>
      </div>
      {/* ---image--- */}
     <div style={{marginRight:'60px',width:250,height:250,background:'green',borderRadius:'40px'}} >
     {/* <img src={require('./img/piyush.jpeg')} className="profile-image" alt="profile"/>  */}
     </div>
     
    </div>
    {/* // ---about---- */}
    <div style={{padding:'40px',marginTop:'100px',display:'flex',justifyContent:'space-around',width:'100%'}}>
    <div><img src={require('./img/piyush.jpeg')} className="profile-image" alt="profile"/> </div>
      <div style={{width:'500px'}}>
      <h1>About Me</h1>
      <h2>Developer & Designer</h2>
      <p>I am a React Js developer.I can provide clean
code and pixel perfect design.I make the web bassed appliaction websites more interactive and responsive.I knows the languages like html css and javascript.
A responsive design makes your websites accessible to all users,regardless of there device</p>
</div>

    </div>
    </div>
  );
};

export default Home;
