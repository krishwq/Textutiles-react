import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" onClick={()=>{document.title="Case Converter-Home"}}>
                   Home
                </Link>
                {/* <a className="nav-link active" aria-current="page" href="#" onClick={()=>{document.title="Case Converter-Home"}}>
                   Home
                </a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/About" onClick={()=>{document.title="Case Converter-About"}}>
                  {props.title}
                </Link>
                {/* <a className="nav-link active" href="#" onClick={()=>{document.title="Case Converter-About"}}>
                  {props.title}
                </a> */}
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle active"
                  to="/education"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Education
                </Link>
                {/* <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Education
                </a> */}
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Primary Education
                    </Link>
                    {/* <a className="dropdown-item" href="#">
                      Primary Education
                    </a> */}
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      School Education
                    </Link>
                     {/* <a className="dropdown-item" href="#">
                      School Education
                    </a> */}
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Higher Education
                    </Link>
                     {/* <a className="dropdown-item" href="#">
                     Higher Education
                    </a> */}
                  </li>
                </ul>
              </li>
            </ul>

            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn" type="submit">
                Search
              </button>
            </form> */}
            <div className="d-flex">
              <div className="bg-primary rounded-circle mx-2" style={{height:'20px',width:'20px',cursor:'pointer'}} onClick={()=>{props.toggleBtn('primary')}}></div>
              <div className="bg-danger rounded-circle mx-2" style={{height:'20px',width:'20px',cursor:'pointer'}} onClick={()=>{props.toggleBtn('danger')}}></div>
              <div className="bg-success rounded-circle mx-2" style={{height:'20px',width:'20px',cursor:'pointer'}} onClick={()=>{props.toggleBtn('success')}}></div>
              <div className="bg-warning rounded-circle mx-2" style={{height:'20px',width:'20px',cursor:'pointer'}} onClick={()=>{props.toggleBtn('warning')}}></div>
              <div className="bg-info rounded-circle mx-2" style={{height:'20px',width:'20px',cursor:'pointer'}} onClick={()=>{props.toggleBtn('info')}}></div>
            </div>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={()=>{props.toggleBtn(null)}}
                style={{cursor:'pointer'}}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode==='light'?'Enable Darkmode':'Enable Lightmode'}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
