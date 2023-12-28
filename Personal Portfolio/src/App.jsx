import './App.css'
import TextAnimation from "../components/TextAnimation"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {useState, useEffect} from 'react'

function App() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // scroll handle and navigator animation
  useEffect(()=>{

    const handleScroll = () =>{
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const scrollPercentage = Math.round((scrolled / scrollHeight) * 100);
    
      const home = document.getElementById("home")
      const skills = document.getElementById("skills")
      const projects = document.getElementById("projects")
      const connect = document.getElementById("connect")
      const elementArray = [home, skills, projects, connect]

      function udpateClass(element){
        // addclass
        elementArray.find((currentElement) => {
          if(currentElement == element){
            currentElement.classList.add("activeSection");
          }else{
            currentElement.classList.remove("activeSection")
          }
        })
      }

      if(scrollPercentage < 25 && scrollPercentage > 0){
        // home
        udpateClass(home)
      }else if(scrollPercentage < 50 && scrollPercentage > 25){
        // skills
        udpateClass(skills)
      }else if(scrollPercentage <= 79 && scrollPercentage > 50){
        // projects
        udpateClass(projects)
      }else if(scrollPercentage < 100 && scrollPercentage >= 79){
        // connect
        udpateClass(connect)
      }
    }

    window.addEventListener('scroll', handleScroll) 

}, [])

  return <>

  {/* top page */}
