import React  from 'react'
import AppBar from './MainPage/AppBar'
import Footer from './MainPage/Footer'
import data from './cards.json'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import {Link} from 'react-router-dom'

const useStyles=makeStyles((theme)=>({
    card:{
        width:"200px",
        height:"300px",
        padding:"5px",
        background: "linear-gradient(45deg, rgb(0, 110, 121), rgb(54, 190, 174))",
        textAlign:"center",
        margin:"20px auto",
        color:"#fff",
        position:"relative",
        lineHeight:"1",
        border:"2px solid #fff"
    },
    link:{
        color:"blue",
        /*color:"#2a0b99",*/
        textDecoration:"none",
        lineHeight:"1.5",
        fontWeight:"bold",
    },
    telBlock:{
        color:"green",
        fontSize:"14px",
        /*background:"#4EC0B9",*/
        background:"yellow",
        position:"absolute",
        bottom:0,
        left:0,
        right:0,
        
    },
}))


function Catalog(){
    const classes=useStyles()

    function items(){
       return data.map(item=><Paper key={item.id} className={classes.card} elevation={14}>
       <p>Код тура: {item.id}</p>
       
       <p>{item.Land}</p>
       
       <p><a className={classes.link} href={item.URL}>{item.Hotel}</a></p>
       <p>{item.Date}</p>
       
       <p>{item.Nights} ночей({item.Meal})</p>
       <p>Цена: <b>{item.Price}</b> .руб*</p>
       <p className={classes.telBlock}>Заказать тур можно по телефону: <br></br><a className={classes.link} href="tel:+7(909)681-58-12">+7(909)681-58-12</a></p>
       </Paper>)
    }
    return(
        <div>
            <AppBar></AppBar>
            <Link to='/test'>Домой</Link>
       <Box style={{display:"flex", flexWrap:"wrap", gap:"20px"}}>
       {items()}
       </Box>
       <Typography variant="subtitle2" className={classes.title} style={{color:"#07665E"}}>
       *Стоимость тура может измениться. Цены указаны за два человека
       </Typography>
       <Footer></Footer>
        </div>
    )
}

export default Catalog