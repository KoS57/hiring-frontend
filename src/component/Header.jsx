import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <div className="tabs-section" >
            <div class="tabs">
                <input type="radio" name="tab-btn" id="tab-btn-1" value="" checked />
                <label for="tab-btn-1"><NavLink to="/devices" className="nota" >Devices</NavLink ></label>

                <input type="radio" name="tab-btn" id="tab-btn-2" value="" />
                <label for="tab-btn-2"><NavLink to="/users" className="nota" >Users</NavLink ></label>
            </div>
        </div>
    )
}

export default Header