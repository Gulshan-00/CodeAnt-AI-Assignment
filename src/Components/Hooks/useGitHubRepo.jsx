// import React from 'react'
import { useState,useEffect } from 'react';
import { GITHUB_USERNAME } from '../../utils/constants';

const useGitHubRepo = () => {
  const [githubRepo,setGithubRepo]=useState([]);
  
      const FetchGithubRepo=async ()=>{
          const data=await fetch("https://api.github.com/users/"+GITHUB_USERNAME+"/repos");
          const json=await data.json();
        //   console.log(json)
          setGithubRepo(json);
      }
  
//   console.log(githubRepo);
    
      useEffect(()=>{
          FetchGithubRepo();
      },[])
  
      return githubRepo;
}

export default useGitHubRepo;