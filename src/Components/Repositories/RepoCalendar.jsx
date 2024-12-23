import React from 'react'
import SearchIcon from "../../assets/SearchIcon.png";
import Reload from "../../assets/Reload.png";
import Plus from "../../assets/Plus.png";
import ListRepo from './ListRepo';
import "./RepositoriesMain.css";


const RepoCalendar = () => {

     //For Reloading the page
     const reloadPage=()=>{
        window.location.reload();
     }

     //demo array to display the repos.
     const arr=[1,1,1,1,1,1,1,1,1,1]

  return (
    <>
         <div class="header">
            <div class="input">
              <h1>Repositories</h1>
              <p>33 total repositories</p>
              <div class="search-icon">
                <img className="size-4 -ml-8" src={SearchIcon} alt="" />
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search Repositories"
                />
              </div>
            </div>
            <div class="btn">
              <button class="aside-button all-border" onClick={reloadPage}>
                <img class="mini-logo" src={Reload} alt="home-img" />
                <p>Refresh All</p>
              </button>
              <button class="aside-button all-border">
                <img class="mini-logo" src={Plus} alt="home-img" />
                <p>Add Repository</p>
              </button>
            </div>
          </div>
          <div class="main">
            {arr.map((r,index) => (
              <ListRepo key={index}/>
            ))}
            
          </div>
    </>
  )
}

export default RepoCalendar;