import { createTheme } from '@mui/material/styles';
import { red } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette:{
        mode:'light',
        primary:{
            main:'#030943'
        },
        secondary:{
          main: '#080755',
        },
        error:{
          main: red.A400,
        },
       info:{
        main:'#EB3791'
       }
       
      },

      components:{
        MuiAppBar:{
          defaultProps:{elevation:0},
          styleOverrides:{
            root:{
              backgroundColor:'#030943',
            }
          },
        } }
  
     
});
