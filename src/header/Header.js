import React from 'react';
import '../index.css';
import { Link } from "react-router-dom";

class Header extends React.Component{

  render(){
    return(
      <div class="header">
        <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
            <Link to={`/`} class="pure-menu-heading" href="">IBAN</Link>

            <ul class="pure-menu-list">
                <li class="pure-menu-item pure-menu-selected"><a href="#" class="pure-menu-link">Home</a></li>
                <li class="pure-menu-item"><a href="#" class="pure-menu-link">Alumni</a></li>
                <li class="pure-menu-item"><Link to={`/signup`} class="pure-menu-link">Sign Up</Link></li>
            </ul>
        </div>
      </div>
    )
  }
}

export default Header;