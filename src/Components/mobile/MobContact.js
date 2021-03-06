import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 0 12px 3px #333',
    padding: theme.spacing(2, 4, 3),
    fontFamily: 'Open Sans',
    width: '310px'
  },
  form: {
    textAlign: 'center'
  },
  button: {
    display: 'block',
    margin: '0 auto',
    color: 'white',
    backgroundColor: '#00A991',
    border: 'none',
    fontFamily: 'Open Sans',
    fontSize: '16px',
    borderRadius: '20px',
    padding: '10px',
    width: '250px',
    marginBottom: '10px'
  },
  icon: {
    fontSize: '20px',
    cursor: 'pointer',
  },
  margin: {
    fontSize: '10px'
  }
}));

export default function Contact() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('it submitted');


  }

  return (
    <div>
      <p style={{color: '#666', fontFamily: 'Open Sans', textAlign: 'center'}}>Couldn't find a product you were looking for? <br /> <Link onClick={handleOpen} href={'#'}style={{color: '#666'}}>Contact us.</Link></p>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        disableEnforceFocus
        disablePortal
        disableAutoFocus
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        
        <Fade in={open}>
          <div className={classes.paper}>
            <form className={classes.form}>
              <div style={{width: '100%', textAlign: 'right'}}>
                <FontAwesomeIcon icon={faTimes} onClick={handleClose} className={classes.icon} />
              </div>
              <h3 id="transition-modal-title">Couldn't find what you're looking for? Let me assist you personally.</h3>

              <TextField
                className={classes.margin}
                label="Name"
                variant="outlined"
                fullWidth
                id="mui-theme-provider-outlined-input"
                style={{marginBottom: '20px', width: '250px'}}
              />

              <TextField
                className={classes.margin}
                label="Email"
                variant="outlined"
                fullWidth
                id="mui-theme-provider-outlined-input"
                style={{marginBottom: '20px', width: '250px'}}
              />

<             TextField
                className={classes.margin}
                label="What is the product?"
                variant="outlined"
                multiline
                rows="4"
                id="mui-theme-provider-outlined-input"
                style={{width: '250px', marginBottom: '20px'}}
              />

              <button className={classes.button} onClick={handleSubmit}>Send Message</button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}