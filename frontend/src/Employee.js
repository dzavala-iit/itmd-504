import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Employee() {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
        axios.get('http://3.146.152.16:8081/')
        .then(res => setEmployees(res.data))
        .catch(err => console.log(err));
    })

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://3.146.152.16:8081/employees/'+id)
            window.location.reload()
        } catch(err) {
            console.log(err);
        }
    };
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            
            <div className='w-50 bg-white rounded p-5'>
                <h2>Employee Lookup Database</h2>
                <Link to="/create" className='btn btn-success'>Add +</Link>
                <Link to="/about" className='btn btn-info ms-3'>About</Link>
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
                                        <Link to={`/update/${data.ID}`} className='btn btn-primary'>Update</Link>
                                        <button className='btn btn-danger ms-3' onClick={ e => handleDelete(data.ID)}>Delete</button>
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