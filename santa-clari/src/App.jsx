import About from "./Component/About/About"
import Contact from "./Component/Contact/Contact"
import Footer from "./Component/Footer/Footer"
import Navbar from "./Component/Navbar/Navbar"
import OurProcess from "./Component/Our-Process/OurProcess"
import Sprits from "./Component/Our-Sprits/Sprits"
import VisitorsOpinion from "./Component/Visitors-opinion/VisitorsOpinion"

function App() {

  return (
    <>



      <Navbar></Navbar>
      <About ></About>
      <Sprits ></Sprits>
      <OurProcess></OurProcess>
      <VisitorsOpinion></VisitorsOpinion>
      <Contact></Contact>
      <Footer></Footer>

    </>
  )
}

export default App
