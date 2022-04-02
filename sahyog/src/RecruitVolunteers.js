import React from 'react'
import "./styles/RecruitVolunteers.css";
import  Navbar from "./components/Navbar/Navbar.js"
import puzzle from "./assets/puzzle.jpg";
import we from "./assets/we.jpg";
import collab from "./assets/collab.jpg";
import recruit from "./assets/recruit.png";
import search from "./assets/search.png"
const RecruitVolunteers = () => {
  return (
    
    <div class="bod">
        <div>
       <Navbar/>
       </div>
       <header class="masthead text-center text-white" id="back" >
            <div class="masthead-content">
            
                <div class="container px-5" id="place1">
                   
                <img class="img-fluid rounded-circle" id="img4" src={search} alt="..." />
                  
                </div>
            </div>
            <div class="bg-circle-1 bg-circle"></div>
            <div class="bg-circle-2 bg-circle"></div>
            <div class="bg-circle-3 bg-circle"></div>
            <div class="bg-circle-4 bg-circle"></div>
        </header>
        <section id="scroll">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img class="img-fluid rounded-circle" id="img1" src={puzzle} alt="..." /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">For those about to rock...</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
        <section class="page-section" id="services">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading " id="steps">Follow these simple steps<i  id="laugh" class="fa-solid fa-face-laugh"/></h2>
                    <br></br>
                    {/* <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                </div>
                <div class="row text-center" id="service">
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary" id="circle"></i>
                            <i class="fas fa-user fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Create Profile</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary" id="circle"></i>
                            <i class="fas fa-sticky-note fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3"><span class="to">Post </span> Opportunities</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-4">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary" id="circle"></i>
                            <i class="fas fa-check fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3" id="rec">Ready <br></br>to Recruit</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <section id="scroll">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img class="img-fluid rounded-circle" id="img1" src={puzzle} alt="..." /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">For those about to rock...</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        <section>
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="p-5"><img class="img-fluid rounded-circle" src={we} id="img2" alt="..." /></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <h2 class="display-4">We salute you!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <section>
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img class="img-fluid rounded-circle" id="img3" src={collab} alt="..." /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2 class="display-4">Let there be rock!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer class="py-5" id="footer">
            <div class="container px-5"><p class="m-0 text-center text-white small">Copyright &copy; Sahyog</p></div>
        </footer>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
       
        <script src="js/scripts.js"></script>
     
       
    </div>
   


  )
}

export default RecruitVolunteers;