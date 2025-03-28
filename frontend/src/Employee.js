import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Employee() {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8081/')
        .then(res => setEmployees(res.data))
        .catch(err => console.log(err));
    })
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-5'>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((data, i)=> (
                                <tr key={i}>
                                    <td>{data.Name}</td>
                                    <td>{data.Email}</td>
                                    <td>
                                        <Link to={'update/${data.id}'} className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger ms-3'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
   )
}

export default Employee