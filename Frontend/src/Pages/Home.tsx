import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import HomeHero from '../assets/Homepage.jpg'
import '../Styles/Home.css'
import Card from "../Components/Card"
import FAQ from "../Components/FAQ"
import Review from "../Components/Review"

const cardInfo1 = {
  card1:{
    icon:"card1",
    info:"card1",
    cardname:"card1",
    button:"card1"
  },
  card2:{
    icon:"card1",
    info:"card1",
    cardname:"card1",
    button:"card1"
  }
  
}

const cardInfo2 = {
  card3:{
    icon:"card1",
    info:"card1",
    cardname:"card1",
    button:"card1"
  },
  card4:{
    icon:"card1",
    info:"card1",
    cardname:"card1",
    button:"card1"
  },
}

const Home = () => {
  return (
    <div>
        <Navbar/>
        <div className="homepage">
          <div className="home-left">
            <h2>Welcome to our website!</h2>
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
        <Card cardInfo={cardInfo1}/>
        <Card cardInfo={cardInfo2}/>
        <FAQ/>
        <Review/>
        <Footer/>
    </div>
  )
}

export default Home