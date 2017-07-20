import React from 'react';
import {Link, NavLink} from 'react-router-dom';

exports.Nav=(props)=>{
    return(<ul className="nav__tags">
                    <li><NavLink to="/" exact activeClassName='active'>HOME</NavLink></li>
                    <li><NavLink to="/battle" activeClassName='active'>BATTLE</NavLink></li>
                    <li><NavLink to="/popular" activeClassName='active'>POPULAR</NavLink></li>

                </ul>


);



}