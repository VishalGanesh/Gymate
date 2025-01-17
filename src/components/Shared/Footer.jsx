import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'
import { LinkedCamera, LinkedCameraRounded } from '@mui/icons-material'

const Footer = () => {
  return (
    <>
    <div className="absolute bottom-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center bg-background">
    <div className=' text-center font-medium' >
      *Free Trial for 3 Days*
    </div>
      <div className="w-1/4 h-full text-primary font-bold flex justify-start items-center text-lg absolute left-16 "> ©Gymate.on</div>
      <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8 absolute right-5'>
        <a href='#' target='_blank' className='h-5 w-5 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <Instagram className='h-5 w-5'/>
        </a>
        <a href='#' target='_blank' className='h-5 w-5 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <Facebook className='h-5 w-5' />
        </a>
        <a href='#' target='_blank' className='h-5 w-5 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <Twitter className='h-5 w-5' />
        </a>
        <a href='#' target='_blank' className='h-5 w-5 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <Youtube className='h-5 w-5'/>
        </a>
        <a href='#' target='_blank' className='h-5 w-5 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
          <Linkedin className='h-5 w-5'/>
        </a>
      <ModeToggle/>
      </div>
    </div>
    </>
  )
}
export default Footer