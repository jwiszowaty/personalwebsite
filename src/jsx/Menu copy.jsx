import '../styles/menu.css'
import CV from '../assets/CV Northcoders Jakub Wiszowaty January 2024.pdf'
import { Link } from 'react-router-dom'
function Menu() {
  return (
    <section className='menu'>
      <div className='name'>
        <h1 className='first'>Jakub</h1>
        <h1 className='surname'>Wiszowaty</h1>
      </div>
      <div className='cv'>
        <div className='text'>
          <p>CV</p>
          <p className='cv-update'>updated on</p>
          <p className='cv-update'>2/1/24</p>
        </div>
        <a href={CV} download="Jakub Wiszowaty CV 2023" className='download'>download</a>
        <a href={CV} target='_blank' className='view'>view</a>
      </div>
      <nav className="nav">
        <Link to="/projects">Coding projects</Link>
        <Link to="/aoc2023">	&#10052; Advent of Code 2023 	&#10052;</Link>
        <Link to="/blender">Blender</Link>
      </nav>
      <section className='form'>
        <h1>Contact form</h1>
        <form name="contact" method="post" onSubmit="submit" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <input name="bot-field" />
          </div>
          <div className="input">
            <label htmlFor="e-mail">Your e-mail</label>
            <input id="e-mail" type="text" name="e-mail" autocomplete="name" />
          </div>
          <div className="input">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" autocomplete="off"></textarea>
          </div>
          <button type="submit">Send!</button>
        </form>
      </section>
    </section>
  )
}

export default Menu