import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Modal from './Modal/Modal'





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



export default function ButtonAppBar() {
  const classes = useStyles();

  return (
   

  
     
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" className={classes.title} color="secondary">
            Biz Joy Travel
          </Typography>
          <Button color="secondary" style={{marginTop:"3px"}}>+7 (909)681-58-12</Button>
          <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu">
            <Modal></Modal>
          </IconButton>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}