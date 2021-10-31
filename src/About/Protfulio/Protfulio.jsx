import React from "react";
import ProAPI from "./ProtAPI";
import ProtfulioAPI from "./ProtfulioAPI";
const Protfulio = () => {
    return(
        <>
            <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-12 mx-auto">
            <div class="container mt-3 py-3 App__container home__container mx-auto">
            <h1 className="text-center about___title"><span>Rec</span>ent Work</h1>
                <div className="row home__row mt-5 pb-5">
                    {
                        ProtfulioAPI.map( (value, index) => {
                            return <ProAPI 
                                key = {index}
                                img = {value.imgsrc}
                                tit = {value.title}
                                btn = {value.btnLink}
                            />
                        })
                    }
                    
                </div>
            </div>
            </div>
          </div>   
        </div>
        </>
    )
}
export default Protfulio;