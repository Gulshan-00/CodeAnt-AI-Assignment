import React from 'react';
import { useRouteError } from 'react-router-dom';
import logo from "../../assets/logo-img.png";

const ErrorPage = () => {

    const error=useRouteError();
    // console.log(error);

  return (
    <div className='flex items-center justify-center gap-10 h-screen'>
        <div className='flex flex-col justify-center items-center'>
        <img className='size-28' src={logo} alt="logo-img" />
        <h1 className='text-2xl font-extrabold'>CodeAnt AI</h1>
        </div>
        <div className='flex flex-col gap-2'>
        <h1 className='text-5xl font-bold'>Oops!! ERROR...</h1>
        <p className='text-xl font-bold'>{error.status}:&nbsp;{error.statusText}</p>
        <p className='text-xl font-bold text-red-600'>Error Message:&nbsp;{error.error.message}</p>
        </div>
        

    </div>
  )
}

export default ErrorPage