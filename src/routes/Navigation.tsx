import { BrowserRouter, NavLink, Routes, Route, Navigate } from "react-router-dom"
import logo from "../assets/react.svg"
import { routes } from "./routes"
import { Suspense } from "react"

export const Navigation = () => {
    return (
        <Suspense fallback = {<span>Loading</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} width={200} height={200} alt="React Logo" />
                        <ul>
                            {routes.map(rc => (
                                <li key={rc.to}>
                                    <NavLink to={rc.to} className={({isActive}) => isActive ? 'nav-active' : ''}>{rc.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Routes>
                        {routes.map(sd => (
                            <Route key={sd.to} path={sd.path} element = {<sd.Component/>}/>
                        ))}
                        <Route path="/*" element = {<Navigate to={routes[0].to} replace/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}
