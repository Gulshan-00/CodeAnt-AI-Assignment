import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from "../Components/LoginScreen/SignIn"
import RepositoriesMain from './Repositories/RepositoriesMain'
import Settings from './Repositories/Settings'
import CloudSecurity from './Repositories/CloudSecurity'
import AiCodeReview from './Repositories/AiCodeReview'
import ErrorPage from './ErrorPage/ErrorPage'
import RepoCalendar from './Repositories/RepoCalendar'

const MainRoutes = () => {

    const appRouter= createBrowserRouter([
        {
             path:"/",
             element:<SignIn/>,
             errorElement:<ErrorPage/>,
        },
        {
            path:"/signup",
            element:<SignIn/>,
        },
        {
            path:"/repositories",
            element:<RepositoriesMain/>,
            children:[
                {
                   path:"/repositories/",
                   element:<RepoCalendar/>
                },
                {
                    path:"/repositories/aicodereview",
                    element:<AiCodeReview/>,
                },
                {
                    path:"/repositories/cloudsecurity",
                    element:<CloudSecurity/>,
                },
                {
                    path:"/repositories/settings",
                    element:<Settings/>,
                },
            ]
        },
        
        
    ])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default MainRoutes;