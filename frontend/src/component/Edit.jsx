import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {

    const [firstname,setFirstname]=useState("");
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [salary,setSalary]=useState("");
    const {id} = useParams();
    const navigate = useNavigate();
    console.log(id);
    const getemp= async ()=>{
        const response = await fetch(`http://localhost:8000/${id}`);
        const data = await response.json();
        if(response.ok){
            setFirstname(data.firstname);
            setLastname(data.lastname);
            setEmail(data.email);   
            setSalary(data.salary);
        }
    }


    const updateemp= async (e)=>{
        e.preventDefault();
        const emp ={firstname,lastname,email,salary};

        const response = await fetch(`http://localhost:8000/${id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                },
            body:JSON.stringify(emp)
        });
        const result =await response.json();
        if(result.msg=="Success"){
            alert("Employee Updated");
            navigate('/showall');
        }
        else{
            alert(result.msg);
        }
    }


    useEffect(()=>{
        getemp();
    },[])
    


  return (
    <div className='row'>
    
    <div className='col-md-6 mx-auto p-5 shadow-lg my-5 rounded-5'>
        <h4><span className='text-danger text-decoration-underline'>Updation</span> Form </h4>
        <br/>
        <form onSubmit={updateemp} >
            Enter Your First Name : 
            <input className='form-control' value={firstname} onChange={(e)=>{ setFirstname(e.target.value)} } type="text" name="firstName" />
            <br/>
            
            Enter Your Last Name :
            <input className='form-control' value={lastname}  onChange={(e)=>{setLastname(e.target.value)}} type="text" name="lastName" />
            <br/>
            Enter Your Email :
            <input className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" />
            <br/>
            Enter Your Salary :
            <input className='form-control' value={salary} onChange={(e)=>setSalary(e.target.value)} type="number" name="salary" />
            <br/>
            <button className='form-control btn btn-primary' type="submit">Submit</button>

        </form>
    </div>
</div>
  )
}

export default Edit