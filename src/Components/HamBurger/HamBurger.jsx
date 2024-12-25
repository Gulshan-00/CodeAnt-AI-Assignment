import React from 'react'
import { Link } from 'react-router-dom';
import Home from "../../assets/Home.png";
import Code from "../../assets/Code.png";
import Cloud from "../../assets/Cloud.png";
import Book from "../../assets/Book.png";
import Setting from "../../assets/Setting.png";
import Phone from "../../assets/Phone.png";
import Logout from "../../assets/Logout.png";

const HamBurger = (props) => {

  // const [hamBurger,setHamBurger]=useState(false)
  // const closeHamburger = () => {
  //   setHamBurger(!hamburger);
  // };
  
const {setHamBurger,userName}=props;
// console.log(hamburger);

const hideFuntion=(hamburger)=>{
  setHamBurger(!hamburger);
}

  return (
    <div >
        <div class="aside-users">
            <select class="select" name="users" id="users">
              <option value="UtkarshDhairyaPanwar">{userName?.login}</option>
              <option value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</option>
              <option value="Gulshan">Gulshan</option>
              <option value="More username">More username...</option>
            </select>
          </div>
          <div onClick={hideFuntion}>
          <div>
            <Link to={"/repositories"}>
              <button class="aside-button">
                <img class="mini-logo" src={Home} alt="home-img" />
                <p>Repositories</p>
              </button>
            </Link>
          </div>
          <div>
            <Link to={"/repositories/aicodereview"}>
              <button class="aside-button">
                <img class="mini-logo" src={Code} alt="home-img" />
                <p>AI Code Review</p>
              </button>
            </Link>
          </div>
          <div>
            <Link to={"/repositories/cloudsecurity"}>
              <button class="aside-button">
                <img class="mini-logo" src={Cloud} alt="home-img" />
                <p>Cloud Security</p>
              </button>
            </Link>
          </div>
          <div>
          <Link to={"/repositories/howtouse"}>
            <button class="aside-button">
              <img class="mini-logo" src={Book} alt="home-img" />
              <p>How to Use</p>
            </button></Link>
          </div>
          <div>
            <Link to={"/repositories/settings"}>
              {" "}
              <button class="aside-button">
                <img class="mini-logo" src={Setting} alt="home-img" />
                <p>Settings</p>
              </button>
            </Link>
          </div>
          <div>
          <Link to={"/repositories/support"}>
            <button class="aside-button">
              <img class="mini-logo" src={Phone} alt="home-img" />
              <p>Support</p>
            </button></Link>
          </div>
          <div>
            <Link to={"/signup"}>
              <button class="aside-button">
                <img class="mini-logo" src={Logout} alt="home-img" />
                <p>Logout</p>
              </button>
            </Link>
            
          </div>
          </div>
    </div>
  )
}

export default HamBurger;