import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from '../ui/button'
import ShinyButton from '../magicui/shiny-button'

const AdminLeftbar = () => {
    const AdminLinks = [
    {
        title: "Dashboard",
        path: "./admin/dashboard",
        // icon: ,
    },{
        title: "User",
        path: "./admin/users"
    }

]
    return (
        <div className='h-screen w-1/6 flex justify-center items-center flex-col bg-primary pt-10'>
        <div className='h-5/6 w-full flex flex-col items-center justify-start'>
            {
                AdminLinks.map((data, index)=>(
                    <NavLink key={index} to={data.path} className={''}>
                        <span>
                            {data.title}
                        </span>
                    </NavLink>
                    
                ))
            }
        </div>

        <ShinyButton text="Logout" className=" w-10 flex justify-center items-center "/>
        <div className='h-1/6 w-full flex flex-col justify-center items-center'>
            <Button className='bg-black'> <a href='/'>logout</a></Button>
        
        </div>
    </div>
    )
}

export default AdminLeftbar