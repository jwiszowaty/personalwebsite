import { Link } from "react-router-dom"
import Pform from "../assets/freecodecamp-form.png"
import Ptribute from "../assets/freecodecamp-tribute.png"
import News1 from "../assets/northcoders-news1.png"
import News2 from "../assets/northcoders-news2.png"
import News3 from "../assets/northcoders-news3.png"
import News4 from "../assets/northcoders-news4.png"
import RWT from "../assets/RenaissanceWT.jpg"
import "../styles/northcoders.css"
import "../styles/personal.css"
import "../styles/freecodecamp.css"
import "../styles/projects.css"
function Projects() {
  return (
    <div className="projects">
      <Link className="back-button" to="/">back</Link>
      <div className='northcoders'>
        <div className='ncnews'>
          <h3 className="title">News app</h3>
          <div className='framework'>
            <h4>Node.js</h4>
            <h4>Express.js</h4>
            <h4>postgreSQL</h4>
            <h4>elephantSQL.com</h4>
            <h4>render.com</h4>
            <h4>netlify.com</h4>
          </div>
          <a className='link' href="https://github.com/jwiszowaty/be-jw-news" target="_blank"><h3>GitHub</h3></a>
          <a className='link' href="https://be-jw-news.onrender.com/api" target="_blank"><h3>API endpoints</h3></a>
          <a className='link' href="https://luminous-sunshine-fe3228.netlify.app/" target="_blank"><h3>Web view</h3></a>
          <div className='imgs'>
            <img className='img' src={News1} alt="" />
            <img className='img' src={News2} alt="" />
            <img className='img' src={News3} alt="" />
            <img className='img' src={News4} alt="" />
          </div>
        </div>
      </div>
      <div className='personal'>
        <div className='beyonceRWT'>
          <div className='top'>
            <h3 className="title">Renaissance World Tour</h3>
            <div className='info'>
              <h4>Beyoncé's outfits from some of the shows</h4>
            </div>
            <a className="link" href="https://github.com/jwiszowaty/intro-html-css" target="_blank"><h3>GitHub</h3></a>
            <a className="link" href="https://jwiszowaty.github.io/intro-html-css/" target="_blank"><h3>Web view</h3></a>
          </div>
          <img className='img' src={RWT} alt="" />
        </div>
      </div>
      <div className='freecodecamp'>
        <div className='form'>
          <h3 className='title'>Form</h3>
          <img className='img' src={Pform} />
        </div>
      </div>
      <div className='freecodecamp'>
        <div className='tribute-page'>
          <h3 className='title'>Tribute page</h3>
          <img className='img' src={Ptribute}
            alt="Screenshot of a website dedicated to a Polish radio podcast. Website is devided in three parts: 1. linear gradient of three colours(black 30%, then gray 20%, then yellow (dark tan)) Takes 50% of the image. It has logo of the radio written in red letters at the top, lower is name and the title of the podcats in white letters and at the bottom of this section there is photo of the interviewer on the left and short description of the podcast on the right to the picture. 2. Background-colour: Yellow (Flax). Title (English translation 'A list of podcasts') of the table below it. 3. Background-colour: Yellow (Crayola). Table consists of three columns 'date', 'podcast number' and 'guest's name'" />
        </div>
      </div>
    </div>
  )
}

export default Projects