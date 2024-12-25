import { useEffect, useState } from 'react'
import { GITHUB_USERNAME } from '../../utils/constants';

const useGitHubDataFetch = () => {
//    console.log(GITHUB_USERNAME);
    const [githubData,setGithubData]=useState([]);

    const FetchGithubData=async ()=>{
        const data=await fetch("https://api.github.com/users/"+GITHUB_USERNAME);
        const json=await data.json();
        // console.log(json)
        setGithubData(json);
    }


  
    useEffect(()=>{
        FetchGithubData();
    },[])

    return githubData;

}

export default useGitHubDataFetch;