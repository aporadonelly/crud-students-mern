import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/create-student">Create Student</Link>               
            </div>
        )
    }
}

export default Header
