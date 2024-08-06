import React from 'react'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'
import ShinyButton from '../magicui/shiny-button'
import { ModeToggle } from '../mode-toggle'

const UserTopbar = () => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='bg-primary h-1/6 w-11/12 scale-x-105 ml-10 flex justify-center items-center absolute top-0'>
                    <Avatar className=' bg-background flex justify-center items-center w-20 h-20 text-3xl font-bold text-foreground absolute left-10 font-serif'>VG</Avatar>
                    <div className='flex justify-start absolute left-40 flex-col gap-2 text-foreground font-bold font-serif text-lg'>
                        <div>Name : User</div>
                        <div>Email : User@gamil.com</div>
                    </div>
                    <div className='w-full flex justify-center items-center -mt-7 mr-10'>
                    <a href='/'><ShinyButton text='Logout' className={'bg-slate-500 font-serif top-12 text-foreground text-lg absolute right-10'}/></a>
                    </div>
                    <ModeToggle/>
                </div>
            </div>
        </>
    )
}

export default UserTopbar;