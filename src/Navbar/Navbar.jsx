import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <div className="container-fluid main__wraper">
          <div className="row">
            <div className="col-md-10 col-11 mx-auto">
<nav class="navbar navbar-expand-lg px-0 navbar-light">
  <div class="container mx-auto">
                <NavLink to="/" class="navbar-brand py-3 logo___" ><span>M</span>billah</NavLink>
    <button 
      class="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" 
      aria-controls="navbarSupportedContent" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
      >
      <span class="navbar-toggler-icon"></span>

    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav py-2 ms-auto mb-2 mb-lg-0">
        <li className="nav-item py-2 px-2">
          <NavLink exact activeClassName="NavLinkActive" className="nav-link nav1 active" to="/">Home</NavLink>
        </li>
        <li className="nav-item py-2 px-2">
          <NavLink exact activeClassName="NavLinkActive" className="nav-link nav1 active" to="/protfulio">Protfulio</NavLink>
        </li>
        <li className="nav-item py-2 px-2">
          <NavLink exact activeClassName="NavLinkActive" className="nav-link nav1 active" to="/about">About</NavLink>
        </li>
        <li className="nav-item py-2 px-2">
          <NavLink exact activeClassName="NavLinkActive" className="nav-link nav1 active" to="/skill">Skill</NavLink>
        </li>
        <li className="nav-item py-2 px-2">
          <NavLink exact activeClassName="NavLinkActive" className="nav-link nav1 active" to="/contact">Contact</NavLink>
        </li> 
      </ul>
    </div>
  </div>
</nav>
            </div>
          </div>   
        </div>
        </>
    )
}
export default Navbar;