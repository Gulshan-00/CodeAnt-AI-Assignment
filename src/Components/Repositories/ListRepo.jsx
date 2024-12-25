import React from 'react';
import "./RepositoriesMain.css";
import Ellipse from "../../assets/Ellipse.png";
import Database from "../../assets/Database.png";
import { formatDistanceToNow } from 'date-fns';

const ListRepo = (props) => {

    const {github}=props;
    // console.log(github);

  return (
    <div class="mainrepo">
        <div class="headingrepo">
            <h1>{github?.name}</h1>
            <p>{github?.visibility}</p>
        </div>
        <div class="description">
            <div className='flex gap-2 items-center'>
                <p>{github.language}</p>
                <img className='size-2' src={Ellipse} alt="" />
            </div>
            <div className='flex gap-2 items-center'>
                <img className='size-3' src={Database} alt="" />
                <p>{github.size} KB</p>
            </div>
            <p><span>{formatDistanceToNow(new Date(github?.updated_at), { addSuffix: true }).replace("about","")}</span></p>
        </div>
        {/* <div class="headingrepo">
            <h1>design-system</h1>
            <p>public</p>
        </div>
        <div class="description">
            <div className='flex gap-2 items-center'>
                <p>React</p>
                <img className='size-2' src={Ellipse} alt="" />
            </div>
            <div className='flex gap-2 items-center'>
                <img className='size-3' src={Database} alt="" />
                <p>7320 KB</p>
            </div>
            <p>Updated 1 day ago</p>
        </div> */}
    </div>
  )
}

export default ListRepo;