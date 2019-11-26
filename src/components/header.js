import React from "react"
import "../styles/style.css"
import { Link } from 'gatsby'


const Header = () => {
  return (
    <div>
      <div id="logo">
        <div id="logo_text">
          {/* <!-- className="logo_colour", allows you to change the colour of the text --> */}
          <h1>
            {/* <a href="index.html"> */}
            <Link to="/">
              black<span className="logo_colour">_pink</span>
              <span className="logo_colour2">_white</span>
            {/* </a> */}
            </Link>
          </h1>
          <h2>Simple. Contemporary. Website Template.</h2>
        </div>
      </div>

      <div id="menubar">
        <ul id="menu">
          {/* <!-- put classNameName="selected" in the li tag for the selected page - to highlight which page you're on --> */}
          <li>
          <Link to="/">Home</Link>
            {/* <a href="index.html">Home</a> */}
          </li>
          <li>
          <Link to="/examples">Examples</Link>
            {/* <a href="examples.html">Examples</a> */}
          </li>
          <li>
          <Link to="/page">Page</Link>
            {/* <a href="page.html">A Page</a> */}
          </li>
          <li>
          <Link to="/another-page">Another Page</Link>
            {/* <a href="another_page.html">Another Page</a> */}
          </li>
          <li>
          <Link to="/contact">Contact Us</Link>
            {/* <a href="contact.html">Contact Us</a> */}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
