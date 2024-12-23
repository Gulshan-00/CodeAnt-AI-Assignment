import React from 'react';
import "./RepositoriesMain.css";
import Ellipse from "../../assets/Ellipse.png";
import Database from "../../assets/Database.png";

const ListRepo = () => {
  return (
    <div class="mainrepo">
        <div class="headingrepo">
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
        </div>
    </div>
  )
}

export default ListRepo;