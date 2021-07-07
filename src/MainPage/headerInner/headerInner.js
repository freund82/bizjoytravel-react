import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    headerInner_text:{
            fontSize:"100px",
            fontWeight:"bold",
            color:"#07665E",
            margin:"20px",
            maxWidth:"990px",
    }
}));
  

function HeaderInner(){

    const classes = useStyles();

    return(
        <h1 className={classes.headerInner_text}>Путешествуйте вместе с нами!</h1>
    )
}

export default HeaderInner