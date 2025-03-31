import React from 'react'

import { Link } from 'react-router-dom'

function About() {
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-5'>
                <h2>About</h2>
                <p>This is a simple employee management system built with bootstrap, Java, React, Node and Express.</p>
                <p>It allows you to add, update, and delete employees from the database.</p>
                <p>It uses MySQL as the database.</p>
                <p>It was created by Damian Zavala for the final project of ITMD 504</p>
                <Link to={`/`} className='btn btn-primary'>Return Home</Link>
            </div>
            
        </div>
    )
    }

export default About

