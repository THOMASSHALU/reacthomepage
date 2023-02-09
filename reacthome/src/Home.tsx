import { Link } from 'react-router-dom';
import "./Home.css";
import React from 'react';


function Home() {
  
  
  return (
    <div className="home" >

            
<div>
        <article className="cardc">
            <header className="card__thumbc">
              
            </header>
            
            <div className="card__bodyc">
                <h2 className="card__titlec"><a href="#">Camera</a></h2>
               
              
                <Link to="/login"><button className="buttonc"><span>Click Here</span></button> </Link>
                
            </div>
           
        </article>
    </div>

   

    </div>
    
  );
}

export default Home;
