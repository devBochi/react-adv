import { BrowserRouter, } from "react-router-dom"
import { Routes, Route, NavLink, Navigate } from "react-router-dom"
import { Suspense } from "react"

import { routes } from "./routes"

import logo from '../logo.svg'

const Navigation = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt='React Logo'/>
                <ul>
                    {
                        routes.map( route => (
                            <li key={route.to}>
                                    <NavLink to={route.to} className={({isActive})=> isActive ? 'nav-active' : ''} >{route.name}</NavLink>
                                </li>
                            )
                            )
                        }
                </ul>
            </nav>
            <Routes>
                {
                    routes.map( route => 
                        <Route key={route.path} path={route.path} element={<route.Component/>}/>
                        )
                    }
                <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default Navigation