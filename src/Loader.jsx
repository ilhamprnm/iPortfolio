import "./styles/Loader.css"

export default function Loader () {

  window.addEventListener("load", () => {
    const loader = document.querySelector('.loader-layer');

    loader.classList.add('loader-hidden');

  })

  return (
    <div className="loader-layer">
      <div className="loader"></div>
    </div>
  )
  
}