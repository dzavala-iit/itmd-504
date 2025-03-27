import React from 'react'
import axios from 'axios'
import useEffect from 'react'

function Employee() {

    useEffect(()=> {
        axios.get('http://172.31.4.53:8081/')
        .then(res => console.log(res))
        .catch(err => console.log(err));
    },[])   

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded'>
                <button className='btn btn-success'>Add +</button>
                <table className='table'>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee