import React, { useEffect, useState } from 'react'
import axios from 'axios'


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
                <button className='btn btn-success'>Add +</button>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((data, i)=> (
                                <tr key={i}>
                                    <td>{data.Name}</td>
                                    <td>{data.Email}</td>
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