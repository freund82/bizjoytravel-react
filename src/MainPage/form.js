import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
        width:"60%",
        display:"flex",
        marginTop:"20px",
        margin:"auto",
      },
      form:{
            lineHeight:3,
            color:"red",
            textAlign:"center"
      },
      btnRequest:{
        background:"#07665E"
    },
  }));
   
        
          export default function Form() {
            const classes = useStyles();
            
            return (
                <Box className={classes.root}>
                    <Paper elevation={14} style={{padding:"10px", background:"rgba(44, 188, 174, 0.8)"}}>
                        <form action="order.php" method="GET" noValidate className={classes.form}  autoComplete="off">
                            <Typography variant="h6" style={{marginBottom:"10px"}}>
                            Оставьте заявку и получите скидку
                            </Typography>
                            <TextField name="name" color="secondary" size="small" id="standard-basic" label="Имя" variant="outlined"/>
                            <TextField name="phone" color="secondary" size="small" id="filled-basic" label="Телефон" variant="outlined"/>
                            <TextField name="email" color="secondary" size="small" id="outlined-basic" label="E-mail" variant="outlined"/>
                            <Box style={{textAlign:"center"}}>
                                <Button className={classes.btnRequest} variant="outlined" color="secondary" type="submit">Оставить заявку</Button>
                            </Box>
                        </form>
                    </Paper>
                </Box>
                
              
            );
          }
    


