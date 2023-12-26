import './App.css'
import TextAnimation from "../components/TextAnimation"

function App() {
  return <>

  {/* top page */}
  <div id='homepage' className="page">
    <div className="nav">
      <i className="fa-solid fa-moon"></i>
    </div>

    <div className="headProfile">
      <div id='headContainer'>
        <div className="maskContainer">
          <span id='imaryan' >I'm Aryan Karma</span>
        </div>
        <TextAnimation /> {/* rendering component */}
      </div>

      <div id="profileContainer">
        <img src="/img/profilePicture.png" alt="profile picture" />
      </div>
    </div>
    
    <div id='removeMobile' className="hr">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  </div>

  {/* bio page */}
  <div className="page">
    <div id='removeMobile' className="head">Bio<span id="headdotpurple">.</span></div>

    <div className="contentBox">
      <p className='content'>
      “ <span id='bold'>Keen interest</span> in attention to detail and passion for the smallest details makes my work pixel perfect.”
      </p>
    </div>

    <div id='removeMobile' className="hr">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div id="hrdotpurple" className="circle"></div>
    </div>
  </div>

  {/* skills page */}
  <div id='skillspage' className="page">
    <div className="head">Skills<span id="headdotlightblue">.</span></div>

    <div className="contentBox">
      <div id="skillscircle">
        <div style={{borderColor:"#212D30"}} className="skillcircle">
          <div className="tooltip">
            <div className="tooltipcorner"></div>
            Aryan has a strong command on react with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"45px", height:"45px",}}  src="/img/react.png" alt="" /></div>
        <div style={{borderColor:"#172027"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on c++ with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"40px", height:"45px",}} src="/img/c++.png" alt="" /></div>
        <div style={{borderColor:"#222820"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on nodejs with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"45px", height:"45px", }} src="/img/nodejs.png" alt="" /></div>
        <div style={{borderColor:"#313131"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on expressjs with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"45px", height:"45px", }} src="/img/expressjs.png" alt="" /></div>
        <div style={{borderColor:"#313131"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on nextjs with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"45px", height:"45px", }} src="/img/nextjs.png" alt="" /></div>
        <div style={{borderColor:"#252E43"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on htmlcss with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"45px", height:"35px", }} src="/img/htmlcss.jpg" alt="" /></div>
        <div style={{borderColor:"#352B30"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on sass with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"45px", height:"30px", scale:".9"}} src="/img/sass.jpg" alt="" /></div>
        <div style={{borderColor:"#3B2C2B"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on figma with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"28.5px", height:"42.5px", padding:"0 7.5px", scale:".9"}}  src="/img/figma.jpg" alt="" /></div>
        <div style={{borderColor:"#3A3627"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on javascript with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"40px", height:"45px", padding:"0px 5px",  scale:".9"}}  src="/img/javascript.jpg" alt="" /></div>
        <div style={{borderColor:"#21392B"}} className="skillcircle">
          <div className="tooltip">    
            <div className="tooltipcorner"></div>            
            Aryan has a strong command on mongodb with 1+ years practice on DSA solutions.
          </div>
          <img style={{width:"45px", height:"45px"}}  src="/img/mongodb.png" alt="" /></div>
      </div>
    </div>

    <div id='removeMobile' className="hr">
      <div className="circle"></div>
      <div className="circle"></div>
      <div id="hrdotlightblue"  className="circle"></div>
      <div id="hrdotlightblue" className="circle"></div>
    </div>
  </div>




  {/* bottom navigator */}
  <div className='removeDesktop' id="navigator">
    <p href='#homepage' id='home' >Home</p>
    <p href='#skillspage' id='skills' >Skills</p>
    {/* <a href='#homepage' id='home' >Home</a>
    <a href='#skillspage' id='skills' >Skills</a> */}
    <p id='projects' >Project</p>
    <p id='connect' >Connect</p>
  </div>

  </>
}

export default App;


/*
  Additions -
  1. Update written content about aryan's skills

*/