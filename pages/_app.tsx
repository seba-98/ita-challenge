import '../styles/globals.css'
import type { AppProps } from 'next/app'
import './../styles/scss/main.scss'
import { CssBaseline, ThemeProvider } from '@mui/material'
import {lightTheme} from '../utils/themes'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )

}

export default MyApp
