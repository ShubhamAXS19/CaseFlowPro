import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import Logo from '../assets/caseflowpro.png'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav-logo">
            <Link to="/"><img src={Logo} alt="" /></Link>
        </div>
        <div className="nav-opt">
            <ul className="nav-list">
                <li className="lawyerr"><Link to="/seek-legal-assistance">Consult Lawyer</Link></li>
                <li className="doctor"><Link to="/seek-mental-assistance">Get Psych Eval</Link></li>
                <li className="educate"><Link to="/chatbot">Educate Yourself</Link></li>
                <li className="login"><Link to="/login">Login</Link></li>
                <li className="signup"><Link to="/signup"><p>Get Started </p><FaArrowRightLong /></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar