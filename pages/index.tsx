import { Box, Button, Typography, Link } from '@mui/material';
import type { NextPage } from 'next'
import NextLink from 'next/link';
import { MainLayout } from '../components/layouts'
import Recurso2 from '../public/Recurso 2.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const HomePage: NextPage = () => {
  return (
    <MainLayout title='Home' description='Ita | página de inicio'>
      <>
        <section className='ita-news'>
          <article className='new-article first-logo'>
            <div className='first-logo-ita-news'>
                <Typography component='h3' variant='h3'>
                  Entérate cuáles son los caminos para desarrollar e implementar en el mundo tecnológico.
                </Typography>
                <Button className='ui-btn'>Contáctanos</Button>
            </div>
          </article> 

          <article className='new-article second-logo'>
            <div className='second-logo-ita-news' />
          </article> 
        </section>
        
        <section className='tecno'>
          <article className=' tecno-content'>
              <Box component='img' src='/Recurso 2.png' />
              <Typography component='span'>#Tecnología</Typography>
              <Typography component='h3' variant='h3' color='secondary'>
                Reducir costos y aumentar tus <br/> márgenes con la tecnología.
              </Typography>
              <Typography component='p' color='secondary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, repellendus consequatur aut dignissimos rerum reiciendis, illum enim, molestias consectetur ad sed iusto. Beatae, nisi quas illo molestiae asperiores nobis quae.
              </Typography>
              <NextLink href='/' passHref className='art-link'> 
                <Link className='art-tecno-link'>Lee el artículo completo <ArrowForwardIcon sx={{fontSize:'40px', ml:'10px'}}/></Link>
              </NextLink>
          </article> 

          <article className=' tecno-image-container'>
              <div />
              <div className='tecno-img' />
          </article> 
        </section>

        <section>

        </section>
      </>
    </MainLayout>
  )
}

export default HomePage
