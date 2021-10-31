import React from "react";
import img1 from '../../img/Image 1.jpg';
const EcommerceWork = () => {
    return(
        <>
            <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-12 mx-auto">
            <div class="container mt-3 py-3 App__container home__container mx-auto">
            <h1 className="text-center about___title"><span>E-</span>commerce</h1>
                <div className="row home__row mt-5">
                     <div className="col-md-12 col-12 mx-auto">
                         <div className="img_thumbnail">
                            <img src={img1} alt="ecommerce.." className="img-fluid" />

                            <h1 className="pt-5 pb-4"><span>E-commerce</span> Website For Business </h1>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Natus veniam mollitia explicabo consectetur cupiditate dolorem labore fugit, ab tenetur consequuntur et soluta officiis quas tempora placeat ea sequi minima repellat vitae unde laboriosam. 
                                Voluptatem dicta, molestiae assumenda pariatur doloribus, sapiente, sit voluptate ratione nobis reprehenderit velit nemo vitae magni illo molestias! Hic ipsam itaque dolores iste. Vel unde magnam voluptatibus pariatur ad optio sit autem ex cupiditate, sapiente eum, nobis dignissimos enim sed harum atque accusantium asperiores dolore minus error. 
                                Qui tenetur porro earum aspernatur labore sapiente numquam eos. Exercitationem ipsum iusto officia autem neque odio suscipit? Et in a, quia soluta laboriosam repellat perferendis ipsam modi molestiae ab voluptatem qui ad debitis quam voluptates, adipisci quod, voluptate quis eveniet illum! 
                            </p>
                            <ul>
                                <li>Create time: <span>15 Jul 2021</span></li>
                                <li>Tecnology use:<span> HTML5, CSS3, Bootstrap, javascrip, jQuery</span></li>
                                <li>Role: <span>Frontend</span></li>
                                <li>Visite online: <span>www.___________.com</span></li>
                            </ul>
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
export default EcommerceWork;