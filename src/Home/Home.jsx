import React from "react";
import { NavLink } from "react-router-dom";
import img1 from '../img/billah-removebg-preview (2).png';
import Protfulio from "../About/Protfulio/Protfulio";
const Home = () => {
    return(
        <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-12 mx-auto">
            <div class="container mt-3 py-5 App__container home__container mx-auto">
                <div className="row home__row px-5">
                    <div className="col-md-6 py-3 col-12 home_text mx-auto">
                        
                        <h1>Hello! I,m <br/><span>Mostakim</span> Billah</h1>
                        <h2>Front-end web developer...</h2>
                        <NavLink exact to="/about"><button className="btn___">more about me</button></NavLink>
                    
                    </div>
                    <div className="col-md-5 col-12 mx-auto d-flex align-items-center justify-content-center admin__img">
                        <div className=" my-5 img__box">
                            <img src={img1} className="img-fluid" alt="admin..." />
                        </div>
                    </div>
                   
                </div>
            </div>
            
            </div>
          </div> 
        </div>
        </>
    )
}
export default Home;