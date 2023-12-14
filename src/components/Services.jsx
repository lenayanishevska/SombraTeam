import React from "react";

function Services () {
    let message = `It's our dream team page for Sombra practice.`;
    return (
      <section class="section-white">
 
    <div class="container">
 
        <div class="row">
       
                    <div class="col-md-12 text-center">

                          <h2 class="section-title">The Team 6 ⭐️</h2>

                          <p class="section-subtitle">{message}</p>
                          
                    </div> 
             
            <div class="col-sm-6 col-md-4">

                  <div class="team-item">
                  
                      <img src="https://i.pinimg.com/474x/19/e7/0e/19e70ea80610f8cc651846f68fab9256.jpg" class="team-img" alt="pic" />                   
                      <h3>OLENA YANISHEVSKA</h3>            
                      <div class="team-info"><p>Project Manager, UI/UX Designer ✨</p></div>
                      
                      <ul class="team-icon">
                      
                          <li><a href="#" class="twitter">
                            <i class="fa fa-twitter"></i>
                        </a></li>
                          
                          <li><a href="#" class="pinterest">
                            <i class="fa fa-pinterest"></i>
                        </a></li>
                          
                          <li><a href="#" class="facebook">
                            <i class="fa fa-facebook"></i>
                        </a></li>
                          
                          
                      </ul>
                      
                  
                </div>
            </div> 
              
            <div class="col-sm-6 col-md-4">


            </div> 
            <div class="col-sm-6 col-md-4">

    

            </div> 
        
        </div> 
    
    </div> 

    </section>
    )
}

export default Services;