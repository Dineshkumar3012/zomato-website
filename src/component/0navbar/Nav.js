import "./Nav.css"
import { FaLocationDot } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";







import React from 'react'

const Nav = () => {
  return (
    <div>
        <section id="borderContainer">
            <div className="container">
                <div className="row">
                    <div className="col3 right">
                        <div className="logo-sec">
                           <img src="./img/imglogo.avif" alt="img.avif"/>
                        </div>
                    </div>
                    <div className="col7 left">
                        <div className="input-sec">
                            <b className="location1"><FaLocationDot /></b>
                            <input type="location" id="location" name="location" placeholder="Location" />
                            <b className="arrow"><BiSolidDownArrow/></b>
                            <b className="search1"><LuSearch /></b>
                            <input type="search" id="search" name="search" placeholder="search for Resturants, cuisine, or a dish" />
                        </div>
                    </div>    
                    <div className="col2 center">
                        <div className="login_sec center">
                            <img src="./img/person.avif"  alt="img.avif"/>
                            <b className="center">Dinesh</b><b className="arrow1"><FaChevronDown/></b>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}


export default Nav;