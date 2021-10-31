import React from "react";
import { NavLink } from "react-router-dom";
import img1 from '../img/billah-removebg-preview (2).png';
const About = () => {
    return(
        <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-12 mx-auto">
            <div className="container mt-3 py-3 App__container home__container mx-auto">
            <h1 className="text-center about___title"><span>A</span>bout</h1>
                <div className="row home__row mt-5">
                
                    <div className="col-md-4 col-12 mx-auto">
                        <div className=" pt-5 mb-5 about__img">
                            <img src={img1} className="img-fluid" alt="admin..." />
                        </div>
                    </div>
                    <div className="col-md-7 mt-4 pb-4 pt-3 about_text col-12 mx-auto">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Molestias ab corporis, quibusdam accusantium,
                            iusto id asperiores rerum inventore omnis excepturi, autem dolore ducimus quo consequuntur nesciunt? Alias, Molestias ab corporis, quibusdam accusantium, expedita qui quisquam eaque sint quae voluptatum et iusto amet quos iure nostrum recusandae,  quidem nesciunt eum assumenda molestiae tempore deserunt perferendis repellendus?
                        </p>
                        <div className="py-3 mb-4 skill____ col-12">
                            <h1>Skill<span>'s</span></h1>
                            <div className="skill_items">
                                <div className="skill1">Html</div>
                                <div className="skill1">Css</div>
                                <div className="skill1">Javascript</div>
                                <div className="skill1">Jquery</div>
                                <div className="skill1">Bootstrap</div>
                                <div className="skill1">React</div>
                                <div className="skill1">Scss</div>
                                <div className="skill1">Node js</div>
                            </div> 
                        </div>

                        <NavLink to="/about/education"><button className="btn___ about_btn about_btn1">Educational Qualification</button></NavLink>
                        <NavLink to="/about/education"><button className="btn___ about_btn">Download CV</button></NavLink>
                    </div>
                </div>
            </div>
            </div>
          </div>   
        </div>
        </>
    )
}
export default About;