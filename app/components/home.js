import React from 'react';
import {Link} from 'react-router-dom';

exports.Home=(props)=>{

    return(
        <div className="home">
            <h1>GitHub Battle ! Battle Your Enemy....</h1>
            <Link to="/" className="button"> START FIGHT</Link>
        </div>


    )

};
