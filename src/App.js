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
import TextField from '@material-ui/core/TextField'
import Footer from './MainPage/Footer'
import {Link} from 'react-router-dom'






const useStyles=makeStyles((theme)=>({
  btnCatalog:{
    background:"#07665E",
    marginTop:"40px",
    marginBottom:"40px"
  },
  photo:{
    outline:"10px solid #fff",
    marginBottom:"55px",
  },
  btnRequest:{
    background:"#07665E"
},
formPhone:{
  lineHeight:3,
  color:"red",
  textAlign:"center",
},
land:{
  position:"absolute",
  top:"68%",
  right:"0%",
  zIndex:2000,
  fontStyle:"italic",
  fontWeight:"bold",
}
}))


function App() {
const classes=useStyles()
  return (
    <div>
   <ButtonAppBar></ButtonAppBar>
   <Container maxWidth="lg">
   <Grid container spacing={5}>
     <Grid item xs={12} md={8}>
     <HeaderInner></HeaderInner>
     </Grid>
     <Grid item xs={12} md={4} style={{display:"flex", justifyContent:"flex-end"}}>
       <Form></Form>
     </Grid>
     <Grid item xs={12} style={{textAlign:"center"}}>
       <Link to='/test/catalog'>
       <Button disableElevation="false" size="large" className={classes.btnCatalog} variant="outlined" color="secondary"><CollectionsIcon></CollectionsIcon>&nbsp; Каталог туров</Button>
       </Link>
     </Grid>
     <Grid item xs={12} sm={6} md={3}  style={{textAlign:"center"}}>
       <Box style={{position:"relative"}}>
         <img className={classes.photo} src={Turkey} width="100%" height="100%" alt="Turkey"></img>
         <Typography variant="h6" className={classes.land}>
           Турция
         </Typography>
       </Box>
     </Grid>
     <Grid item xs={12} sm={6} md={3} style={{textAlign:"center"}}>
     <Box style={{position:"relative"}}>
         <img className={classes.photo} src={Egypt} width="100%" height="100%" alt="Egypt"></img>
         <Typography variant="h6" className={classes.land}>
           Египет
         </Typography>
       </Box>
     </Grid>
     <Grid item xs={12} sm={6} md={3} style={{textAlign:"center"}}>
     <Box style={{position:"relative"}}>
         <img className={classes.photo} src={Greece} width="100%" height="100%" alt="Greece"></img>
         <Typography variant="h6" className={classes.land}>
           Греция
         </Typography>
       </Box>
     </Grid>
     <Grid item xs={12} sm={6} md={3} style={{textAlign:"center"}}>
     <Box style={{position:"relative"}}>
         <img className={classes.photo} src={Spain} width="100%" height="100%" alt="Spain"></img>
         <Typography variant="h6" className={classes.land}>
           Испания
         </Typography>
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
      <form className={classes.formPhone} action="telContact.php" method="GET" noValidate autoComplete="off">
          <Box>
          <TextField name="tel" color="secondary" size="small" id="filled-basic" label="Ваш телефон" variant="outlined"/>
          </Box>
          <Box style={{textAlign:"center"}}>
            <Button className={classes.btnRequest} type="submit" variant="outlined" color="secondary">Заказать звонок</Button>
          </Box>
      </form>
          
       </Box>
     </Grid>
   </Grid>
   </Container>
   <Footer></Footer>
    </div>
  );
}

export default App;
