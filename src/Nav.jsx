import React from 'react'
import logo from "./assets/react.svg"

const Nav = () => {
    return (
        <div>
            <div className='listt'>
                <div >
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li>home</li>
                    <li>service</li>
                    <li>about</li>
                    <li>contact</li>
                </ul>

            </div>
        </div>
    )
}

export default Nav