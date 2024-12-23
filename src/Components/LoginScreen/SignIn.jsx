import React, { useState } from "react";
import "./SignIn.css";
import Azure from "../../assets/Azure.png";
import Bitbucket from "../../assets/Bitbucket.png";
import Github from "../../assets/Github.png";
import GitLab from "../../assets/GitLab.png";
import logoimg from "../../assets/logo-img.png";
import LeftBox from "./LeftBox";
import KeyIcon from "../../assets/KeyIcon.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [toggle, setToggle] = useState("True");

  const toggleSAAS = () => {
    setToggle(true);
  };

  const toggleSelf = () => {
    setToggle(false);
  };

  return (
    <div class="container">
      <div class="left-container">
        <LeftBox />
      </div>

      <div class="right-container">
        <div class="right-c-box1">
          <div class="logo">
            <img className="size-8" src={logoimg} alt="" />
            <h1>CodeAnt AI</h1>
          </div>
          <div>
            <h1 className="main-heading text-2xl font-extrabold text-black flex justify-center">
              Welcome to CodeAnt AI
            </h1>
          </div>
          <div class={"buttons"}>
            <button onClick={toggleSAAS} class={toggle && "fixedcolor"}>
              SAAS
            </button>
            <button onClick={toggleSelf} class={!toggle && "fixedcolor"}>
              Self Hosted
            </button>
          </div>
        </div>
        {toggle && (
          <div class="right-c-box2">
            <Link to={"/repositories"}>
              <button>
                <p>
                  <img src={Github} alt="" />
                  &nbsp;Sign in with Github
                </p>
              </button>
            </Link>
            <Link to={"/repositories"}>
              <button>
                <p>
                  <img src={Bitbucket} alt="" />
                  &nbsp;Sign in with Bitbucket
                </p>
              </button>
            </Link>
            <Link to={"/repositories"}>
              <button>
                <p>
                  <img src={Azure} alt="" />
                  &nbsp;Sign in with Azure Devops
                </p>
              </button>
            </Link>
            <Link to={"/repositories"}>
              <button>
                <p>
                  <img src={GitLab} alt="" />
                  &nbsp;Sign in with GitLab
                </p>
              </button>
            </Link>
          </div>
        )}
        {!toggle && (
          <div class="right-c-box2">
            <Link to={"/repositories"}>
              <button>
                <p>
                  <img src={Github} alt="" />
                  &nbsp;Self Hosted GitLab
                </p>
              </button>
            </Link>
            <Link to={"/repositories"}>
              <button>
                <p>
                  <img src={KeyIcon} alt="" />
                  &nbsp;Sign in with SSO
                </p>
              </button>
            </Link>
          </div>
        )}
        <p className="policy text-[13px] text-center mt-4">
          By signing up you agree to the <b>Privacy Policy</b>.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
