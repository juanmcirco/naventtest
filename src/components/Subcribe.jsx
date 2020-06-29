import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { css } from 'emotion'

export default function FormDialog({url}) {
  const [open, setOpen] = React.useState(false)
  const [error, setValidate] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const validateEmail=(evt)=>{
    const result = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(evt.target.value)
    if(result===true){
      setValidate(false)
    } else{
        setValidate(true)
    }}

  return (
    <div>
      <Button className={contactStyle} onClick={handleClickOpen}>
        Contactar
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Contactá al anunciante</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            onChange={validateEmail}
            error={error}
            required
            id="email"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
            margin="normal"
            id="name"
            label="Nombre"
            type="text"
            fullWidth
          />
          <TextField
            margin="normal"
            id="tel"
            label="Telefono"
            type="tel"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
            {error? <Button fullWidth>
                Contactar Anunciante
            </Button>:
            <Button onClick={handleClose} className={contactStyle} fullWidth>
                Contactar Anunciante
            </Button>
            }
        </DialogActions>
      </Dialog>
    </div>
  )
}

const contactStyle = css({
    color:'white !important',
    background:'#E68444!important',
    borderRadius:'5px!important',
    textDecoration:'none!important',
    cursor:'pointer!important',
    height:'38px!important',
    lineHeight: '38px!important',
    minWidth: '100px!important',
    textAlign: 'center!important',
    fontWeight:600,
    transition: 'background 1s ease!important',
    ':hover':{
        background:'#fca267!important'
    }
})