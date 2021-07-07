import React from 'react'
import ButtonAppBar from './MainPage/AppBar'
import HeaderInner from './MainPage/headerInner/headerInner'
import Form from './MainPage/form'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Turkey from './MainPage/images/Turkey/Antalya.jpg'
import Egypt from './MainPage/images/Egypt/Egypt.jpg'
import Greece from './MainPage/images/Greece/Greece.jpg'
import Spain from './MainPage/images/Spain/Spain.jpg'
import CollectionsIcon from '@material-ui/icons/Collections';
import Features from './MainPage/features'
import { Typography } from '@material-ui/core';
import Input from '@material-ui/core/Input'
import Footer from './MainPage/Footer'


const useStyles=makeStyles((theme)=>({
  btnCatalog:{
    background:"#07665E"
  },
  photo:{
    outline:"10px solid #fff"
  },
  btnRequest:{
    background:"#07665E"
},
}))

function App() {
const classes=useStyles()
  return (
    <div>
   <ButtonAppBar></ButtonAppBar>
   <Container>
   <Grid container spacing={5}>
     <Grid item xs={6}>
     <HeaderInner></HeaderInner>
     </Grid>
     <Grid item xs={6} style={{display:"flex", justifyContent:"flex-end"}}>
       <Form></Form>
     </Grid>
     <Grid item xs={12} style={{textAlign:"center"}}>
       <Button disableElevation="false" className={classes.btnCatalog} variant="outlined" color="secondary"><CollectionsIcon></CollectionsIcon>&nbsp; Каталог туров</Button>
     </Grid>
     <Grid item xs={3} style={{textAlign:"center"}}>
       <Box>
         <img className={classes.photo} src={Turkey} width="100%" height="100%"></img>
       </Box>
     </Grid>
     <Grid item xs={3}style={{textAlign:"center"}}>
     <Box>
         <img className={classes.photo} src={Egypt} width="100%" height="100%"></img>
       </Box>
     </Grid>
     <Grid item xs={3} style={{textAlign:"center"}}>
     <Box>
         <img className={classes.photo} src={Greece} width="100%" height="100%"></img>
       </Box>
     </Grid>
     <Grid item xs={3} style={{textAlign:"center"}}>
     <Box>
         <img className={classes.photo} src={Spain} width="100%" height="100%"></img>
       </Box>
     </Grid>
     <Grid item xs={12}>
       <Features></Features>
     </Grid>
     <Grid item xs={12}>
       <Box style={{textAlign:"center", marginTop:"20px", lineHeight:5}}>
       <Typography variant="h5">
        Остались вопросы?
      </Typography>
          <Box>
            <Input color="primary" fullWidth="true" style={{background:"#fff", width:"20%"}} placeholder="Ваш телефон"></Input>
          </Box>
                <Box style={{textAlign:"center"}}>
                    <Button className={classes.btnRequest} variant="outlined" color="secondary">Заказать звонок</Button>
                </Box>
       </Box>
     </Grid>
   </Grid>
   </Container>
   <Footer></Footer>
    </div>
  );
}

export default App;
