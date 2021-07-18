import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import {Link} from 'react-router-dom'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';






const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight:"bold",
  },
}));



export default function ButtonAppBar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
   

  
     
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" className={classes.title} color="secondary">
            Biz Joy Travel
          </Typography>
          <Button color="secondary" style={{marginTop:"2px", width:"180px"}}> <a href="tel:+7 (909)681-58-12">+7 (909)681-58-12</a></Button>
          <IconButton edge="start" className={classes.menuButton} color="secondary" aria-label="menu" onClick={handleClick}>
          <MenuIcon>
            </MenuIcon>
          </IconButton>
          <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
          >
        <MenuItem onClick={handleClose}><Link style={{color:"#000"}} to='/test'>Главная</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link style={{color:"#000"}} to='/test/catalog'>Каталог туров</Link></MenuItem>
      </Menu>
        </Toolbar>
      </AppBar>
      
    </div>
  );
}