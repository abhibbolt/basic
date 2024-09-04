import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Showall = () => {
    var [data,setData]=useState([])

    const getall=async ()=>{
        const response = await fetch('http://localhost:8000/');
        const result = await response.json();
        setData(result);
        console.log(data);  
    }


    const empdel = async (id)=>{
        console.log(id);
        const response = await fetch(`http://localhost:8000/${id}`,{
            method: 'DELETE',
        });
        const result = await response.json();
        if(result.msg=="Success"){
            alert("Employee Deleted");
            getall();
        }
        else{
            alert(result.msg);
        }
    }

    
    useEffect(()=>{
        getall();
    },[]);


  return (
    <>
    <div className='row'>
        <div className='col-md-9 mx-auto my-5 bg-dark p-3 rounded-3 shadow-lg table-responsive'>
    <table className='table table-dark text-light'>
        <thead>
            <tr>
                <th>Id</th>
                <th colSpan={2}>Name</th>
                <th>Email</th>
                <th>Salary</th>
                <th colSpan={3}>Action</th>
            </tr>
        </thead>
        <tbody>
        {data?.map(element => (
              <tr>
                <td>{element._id}</td>
                <td>{element.firstname}</td>
                <td>{element.lastname}</td>
                <td>{element.email}</td>
                <td>{element.salary}</td>

                <td><Link to={`/view/${element._id}`} className='btn btn-warning'>View</Link></td>
                <td><Link to={`/edit/${element._id}`} className='btn btn-primary'>Edit</Link></td>
                <td><button className='btn btn-danger' onClick={()=>empdel(element._id)} >Delete</button></td>
              </tr>
           ))}     
        </tbody>
    </table>
        </div>
    </div>
    </>
  )
}

export default Showall