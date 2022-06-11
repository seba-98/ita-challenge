import  Head  from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../ui/Navbar'

interface Props{
    title:string,
    description:string,
    children: JSX.Element
}

export const MainLayout:FC<Props> = ({title, description, children}) => {
  return (
    <>
        <Head>
            <title>{ title }</title>
            <meta name="og:title" content={ title } />
            <meta name="description" content={ description } />
            <meta name="og:description" content={ description } />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>

        <nav>
            <Navbar />
        </nav>
        <main>
            { children }
        </main>
        <footer>
            {/* FOOTER */}
        </footer>
    
    </>
  )
}
