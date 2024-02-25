import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import HomeHero from '../assets/Homepage.jpg'
import '../Styles/Home.css'
import Card from "../Components/Card"
import FAQ from "../Components/FAQ"
import Review from "../Components/Review"
import Courtroom from '../assets/courtroom.jpg'
const cardInfo1 = {
  card1:{
    icon:<img width="50" height="50" src="https://img.icons8.com/external-filled-outline-perfect-kalash/64/external-Meeting-corporate-development-filled-outline-perfect-kalash.png" alt="external-Meeting-corporate-development-filled-outline-perfect-kalash"/>,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cardname:"Legal Consulting Advice",
    
  },
  card2:{
    icon:<img width="50" height="50" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-evaluate-data-analytics-flaticons-lineal-color-flat-icons.png" alt="external-evaluate-data-analytics-flaticons-lineal-color-flat-icons"/>,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cardname:"Pyschological Evaluation",
    
  }
  
}

const cardInfo2 = {
  card3:{
    icon:<img width="50" height="50" src="https://img.icons8.com/external-others-phat-plus/64/external-business-business-outline-others-phat-plus-15.png" alt="external-business-business-outline-others-phat-plus-15"/>,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cardname:"Case Hearing Management System",
    
  },
  card4:{
    icon:<img width="50" height="50" src="https://img.icons8.com/plasticine/64/documents.png" alt="documents"/>,
    info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    cardname:"Document Drafting and Management",
    
  },
}

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="homepage">
          <div className="home-left">
            <h2>Welcome to CaseFlowPro!</h2>
            <div className="home-left-middle">
              <span></span>
              <h1>We are here to help you.</h1>
            </div>
            <p>We provide a variety of legal assistance to save from unjustice. Get the best legal assistance from our team of experts</p>
            {/* <button>Learn More</button> */}
          </div>
          <div className="home-right">
            <img src={HomeHero} alt="" />
          </div>
        </div>
        <div className="approve">
          <h1>Approved by 40+ Nations.</h1>
        </div>
          <div className="services-provide">
          <h2>Services we provide</h2>
        <Card cardInfo={cardInfo1}/>
        <Card cardInfo={cardInfo2}/>
          </div>
        <FAQ/>
        <Review/>
        <Footer/>
    </div>
  )
}

export default Home