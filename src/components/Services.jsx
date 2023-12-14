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
                  
                </div>
            </div> 
              
            <div class="col-sm-6 col-md-4">
            <div class="team-item">
                  
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYuanYTxxSHP8tIgVAyBFZ3rUGGVJJaAipIA&usqp=CAU" class="team-img" alt="pic" />                   
                  <h3>ANDRIY YAVORSKUY</h3>            
                  <div class="team-info"><p>Backend Developer</p></div>

            </div>

            </div> 
            <div class="col-sm-6 col-md-4">
                <div class="team-item">
                  
                      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fzefirka.net%2F2022%2F06%2F13%2Fmilye-kotiki-zaryazhayut-pozitivom-na-snimkax%2F&psig=AOvVaw0TJY7cb5QXc-ZKtUZutBKY&ust=1702645801957000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDd-IiAj4MDFQAAAAAdAAAAABAR" class="team-img" alt="pic" />                   
                      <h3>MYKOLA SHARSHATKIN</h3>            
                      <div class="team-info"><p>QA Engineer</p></div>

                </div>
            </div> 
        
        </div> 
    
    </div> 

    </section>
    )
}

export default Services;