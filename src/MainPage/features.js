import React from 'react'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import PersonIcon from '@material-ui/icons/Person';
import ScheduleIcon from '@material-ui/icons/Schedule';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Box from '@material-ui/core/Box'

const useStyles=makeStyles((theme)=>({
    featuresBack:{
        background:"rgba(99, 209, 152, 0.8)"
    }
}));

function Features(){
    const classes=useStyles()
    return(
        <Paper className={classes.featuresBack}>
            <Typography variant="h6" style={{textAlign:"center", padding:"10px", marginBottom:"50px"}}>
            Почему именно мы?
            </Typography>
            <Grid container spacing={10}>
                <Grid item xs={3}>
                <Typography variant="subtitle2" style={{textAlign:"center"}}>
                    Бесплатный подбор тура
                </Typography>
                <Box style={{textAlign:"center"}}>
                    <CreditCardIcon style={{color:"#fff", fontSize:"80px"}}></CreditCardIcon>
                </Box>
                <Typography variant="subtitle2" style={{textAlign:"center"}}>
                    У нас бесплатный подбор тура
                </Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography variant="subtitle2" style={{textAlign:"center"}}>
                    Индивидуальный подход
                </Typography>
                <Box style={{textAlign:"center"}}>
                    <PersonIcon style={{color:"#fff", fontSize:"80px"}}></PersonIcon>
                </Box>
                <Typography variant="subtitle2" style={{textAlign:"center"}}>
                К каждому нашему клиенту у нас индивидуальный подход
                </Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography variant="subtitle2" style={{textAlign:"center"}}>
                    Оперативность Качество
                </Typography>
                <Box style={{textAlign:"center"}}>
                    <ScheduleIcon style={{color:"#fff", fontSize:"80px"}}></ScheduleIcon>
                </Box>
                <Typography variant="subtitle2" style={{textAlign:"center"}}>
                Оперативно подберем лучший тур
                </Typography>
                </Grid>
                <Grid item xs={3}>
                <Typography variant="subtitle2" style={{textAlign:"center"}}>
                    Постоянным клиентам скидки
                </Typography>
                <Box style={{textAlign:"center"}}>
                    <LocalOfferIcon style={{color:"#fff", fontSize:"80px"}}></LocalOfferIcon>
                </Box>
                <Typography variant="subtitle2" style={{textAlign:"center"}}>
                    Нашим постоянным и корпоратвным клиентам мы предоставляем скидки.
                </Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Features