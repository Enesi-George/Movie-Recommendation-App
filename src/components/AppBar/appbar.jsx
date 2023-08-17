import React from 'react'
import { useNavigate } from 'react-router-dom';

const AppBar = () => {
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate("/")
    }
  return (
    <div className="py-3 shadow-md shadow-cyan-500/50">
        <div className="container flex justify-between px-32 w-full">
        <h2 onClick={handleNavigate} className=" cursor-pointer text-2xl font-semibold mb-4">Recommended Movies</h2>
        </div>
      
    </div>
  )
}

export default AppBar
