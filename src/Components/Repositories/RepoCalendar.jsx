import React, { useEffect, useState } from 'react'
import SearchIcon from "../../assets/SearchIcon.png";
import Reload from "../../assets/Reload.png";
import Plus from "../../assets/Plus.png";
import ListRepo from './ListRepo';
import "./RepositoriesMain.css";
import useGitHubRepo from '../Hooks/useGitHubRepo';


const RepoCalendar = () => {
  const [searchText,setSearchText]=useState("");
  const [filteredUser, setFilteredUser]=useState([]);
     //For Reloading the page
     const reloadPage=()=>{
        window.location.reload();
     }

     //demo array to display the repos.
    //  const arr=[1,1,1,1,1,1,1,1,1,1]
 
     const githubRepo=useGitHubRepo();

    useEffect(()=>{
      setFilteredUser(githubRepo);
    },[githubRepo])
     
    //  console.log(githubRepo);
    // console.log(searchText);

    //search functionality
    const handleSearch=(e)=>{
      const text=e.target.value;
        setSearchText(text);
        const filtered = githubRepo.filter(user => 
          user.name.toLowerCase().includes(text.toLowerCase())
        );

        setFilteredUser(filtered);
      
    }

  return (
    <>
         <div class="header">
            <div class="input">
              <h1>Repositories</h1>
              <p>{githubRepo.length} total repositories</p>
              <div class="search-icon">
                <img className="size-4 -ml-8" src={SearchIcon} alt="" />
                <input
                  value={searchText}
                  onChange={handleSearch}
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
            {filteredUser.map((repo,index) => (
              <ListRepo key={index} github={repo} />
            ))}
            
          </div>
    </>
  )
}

export default RepoCalendar;