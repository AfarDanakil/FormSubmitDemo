import "./resume.scss"
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';


export default function Resume() {
  return (
    <div className ="resume" id="resume">        
         <h2> My Resume</h2> 

            <div className="wrapper">           
                  <div className="par">
                      <p> I look forward to beginning my journey as 
                        a junior web developer and continue to learn new skills.</p>   
                  </div>                                             
                  <div className="resumeImgContainer">
                        <img className="resumeImg" src="assets/myResume.jpg" alt="Resume"></img>
                  </div>
                  
                        <a href ="assets/My Resume.pdf" download="myResume.pdf" className="resumePdf"> Download Resume
                        <PictureAsPdfOutlinedIcon className="icon"/></a>
             </div>
        </div>
    
  )
}
