import React from 'react'
import {Menu} from '../config/Menu'
import logo from '../../assets/images/logo.webp'

const Sidebar = () => {
    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">پنل کاربری بیمه آرمان</span>
                    <img src={logo} alt="logo"/>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    {Menu.map((item, i) => (
                        <li className="nav-item" key={i}>
                            <a href={`/list/${item.name}`} className="nav-link align-middle px-0 text-light">
                                <i className="fa fa-home" /> <span className="ms-1 d-none d-sm-inline">{item.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default Sidebar