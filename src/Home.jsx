import "./styles/Home.css"
import profileImage from "./images/pp.jpg"

export default function Home () {
  return (
    <section className="home-section" id="home">
      <div className="image-cont">
        <img src={profileImage} alt="" />
      </div>
      <div className="desc-cont">
        <div>
          <h2>Hai, i'm Muhammad Ilham Purnama</h2>
        </div>
        <div>
          <p>Now, i'm improving my skills in web development. I created this website as a medium for me to show my abilities in creating a websites.</p>
        </div>
      </div>

    </section>
      
  )
}