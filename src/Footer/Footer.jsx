import React from 'react';
import { NavLink } from "react-router-dom";
import FacebookOutlinedIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
const Footer = () => {
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-12 mx-auto">
                    <div className="text-center pt-4 footer____">
                        <ul>
                            <li><NavLink className="footer__icon" to=""><FacebookOutlinedIcon className="f__icon" /></NavLink></li>
                            <li><NavLink className="footer__icon" to=""><TwitterIcon className="f__icon" /></NavLink></li>
                            <li><NavLink className="footer__icon" to=""><LinkedInIcon className="f__icon" /></NavLink></li>
                            <li><NavLink className="footer__icon" to=""><YouTubeIcon className="f__icon" /></NavLink></li>
                        </ul>
                        <p className="text-center py-2">© copyright by mostakim billah</p>
                    </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;