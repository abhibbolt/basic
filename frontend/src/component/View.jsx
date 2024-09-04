import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const View = () => {
    const {id} = useParams();
    const [data, setData] = React.useState({});
    const getsingle =async ()=>{
        console.log(id);
        const response=await fetch(`http://localhost:8000/${id}`);  
        const result= await response.json()
        console.log(result);
        setData(result);
    }
    useEffect(()=>{
        getsingle();
    },[])
  return (
    <>
    {data.firstname}
    {data.lastname}   
    {data.email}
    {data.salary}
    </>
  )
}

export default View