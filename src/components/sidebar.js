import React from "react"
import "../styles/style.css"
import search from "../styles/search.png"


const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        {/* <!-- insert your sidebar items here --> */}
        <h3>Latest News</h3>
        <h4>New Website Launched</h4>
        <h5>August 1st, 2014</h5>
        <p>
          2014 sees the redesign of our website. Take a look around and let us
          know what you think.
          <br />
          <a href="#">Read more</a>
        </p>
        <p></p>
        <h4>New Website Launched</h4>
        <h5>August 1st, 2014</h5>
        <p>
          2014 sees the redesign of our website. Take a look around and let us
          know what you think.
          <br />
          <a href="#">Read more</a>
        </p>
        <h3>Useful Links</h3>
        <ul>
          <li>
            <a href="#">link 1</a>
          </li>
          <li>
            <a href="#">link 2</a>
          </li>
          <li>
            <a href="#">link 3</a>
          </li>
          <li>
            <a href="#">link 4</a>
          </li>
        </ul>
        <h3>Search</h3>
        <form id="search_form">
          <p>
            <input
              className="search"
              type="text"
              name="search_field"
              value="Enter keywords....."
            />
            <input
              name="search"
              type="image"
              style={{border: '0', margin: '0 0 -9px 5px;'}}
              src={search}
              alt="Search"
              title="Search"
            />
          </p>
        </form> 
      </div>
    </div>
  )
}

export default Sidebar
