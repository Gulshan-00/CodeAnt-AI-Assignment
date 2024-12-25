import React, { useState } from "react";
import "./RepositoriesMain.css";
import logoimg from "../../assets/logo-img.png";
import Home from "../../assets/Home.png";
import Code from "../../assets/Code.png";
import Cloud from "../../assets/Cloud.png";
import Book from "../../assets/Book.png";
import Setting from "../../assets/Setting.png";
import Phone from "../../assets/Phone.png";
import Logout from "../../assets/Logout.png";
import { Link, Outlet } from "react-router-dom";
import HamBurgerIcon from "../../assets/HamBurger.png";
import HamBurger from "../HamBurger/HamBurger";
import CrossHamBurger from "../../assets/Cross-HamBurger.png"
import useGitHubDataFetch from "../Hooks/useGitHubDataFetch";

const RepositoriesMain = () => {
  
  const githubData=useGitHubDataFetch();

  // const [onclick, setOnClick] = useState("true");
  const [hamburger,setHamBurger]=useState(false);
  const hamBurgerFunction=()=>{
     setHamBurger(!hamburger);
  }
  
  
  
  
  // console.log(githubData);

  return (
    <div class="repo-container">
      <div class="left-col">
        <div class="aside">
          <div class="logo1">
            <div class="logo-nest">
            <img className="size-8" src={logoimg} alt="" />
            <h1>CodeAnt AI</h1>
            </div>
            {hamburger?<div class="hamburger-div">
              <img  class="hamburger" onClick={hamBurgerFunction}  src={CrossHamBurger} alt="img" />
            </div>:<div class="hamburger-div">
              <img  class="hamburger" onClick={hamBurgerFunction}  src={HamBurgerIcon} alt="img" />
            </div>}
          </div>
        <div class="hide-aside">
         <div class="aside-users">
            <select class="select" name="users" id="users">
              <option value="Gulshan">{githubData.login}</option>
              <option value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</option>
              <option value="Gulshan">Gulshan</option>
              <option value="Gulshan">Gulshan</option>
              <option value="More username">More username...</option>
            </select>
          </div>
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
          </div>
        </div>
        <div class="logout">
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
        <div class={hamburger?"unhide set-index":"hide"}>
           <HamBurger hamburger={hamburger} setHamBurger={setHamBurger} userName={githubData}/>
       </div>
      
      <div class="right-col">
        <div class="right-col-table">
          {/* {calanderFunction()} */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RepositoriesMain;
