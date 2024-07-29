import UserLeftbar from '@/components/User/UserLeftbar'
import UserTopbar from '@/components/User/UserTopbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <>
        <UserLeftbar/>
        <UserTopbar/>
        <Outlet/>
        </>
    )
}

export default UserLayout