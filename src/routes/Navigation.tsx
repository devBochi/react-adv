import { BrowserRouter } from "react-router-dom"
import { Routes, Route, NavLink, Navigate } from "react-router-dom"
import {LazyOne, LazyThree, LazyTwo} from '../01-lazyload/pages'

import logo from '../logo.svg'

const Navigation = () => {
  return (
      <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt='React Logo'/>
                <ul>
                    <li>
                        <NavLink to='/lazy1' className={({isActive})=> isActive ? 'nav-active' : ''}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/lazy2' className={({isActive})=> isActive ? 'nav-active' : ''}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/lazy3' className={({isActive})=> isActive ? 'nav-active' : ''}>Users</NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="lazy1" element={<LazyOne />}/>
                <Route path="lazy2" element={<LazyTwo />}/>
                <Route path="lazy3" element={<LazyThree />}/>
                <Route path="/*" element={<Navigate to='/lazy1' replace/>}/>
            </Routes>
        </div>
      </BrowserRouter>
  )
}

export default Navigation