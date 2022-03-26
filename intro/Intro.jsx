import "./intro.scss"

export default function Intro() {
  return (
   
    <div className="intro" id="intro"> 
     <h2> About Me</h2>   
     <div className="wrapper">
           <div className='imgContainer'>
            <img src="assets/Me.jpg" alt="Me"   className="introImg"></img>
            </div>                         
           
            <div className="introPar">
            <p> My name is Zenash. I am a beginer Full-stock web developer with an eye for design.
            I have a passion for learning new technologies.</p>
            <p> I am looking for new avenues to share my skills and grow in the process.
            Take a look through my portfolio and see what skills I have to offer and some of the work I have 
            created so far. </p>
            <p>Feel welcome to contact me if you have questions or interests.</p>
                 
             </div>
      </div>
             
            
      </div>            
      )
}
