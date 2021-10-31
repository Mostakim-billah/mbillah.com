import React from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Skill from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Protfulio from "./About/Protfulio/Protfulio";
import Navbar from "./Navbar/Navbar";
import {Switch, Route} from 'react-router-dom';
import Education from "./About/Protfulio/Education";
import Footer from './Footer/Footer';
import EcommerceWork from "./About/Protfulio/EcommerceWork";
import BeautifulMosque from "./About/Protfulio/BeautifulMosque";
import Islam from "./About/Protfulio/Islam";
import Protfluliox from "./About/Protfulio/Protfulio1";
import Protflulioy from "./About/Protfulio/Protfulio2";
import Organigation from "./About/Protfulio/Organaization";
import GamingWork from "./About/Protfulio/GamingWork";
import BloodDonate from "./About/Protfulio/BlooddonateOrga";
const App = () => {
    return(
        <>


                <div className="main___wraperApp">
                <div className="buble1"></div>
                <div className="buble2"></div>
                <div className="buble3"></div>
                <div className="buble4"></div>
                <div className="buble5"></div>
                    
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/protfulio" component={Protfulio}/>
                        <Route exact path="/protfulio/ecommerce" component={EcommerceWork}/>
                        <Route exact path="/protfulio/mosque" component={BeautifulMosque}/>
                        <Route exact path="/protfulio/islam" component={Islam}/>
                        <Route exact path="/protfulio/protfluliox" component={Protfluliox}/>
                        <Route exact path="/protfulio/protflulioy" component={Protflulioy}/>
                        <Route exact path="/protfulio/organigation" component={Organigation}/>
                        <Route exact path="/protfulio/gamingWork" component={GamingWork}/>
                        <Route exact path="/protfulio/blooddonate" component={BloodDonate}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/skill" component={Skill}/>
                        <Route exact path="/contact" component={Contact}/>
                        <Route exact path="/about/education" component={Education}/>
                    </Switch>
                    <Footer />
            
                </div>
            
            
            
        </>
    )
}
export default App;