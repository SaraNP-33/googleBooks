import React from "react";
import {Container} from "../Grid"
import "./style.css";

function Footer() {
  return (

    <div className="footer">
      <Container>
        <div className="wrapper row">
        <p className = "builtBy"> Built by © Lindsey Tummond | 
          Niasha Abaglo-Grant |  
          Sara Neves Pereira |  
          Jennifer Kruk
        </p>
        </div>
      </Container>
    </div>
    
  );
}

export default Footer;