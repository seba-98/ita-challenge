import { AppBar, IconButton, Link, Toolbar, Box } from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import React from 'react';
import recurso1 from '../../public/Recurso1.png';
import { ActiveLink } from './ActiveLink';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
  return (
    <AppBar sx={{width:'100%'}} >
        <Toolbar sx={{width:'100%', mt:'10px', display:'flex', justifyContent:'space-between', flexWrap:'wrap', position:'sticky'}}>
            
            <NextLink href='/' passHref >
                <Link>
                    <Image src={recurso1} alt='ita_logo' width='115px' height='50px'/>
                </Link>
            </NextLink>


              <Box sx={{ mt:'20px', mb:'15px', display:{xs:'none',sm:'none', md:'flex'}, justifyContent:'center', flexWrap:'wrap',  mr:'70px',  }}>
                <ActiveLink href="/" text="HOME"/>
                <ActiveLink href="/nosotros" text="NOSOTROS"/>
                <ActiveLink href="/proyectos" text="PROYECTOS"/>
                <ActiveLink href="/servicios" text="SERVICIOS"/>
                <ActiveLink href="/news" text="NEWS"/>
                <ActiveLink href="/contacto" text="CONTACTO"/>
              </Box>


            <IconButton sx={{color:'white'}}>
                <MenuIcon sx={{fontSize:'50px'}}/>
            </IconButton>

        </Toolbar>
    </AppBar>
  )
}
