import '../src/css/App.css'
import Logo from "./assets/logo.png";
import Pencil_Icon from "./assets/pencil_create_icon.png";

function App() {

  return (
    <>
      <div className="navbar">
        <div className="inner">
          <div className="logo">
            <a href=""><img src={Logo} alt="logo" width="64px"/><div>weizzx</div></a>
          </div>
          <div className="links">
            <div>
              <a href="#home">Home</a>
              <a href="#skills">$kill$</a>
              <a href="#projects">Project$</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="email">
            <a href="mailto:help@weizzx.xyz">help@weizzx.xyz</a>
          </div>
        </div>
      </div>

      <div id='home' className='header'>
        <div className="inner">
          <div>Dominik Bobruška</div>
        </div>
      </div>

      {/* <section id='skills'>
        <div className="inner">
          <h1>01. O mně</h1>
          <div className="grid">
            <div className="i i1">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="i i2">
              <div className='d'><div className="bar"><div className="filled"></div></div></div>
              <div className='d'><div className="bar"><div className="filled"></div></div></div>
            </div>
          </div>
        </div>
      </section> */}

      <section id='projects'>
        <div className="inner">
          <div className="projects-grid">
            <div className="card">Coming soon...</div>
            {/* <div className="card"></div> */}
          </div>
        </div>
      </section>
      
      <section className='contact'>
        <div className="inner">
          <div className="create-web">
            <img src={Pencil_Icon} alt="logo" width="200px"/>
            <div>
              <h2>Do you want website?</h2>
              <p>Do you want create a website?</p>
              <div>
                <b>Write me email: </b>
                <a href="mailto:help@weizzx.xyz">help@weizzx.xyz</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="inner">
          <div className='body'>
            <div className='creator'>Stránku vytvořil <b><a href="/">Dominik Bobruška </a></b></div>
            <div className="f-logo">
              <img src={Logo} alt="logo" width="48px"/>
              <div>weizzx</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
