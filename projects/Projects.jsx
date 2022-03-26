import "./projects.scss"

export default function Projects() {
  return (
<div className="projects" id="projects">
<h2>Projects</h2>
<h6> Here's some of my recent works</h6>
<div className='wrapper'>
<div className="cardWrapper">
      <div className="card">
      <div className="cardBody">
            <img className="cardImg" src="assets/addisAbaba.jpg" alt=""></img>
            <h2 className="cardTitle">Addis Ababa Website</h2>
            <p className="cardDescription"></p>
            <button className="cardBtn">View Website</button>
      </div>
      </div>



      <div className="card">
      <div className="cardBody">
            <img className="cardImg" src="assets/coffee.jpg" alt=""></img>
            <h2 className="cardTitle">Origin of Coffee Website</h2>
            <p className="cardDescription"></p>
            <button className="cardBtn">View Website</button>
      </div>
      </div>


      <div className="card">
      <div className="cardBody">
            <img className="cardImg" src="assets/Biltmore.jpg" alt=""></img>
            <h2 className="cardTitle">Biltmore Companion App</h2>
            <p className="cardDescription">Mobile Web design </p>
            <button className="cardBtn">View Website</button>
      </div>
      </div>


      <div className="card">
      <div className="cardBody">
            <img className="cardImg" src="assets/peakFitness.jpg" alt=""></img>
            <h2 className="cardTitle">Peak Fitness</h2>
            <p className="cardDescription"> </p>
            <button className="cardBtn">View Website</button>
      </div>
      </div>

                       
            
    
</div>
</div>
</div>
  )
}
