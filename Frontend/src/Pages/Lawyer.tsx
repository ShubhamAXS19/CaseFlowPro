import React from 'react'
import Navbar from '../Components/Navbar'
import LawyerHero from '../assets/lawyer.jpg'
import '../styles/lawyer.css'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import { MdOutlineBusinessCenter } from "react-icons/md";
import { MdFamilyRestroom } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { GiHandcuffs } from "react-icons/gi";
import { BsBuildings } from "react-icons/bs";
import { BiMaleFemale } from "react-icons/bi";
const cardInfo1 = {
  card1:{
    icon:<MdOutlineBusinessCenter/>,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cardname:"Business Law",
   
  },
  card2:{
    icon:<MdFamilyRestroom />,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cardname:"Family Law",
   
  },
  card3:{
    icon:<BsCashCoin/>,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cardname:"Finance Law",
   
  }
  
}

const cardInfo2 = {
  card4:{
    icon:<GiHandcuffs/>,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cardname:"Criminal Law",
    
  },
  card5:{
    icon:<BsBuildings/>,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cardname:"Real Estate Law",
    
  },
  card6:{
    icon:<BiMaleFemale/>,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cardname:"Divorce Law",
    
  },
}
const Lawyer = () => {
  return (
    <div>
      <Navbar/>
      <div className="lawyer">
          <div className="lawyer-left">
            <h1>The Right Lawyer Makes All The Difference</h1>
            <p>We provide a variety of legal assistance to save from unjustice. Get the best legal assistance from our team of experts</p>
            <button>Get Started</button>
          </div>
          <div className="lawyer-right">
            <img src={LawyerHero} alt="" />
          </div>
        </div>
        <div className='prac-area'>
            <h2>Explore our wide range practice areas</h2>
            <Card cardInfo={cardInfo1}/>
            <Card cardInfo={cardInfo2}/>
        </div>
<div>our lawyer</div>
<div>review</div>
<Footer/>
    </div>
  )
}

export default Lawyer