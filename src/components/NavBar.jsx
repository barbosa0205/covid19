import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../scss/components/NavBar.scss'
export const NavBar = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className="nav-movil">
                <i
                    className="ri-menu-fill menu"
                    onClick={() => setOpen(true)}
                ></i>
            </nav>
            <aside className={`sidebar ${open ? 'aside-open' : 'aside-close'}`}>
                {' '}
                <div className="close-container">
                    <i
                        className="ri-close-circle-line close"
                        onClick={() => setOpen(false)}
                    ></i>
                </div>
                <div className="links-container">
                    <NavLink
                        to="/"
                        className="link"
                        exact
                        activeClassName="link-active"
                        onClick={() => setOpen(false)}
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to="/countries"
                        className="link"
                        activeClassName="link-active"
                        onClick={() => setOpen(false)}
                    >
                        ALL COUNTRIES
                    </NavLink>
                </div>
            </aside>
        </>
    )
}
