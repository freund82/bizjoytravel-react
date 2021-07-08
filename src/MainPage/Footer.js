import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Box from '@material-ui/core/Box'




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



export default function Footer() {
  const classes = useStyles();

  return (
   

  
     
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="subtitle2" className={classes.title} color="secondary">
          ООО Юридическое агентство "Бизнес и туризм" м.Автозаводская ул.Восточная д.11 <br></br>
          График работы: ежедневно с 10-00 до 18-00 тел: +7(909) 681-58-12 <br></br>
          <Box style={{display:"flex", alignItems:"center"}}>
          <CopyrightIcon></CopyrightIcon>&nbsp; Max Hook {new Date().getFullYear()}
          </Box> 
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}