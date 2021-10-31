import React, {useState} from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { NavLink } from "react-router-dom";

const Contact = () => {
    const [Data, setData] = useState({
        fName : '',
        lName : '',
        email : '',
        phone : '',
        textarea : '',
    });

    let name , value;
    const InputItems =(event) => {
        name = event.target.name;
        value = event.target.value;
        setData({ ...Data, [name]:value });
    }

    const submit = async (e) => {
        e.preventDefault();
        const {fName, lName, email, phone, textarea } = Data;
        if(fName && lName && email && phone && textarea){

       
        const res = fetch
        (
            "https://protfulio-136cc-default-rtdb.firebaseio.com/userData.json",
            {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json",
                },
                body:JSON.stringify({
                    fName, 
                    lName, 
                    email, 
                    phone, 
                    textarea,
                }),
            }
        )
        if(res){
            setData({
                fName : '',
                lName : '',
                email : '',
                phone : '',
                textarea : '',
            })
            alert('Data store');
        }else{
            alert(`data can't store!`);
        }
    }else{
            alert('Please fill Data in input fild');
        }
    }
    return(
        <>
            <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-12 mx-auto">
            <div className="container mt-3 py-3 App__container mx-auto">
            <h1 className="text-center about___title"><span>Cont</span>act me</h1>
                <div className="row home__row px-4 mt-5">
                
                    <div className="col-md-6 col-12 mx-auto">
                        <form method = "POST">
                            <div>
                        <div className="mb-3">
                        <label className="form-label" for="exampleFormControlInput1"><AccountCircleIcon className="Icon___ -"  /> First Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id = ""
                                onChange = {InputItems}
                                name = "fName"
                                value = {Data.fName}
                                autoComplete = "off"
                                 id="exampleFormControlInput1"
                                placeholder="First name"
                            />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="exampleFormControlInput1"><AccountCircleIcon className="Icon___" />  Last Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id = ""
                                onChange = {InputItems}
                                name = "lName"
                                value = {Data.lName}
                                autoComplete = "off"
                                 id="exampleFormControlInput1"
                                placeholder="Last name"
                            />
                    </div>
                    <div className="mb-3">
                        <label 
                            className="form-label" 
                            for="exampleFormControlInput1">
                                <EmailIcon 
                                    className="Icon___" 
                                />  E-mail Address
                        </label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id = ""
                                onChange = {InputItems}
                                name = "email"
                                value = {Data.email}
                                autoComplete = "off"
                                 id="exampleFormControlInput1"
                                placeholder="Email address"
                            />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" for="exampleFormControlInput1"><LocalPhoneIcon className="Icon___" />  Phone Number</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id = ""
                                onChange = {InputItems}
                                name = "phone"
                                value = {Data.phone}
                                autoComplete = "off"
                                 id="exampleFormControlInput1"
                                placeholder="Phone number"
                            />
                    </div>
                    
                    <div className="mb-3">
                    <label className="form-label" for="exampleFormControlTextarea1"><ChatBubbleIcon className="Icon___" /> Massage</label>
                    <textarea 
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        column="5" 
                        rows="5" 
                        onChange = {InputItems}
                        name = "textarea"
                        value = {Data.textarea}
                        autoComplete = "off"
                         id="exampleFormControlInput1"
                        placeholder="Type massage here...">
                    </textarea>
                    </div>
                    <button className="btn___ mt-2 btn___X about_btn" onClick = {submit}>Sent Massage</button>
                    </div>
                    </form>
                    </div>
                    <div className="col-md-6 mt-4 pb-4 pt-3 col-12 mx-auto">
                        <div className="px-4 py-2 Follow____">
                            <h1>Sent <span>massage</span> this Address : </h1>
                            <h2><EmailIcon className="follow____i" /> Email Address</h2>
                            <p>mostakimbillahn210@gmail.com</p>
                            <h2><LocalPhoneIcon className="follow____i" /> Phone Number</h2>
                            <p>+88 0184 5049 128</p>
                            <h2>Follow me:</h2>
                            <ul>
                                <li><NavLink className="Fl__icon" exact to="/"><FacebookIcon className="Follow__Icons" /></NavLink></li>
                                <li><NavLink className="Fl__icon" exact to="/"><TwitterIcon className="Follow__Icons" /></NavLink></li>
                                <li><NavLink className="Fl__icon" exact to="/"><InstagramIcon className="Follow__Icons" /></NavLink></li>
                                <li><NavLink className="Fl__icon" exact to="/"><YouTubeIcon className="Follow__Icons" /></NavLink></li>
                                <li><NavLink className="Fl__icon" exact to="/"><GitHubIcon className="Follow__Icons" /></NavLink></li>
                                <li><NavLink className="Fl__icon" exact to="/"><LinkedInIcon className="Follow__Icons" /></NavLink></li>
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
export default Contact;