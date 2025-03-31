import React from 'react'

function About() {
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-5'>
                <h2>About</h2>
                <p>This is a simple employee management system built with React and Express.</p>
                <p>It allows you to add, update, and delete employees from the database.</p>
                <p>It uses MySQL as the database.</p>
            </div>
        </div>
    )
    }

export default About

