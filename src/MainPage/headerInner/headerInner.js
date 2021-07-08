import React from 'react'
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
  
const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('md')]: {
                    fontSize:"90px"
            },
            [theme.breakpoints.down('xs')]: {
                fontSize:"40px"
        },
    },
  }))

function HeaderInner(){
    const classes = useStyles();
    return(
        <Typography className={classes.root} variant="h1">
            Путешествуйте вместе с нами!
        </Typography>
    )
}

export default HeaderInner

//style={{fontSize: "calc( (100vw - 480px)/(1280 - 480) * (80 - 20) + 16px)"}}