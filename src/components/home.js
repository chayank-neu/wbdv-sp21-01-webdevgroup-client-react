import React from 'react'
import {Link} from "react-router-dom";

export default () =>
    <>
        <h1>Home</h1>
        <div className="list-group">
            <Link to="/admin" className="list-group-item">
                Admin Dashboard
            </Link>
        </div>
    </>