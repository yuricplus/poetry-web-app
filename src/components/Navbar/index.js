import React from 'react'

import { CgMenuGridR, CgProfile } from 'react-icons/cg'
import { IoMdPricetag } from 'react-icons/io'
import { RiNotification3Fill } from 'react-icons/ri'

import './index.scss';

const Navbar = () => {
    return(
        <nav className="nav__menu">
            <div className="menu__open">
                <button type="button">
                  <CgMenuGridR size={40} className="icon"/>
                </button>
            </div>
            <div className="logo__name">
                <span>poetry</span>
            </div>
            <div className="align__right">
                <div className="labels__saved">
                    <button type="button">
                    <IoMdPricetag size={30} className="icon"/>
                    </button>
                </div>
                <div>
                    <button type="button">
                        <RiNotification3Fill size="30" className="icon"/>
                    </button>
                </div>
                <div>
                    <button type="button">
                        <CgProfile size="30" className="icon"/>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;