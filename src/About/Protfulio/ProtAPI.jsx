import React from "react";
import { NavLink } from "react-router-dom";
const ProAPI = (props) => {
    return(
        <>
            <div className="col-md-4 col-sm-6 my-4 col-12 mx-auto">
                <div className="Single__img">
                    <img src={props.img} className="img-fluid" alt="work...."/>
                </div>
                <div className="info__project">
                    <p>{props.tit}</p>
                    <NavLink exact to={props.btn}><button className=" btn___ view_btn">View Project</button></NavLink>
                </div>
            </div>
        </>
    )
}
export default ProAPI;