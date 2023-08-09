import React from 'react'

import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${props.mode === 'light'? 'dark':'light' }` } to="/">{props.heading}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
         <Link className={`nav-link  text-${props.mode === 'light'? 'dark':'light' }`} to="/about">{props.about}</Link>
      
        </li>
        
      </ul>
      {/* <div className="form-check form-switch mx-3">
  <input className="form-check-input" type="checkbox" onClick={props.togglemode3} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === 'light'? 'dark':'light' }`} htmlFor="flexSwitchCheckDefault" >Dark</label>
  </div>

      <div className="form-check form-switch mx-3">
  <input className="form-check-input" type="checkbox" onClick={props.togglemode2} role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === 'light'? 'dark':'light' }`} htmlFor="flexSwitchCheckDefault" >Red</label>
  
</div> */}


      <div className="form-check form-switch mx-3">
  <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" aria-checked="true" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === 'light'? 'dark':'light' }`} htmlFor="flexSwitchCheckDefault" >DarkMode</label>
  
</div>
    
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
