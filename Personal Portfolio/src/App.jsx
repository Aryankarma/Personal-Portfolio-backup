import './App.css'
import TextAnimation from "../components/TextAnimation"

function App() {
  return <>


  <div className="nav">
    <i className="fa-solid fa-moon"></i>
  </div>

  <div className="headProfile">

    <div id='headContainer'>
      <div className="maskContainer">
        <span id='imaryan' >I'm Aryan Karma</span>
      </div>

      {/* id subhead is given */}
      <TextAnimation /> 
    </div>

    <div id="profileContainer">
      <img src="/img/profilePicture.png" alt="profile picture" />
    </div>


  </div>

  </>
}

export default App;