<div className="pagecontainer">
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
        <img src="/img/pfp.jpg" alt="profile picture" />
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

  {/* projects page */}
  <div id='projectspage' className="page">

    <div className="head">Projects<span id="headdotpurple">.</span></div>
    
    <div style={{background:"none", boxShadow:'none'}} className="contentBox" id='removeMobile'>
      <Slider {...settings}>
      
      <div className="projectBox projectBox1">
          
          <div className="laptop">
            <img src="/img/weather-app.png" alt="" />
          </div>

          <div className="projectAbout">
            <div className="projectHeading">
              <h5 style={{ margin: "0", marginLeft: "-2%" }}>Weather App</h5>
            </div>
            <div className="projectFeatures">
              <ol style={{ paddingLeft: "7%" }}>
                <li>feature xyz</li>
                <li>feature xyz</li>
                <li>feature xyz</li>
              </ol>
            </div>
            <div className="checkoutbtn">
              <a href="https://weather-app-aryankarma.vercel.app/" target="_blank">
                <button href="">
                  <p> Checkout
                    <img style={{ scale: "2.1", marginLeft: ".4rem" }} src="/svg/Arrow1.svg" alt="" />
                  </p>
                </button>
              </a>
              <a href="https://github.com/aryankarma/weatherapp" target="_blank">
                <button className='github' href="">
                    <img style={{height:"15px"}} src="/svg/github.svg" alt="" />
                </button>
              </a>
            </div>
          </div>

        </div>


        <div className="projectBox projectBox2">
          
          <div className="laptop">
            <img src="/img/bookswap.png" alt="" />
          </div>
          
          <div className="projectAbout">
            <div className="projectHeading">
              <h5 style={{ margin: "0", marginLeft: "-2%" }}>BookSwap</h5>
            </div>
            <div className="projectFeatures">
              <ol style={{ paddingLeft: "7%" }}>
                <li>feature xyz</li>
                <li>feature xyz</li>
                <li>feature xyz</li>
              </ol>
            </div>
            <div className="checkoutbtn">
              <a href="" target="_blank">
                <button href="">
                  <p> Checkout
                    <img style={{ scale: "2.1", marginLeft: ".4rem"  }} src="/svg/Arrow1.svg" alt="" />
                  </p>
                </button>
              </a>
              <a href="" target="_blank">
                <button className='github' href="">
                    <img style={{height:"15px"}} src="/svg/github.svg" alt="" />
                </button>
              </a>
            </div>
          </div>

        </div>


        <div className="projectBox projectBox3">
          
          <div className="laptop">
            <img src="/img/your-wellness.png" alt="" />
          </div>

          <div className="projectAbout">
            <div className="projectHeading">
              <h5 style={{ margin: "0", marginLeft: "-2%" }}>Your-wellness</h5>
            </div>
            <div className="projectFeatures">
              <ol style={{ paddingLeft: "7%" }}>
                <li>feature xyz</li>
                <li>feature xyz</li>
                <li>feature xyz</li>
              </ol>
            </div>
            <div className="checkoutbtn">
              <a href="" target="_blank">
                <button href="">
                  <p> Checkout
                    <img style={{scale: "2.1", marginLeft: ".4rem"}} src="/svg/Arrow1.svg" alt="" />
                  </p>
                </button>
              </a>
              <a href="" target="_blank">
                <button className='github' href="">
                    <img style={{height:"15px"}} src="/svg/github.svg" alt="" />
                </button>
              </a>
            </div>
          </div>

        </div>  

      </Slider>
    </div>

    <div style={{background:"none", boxShadow:'none'}} className="contentBox">
      <div style={{scale:"1.05",marginTop: "1.5rem"}} id='projectBoxContainer' className='removeDesktop' >


        <div className="projectBox projectBox1">
          
          <div className="laptop">
            <img src="/img/weather-app.png" alt="" />
          </div>

          <div className="projectAbout">
            <div className="projectHeading">
              <h5 style={{ margin: "0", marginLeft: "-5%" }}>Weather App</h5>
            </div>
            <div className="projectFeatures">
              <ol style={{ paddingLeft: "10%" }}>
                <li>feature xyz</li>
                <li>feature xyz</li>
                <li>feature xyz</li>
              </ol>
            </div>
            <div className="checkoutbtn">
              <a href="" target="_blank">
                <button href="">
                  <p> Checkout
                    <img style={{ scale: "2", marginLeft: ".3rem" }} src="/svg/Arrow1.svg" alt="" />
                  </p>
                </button>
              </a>
              <a href="" target="_blank">
                <button className='github' href="">
                    <img style={{height:"10px"}} src="/svg/github.svg" alt="" />
                </button>
              </a>
            </div>
          </div>

        </div>


        <div className="projectBox projectBox2">
          
          <div className="laptop">
            <img src="/img/bookswap.png" alt="" />
          </div>
          
          <div className="projectAbout">
            <div className="projectHeading">
              <h5 style={{ margin: "0", marginLeft: "-5%" }}>BookSwap</h5>
            </div>
            <div className="projectFeatures">
              <ol style={{ paddingLeft: "10%" }}>
                <li>feature xyz</li>
                <li>feature xyz</li>
                <li>feature xyz</li>
              </ol>
            </div>
            <div className="checkoutbtn">
              <a href="" target="_blank">
                <button href="">
                  <p> Checkout
                    <img style={{ scale: "2", marginLeft: ".3rem" }} src="/svg/Arrow1.svg" alt="" />
                  </p>
                </button>
              </a>
              <a href="" target="_blank">
                <button className='github' href="">
                    <img style={{height:"10px"}} src="/svg/github.svg" alt="" />
                </button>
              </a>
            </div>
          </div>

        </div>


        <div className="projectBox projectBox3">
          
          <div className="laptop">
            <img src="/img/your-wellness.png" alt="" />
          </div>

          <div className="projectAbout">
            <div className="projectHeading">
              <h5 style={{ margin: "0", marginLeft: "-5%" }}>Your-wellness</h5>
            </div>
            <div className="projectFeatures">
              <ol style={{ paddingLeft: "10%" }}>
                <li>feature xyz</li>
                <li>feature xyz</li>
                <li>feature xyz</li>
              </ol>
            </div>
            <div className="checkoutbtn">
              <a href="" target="_blank">
                <button href="">
                  <p> Checkout
                    <img style={{ scale: "2", marginLeft: ".3rem" }} src="/svg/Arrow1.svg" alt="" />
                  </p>
                </button>
              </a>
              <a href="" target="_blank">
                <button className='github' href="">
                    <img style={{height:"10px"}} src="/svg/github.svg" alt="" />
                </button>
              </a>
            </div>
          </div>

        </div>  


      </div>
    </div>


    <div id='removeMobile' className="hr">
      <div className="circle"></div>
      <div id="hrdotpurple" className="circle"></div>
      <div id="hrdotpurple" className="circle"></div>
      <div id="hrdotpurple" className="circle"></div>
    </div>

  </div>



  {/* connect page */}
  <div style={{height:"calc(100vh - 30px)"}} id='connectpage' className="page">

    <div className="head">Connect<span id="headdotyellow">.</span></div>

    <form id='form' action="">
      <input autoComplete='off' type="text" name="name" id="inputname"  placeholder='Name'/>
      <input autoComplete='off' type="text" name="email" id="inputemail" placeholder='Email'/>
      <textarea autoComplete='off' name="message" id="inputtextarea" rows="5" placeholder='Message'></textarea>
      <button type="submit">SEND <img style={{ scale: "1.5", marginLeft: ".3rem" }} src="/svg/sendarrow.svg" alt="" /> </button>
    </form>

  </div>



  {/* bottom navigator */}
  <div className="removeDesktop" id="navigator">
    {/* <p href='#homepage' id='home' >Home</p>
    <p href='#skillspage' id='skills' >Skills</p> */}
    <a href='#homepage' className='activeSection' id='home' >Home</a>
    <a href='#skillspage' id='skills' >Skills</a>
    <a href='#projectspage' id='projects' >Project</a>
    <a href='#connectpage' id='connect' >Connect</a>
    {/* <p id='projects' >Project</p>
    <p id='connect' >Connect</p> */}
  </div>
  
  <div className="footer">

    <div className="socials">
      <a href='https://www.x.com/karmaaryan' target="_blank">Twitter <img src="/svg/Arrow2.svg" alt="" /></a>
      <a href='https://www.github.com/aryankarma' target="_blank">Github <img src="/svg/Arrow2.svg" alt="" /></a>
      <a href='https://www.linkedin.com/in/aryankarma' target="_blank">Linkedin <img src="/svg/Arrow2.svg" alt="" /></a>
    </div>
    <div className="email">
      <a href="mailto:aryankarma29@gmail.com" target='_blank' >aryankarma29@gmail.com <img src="/svg/Arrow2.svg" alt="" /></a>
    </div>
  </div>
  </div>

  </>
  
}

export default App;


/*
  Additions -
  1. Update written content about aryan's skills

*/