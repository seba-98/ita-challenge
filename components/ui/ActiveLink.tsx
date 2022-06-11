import React, { CSSProperties, FC } from 'react'
import NextLink from 'next/link';
import { useRouter } from "next/router";
import {  Button,  Link, } from "@mui/material"

interface Props{
    text:string,
    href:string
}




export const ActiveLink:FC<Props> = ({text, href}) => {
    
    const {asPath}=useRouter();

    const textStyle={
      fontSize:'17px',
      fontWeight:'300',
      textDecoration: 'none',
      backgroundImage: 'linear-gradient(currentColor, currentColor)',
      backgroundPosition: '0% 100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '0% 2px',
      transition: 'background-size .3s',
      
      '&:hover':{
        backgroundSize: '100% 2px'

      },
      '&:focus': {
        backgroundSize: '100% 2px',
      }
    }


  return (
    <NextLink href={href} passHref>
        <Link >
        {
         asPath === href ?
            <Button color="info" sx={textStyle}>{text}</Button>
            :
            <Button sx={{color:'white', ...textStyle}}>{text}</Button>
        }
        </Link>
    </NextLink>
  )
}
