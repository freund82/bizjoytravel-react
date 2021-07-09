import React from 'react'
import './Modal.css'
import { Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

export default class Modal extends React.Component{

    state={
        isOpen:false
    }
    render(){
        return(
            <React.Fragment>
                <Typography variant="h6" color="secondary" onClick={()=>this.setState({isOpen:true})}>Login</Typography>
                {this.state.isOpen &&(<div className="modal">
                    <div className="modal-body">
                        <CloseIcon className="close" color="primary" onClick={()=>this.setState({isOpen:false})}></CloseIcon>
                        <Typography variant="h6" color="primary" style={{margin:"10px"}}>
                        Личный кабинет
                        </Typography>
                        <form>
                            <TextField name="name" color="primary" size="small" id="standard-basic" label="Логин" variant="outlined" style={{margin:"5px"}} />
                            <TextField type="password" name="password" color="primary" size="small" id="filled-basic" label="Пароль" variant="outlined"/>
                            <Box style={{display:"flex", justifyContent:"center"}}>
                            <Box style={{textAlign:"center"}}>
                                <Button style={{background:"#07665E", margin:"10px"}} variant="outlined" color="secondary" type="submit">Войти</Button>
                            </Box>
                            <Box style={{textAlign:"center"}}>
                                <Button style={{background:"#07665E", margin:"10px"}} variant="outlined" color="secondary" type="submit">Создать</Button>
                            </Box>
                            </Box>
                        </form>
                        </div>
                </div>)}
            </React.Fragment>
        )
    }
}