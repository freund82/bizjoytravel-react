import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Input from '@material-ui/core/Input';

const useStyles = makeStyles((theme) => ({
   form:{
       width:"65%",
       display:"flex",
       justifyContent:"flex-end",
       marginTop:"20px",
   },
   btnRequest:{
       background:"#07665E"
   } 
   
   
  }));

function Form (){
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <Box className={classes.form}>
        <Paper elevation={14} style={{padding:"10px", background:"rgba(44, 188, 174, 0.8)"}}>
            <h3 style={{color:"#fff", textAlign:"center"}}>Оставьте заявку и получите скидку</h3>
            <Box style={{lineHeight:3}}>
                <Box>
                    <Input color="primary" fullWidth="true" style={{background:"#fff"}} placeholder="Ваше имя"></Input>
                </Box>
                <Box>
                    <Input color="primary" fullWidth="true" style={{background:"#fff"}} placeholder="Ваш телефон"></Input>
                </Box>
                <Box>
                    <Input color="primary" fullWidth="true" style={{background:"#fff"}} placeholder="Ваш email"></Input>
                </Box>
                <Box style={{textAlign:"center"}}>
                    <Button className={classes.btnRequest} variant="outlined" color="secondary">Оставить заявку</Button>
                </Box>
            </Box>
            
        </Paper>
        </Box>
    </div>
    )
}

export default Form