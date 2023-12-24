import './App.css'
import TextAnimation from "../components/TextAnimation"

function App() {
  return <>

  <div className="page">

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

  <div className="page">

    <div id='removeMobile' className="head">Bio<span id="dotpurple">.</span></div>

    <div className="contentBox">
      <p className='content'>
      “Keen interest in attention to detail and passion for the smallest details makes my work pixel perfect.”
      </p>
    </div>

    <div id='removeMobile' className="hr">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>

  </div>

  </>
}

export default App;