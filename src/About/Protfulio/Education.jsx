import React from "react";
import { NavLink } from "react-router-dom";
const Education = () => {
    return(
        <>
             <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-12 mx-auto">
            <div class="container mt-3 py-3 App__container home__container mx-auto">
            <h1 className="text-center about___title"><span>E</span>ducational Qualification</h1>
                <div className="row home__row mt-5">
                
                    <div className="col-md-5 col-12 mx-auto">
                    <div className="Document__wraper">
                        <div className="Edu__document">
                            <span>2012 - 2013</span>
                            <h4>PSC -<strong> Dilalpara Dakhil Madrasha</strong></h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet architecto!</p>
                        </div>
                        <div className="Edu__document">
                            <span>2015 - 2016</span>
                            <h4>JSC -<strong> Dilalpara Dakhil Madrasha</strong></h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet architecto!</p>
                        </div>
                        <div className="Edu__document">
                            <span>2017 - 2018</span>
                            <h4>SSC -<strong> Chandiful Model Height School</strong></h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet architecto!</p>
                        </div>
                    </div>
                        
                    </div>
                    <div className="col-md-5 mt-4 py-3 col-12 mx-auto">
                        <h1 className="text-center dev__color"><span>Front-end</span> Development</h1>
                        <div className="Document__wraper">
                            <div className="Edu__document">
                                <span>2020 - 20201</span>
                                <h4>YT -<strong> Youtube</strong></h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, suscipit obcaecati. A nulla illo alias?</p>
                            </div>
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
export default Education;