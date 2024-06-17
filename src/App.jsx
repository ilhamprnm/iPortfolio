import "./styles/App.css"
import Header from "./Header.jsx"
import Home from "./Home.jsx"
import About from "./About.jsx"
import Projects from "./Projects.jsx"
import Contacts from "./Contacts.jsx"
import Footer from "./Footer.jsx"
// import Loader from "./Loader.jsx"


export default function App () {


  return (
    <>
      {/* <Loader /> */}
      <Header />
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </>
  )
}