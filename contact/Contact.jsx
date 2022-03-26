import "./contact.scss"


export default function Contact() {
  return (  
  
   <div className="contact mt 5" id="contact">
        <h2>Contact Me!</h2>
       
             
             <form  class="row g-3" action="https://formsubmit.co/zenashchanyalew@gmail.com" method="POST">
                  <div class="col-md-6">
                    <label for="firstName" class="form-label">First Name</label>
                    <input tyype="text" class="form-control" id="firstName" required></input>
                  </div>

                  <div class="col-md-6">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input tyype="text" class="form-control" id="lastName" required></input>
                  </div>

                  <div class="col-md-d">
                    <label for="email" class="form-label">Email</label>
                    <input tyype="text" class="form-control" id="email" required></input>
                  </div>

                  <div class="col-md-12">                   
                  <label for="comments" class="form-label">Your Message</label>
                  <textarea class="form=control" id="comments" name="Your Message" rows="3"required></textarea>
                  </div>

                  <div class="col-md-12">                  
                  <button type="submitt" class="btn-primary">Submit</button>
                 </div>
                  
                  
             </form>
        </div>
       
       
      
   
  

  );
}
