import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';
import ReCAPTCHA from "react-google-recaptcha";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

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
    textAlign: 'center',
    width: '300px'
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
    width: '300px',
    marginBottom: '10px'
  },
  menuButton: {
    color: 'white',
    backgroundColor: '#00A991',
    fontSize: '12px',
    height: '35px',
    display: 'inline'
  },
  google: {
    width: '300px',
    marginTop: '8px',
    fontSize: ''
  },
  facebook: {
    width: '300px',
    height: '45px',
    backgroundColor: '#3b5998',
    borderRadius: '3px',
    border: 'none',
    padding: '0 14px',
    textAlign: 'left'
  },
  icon: {
    color: 'white',
    backgroundColor: '#3b5998',
    fontSize: '20px',
    marginRight: '22px'
  }
}));

export default function LoginButton() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [member, setMember] = React.useState('sign');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('it submitted');
  };
  
  const handleMember = (event) => {
    event.preventDefault();
    console.log(event.target.name)

    switch(event.target.name) {

      case 'join':
        setMember('join');
      
        break;

      case 'sign':
        setMember('sign');
        break;

      case 'pswd':
        setMember('pswd');
        
        break;

      default:
        // code block
    }
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };

  const onChange = (value) => {
    console.log("Captcha value:", value);
  };

  const getPopup = () => {
    console.log(member)
    if(member === 'sign') {
      return(
        <Fade in={open}>
          <div className={classes.paper}>
            <form className={classes.form}>
              <h2 id="transition-modal-title">Sign In</h2>

              <div style={{display: 'block'}}>
                <FacebookLogin
                  appId="1088597931155576"
                  autoLoad={false}
                  fields="name,email,picture" 
                  callback={responseFacebook}
                  className={classes.facebook}
                  render={renderProps => (
                    <button onClick={renderProps.onClick} className={classes.facebook}><FontAwesomeIcon icon={faFacebookF} className={classes.icon} /><span style={{color: 'white', fontSize: '15px'}}>Continue with Facebook</span></button>
                  )}
                />
              </div>
              

              <GoogleLogin
                  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  buttonText="Continue with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  className={classes.google}
                />

              <p style={{fontSize: '12px', color: '#666'}}>We'll never post without your permission</p>

              <p style={{fontSize: '13px', color: '#666'}}>------ or ------</p>


              <TextField
                className={classes.margin}
                label="Email"
                variant="outlined"
                fullWidth
                id="mui-theme-provider-outlined-input"
                style={{display: 'block', marginBottom: '10px', width: '300px'}}
              />

              <TextField
                className={classes.margin}
                label="Password"
                variant="outlined"
                fullWidth
                id="mui-theme-provider-outlined-input"
                style={{display: 'block', marginBottom: '10px', width: '300px'}}
              />

              <ReCAPTCHA
                  sitekey="Your client site key"
                  onChange={onChange}
                />

              <button className={classes.button} onClick={handleSubmit} style={{marginTop: '10px'}}>Sign In</button>
            </form>

            <Link href={'#'} style={{color: 'DodgerBlue'}} name="pswd" onClick={handleMember}>Forgot Password?</Link>

            <p>Not a member? <Link href={'#'} name="join" onClick={handleMember} style={{color: 'DodgerBlue'}}>Join now</Link></p>
          </div>
        </Fade>
      )
    }
    else if (member === 'join') {
      console.log('we made it here!')
      return(
        <Fade in={open}>
          <div className={classes.paper}>
            <form className={classes.form}>
              <h2 id="transition-modal-title">Join ShopNani today and get ₹50 cash bonus*</h2>

              <TextField
                className={classes.margin}
                label="Email"
                variant="outlined"
                fullWidth
                id="mui-theme-provider-outlined-input"
                style={{display: 'block', marginBottom: '10px', width: '300px'}}
              />

              <TextField
                className={classes.margin}
                label="Password"
                variant="outlined"
                fullWidth
                id="mui-theme-provider-outlined-input"
                style={{display: 'block', marginBottom: '10px', width: '300px'}}
              />

              <ReCAPTCHA
                  sitekey="Your client site key"
                  onChange={onChange}
                />

              <button className={classes.button} onClick={handleSubmit} style={{marginTop: '8px', marginBottom: '12px'}}>Sign Up</button>

              <Link href={'#'} style={{marginBottom: '30px', color: 'DodgerBlue'}}>Did someone refer you?</Link>

            
            <span style={{display: 'block', color: 'white', padding: '0', margin: '0', fontSize: '9px'}}>------</span>

              <div style={{display: 'block'}}>
              <FacebookLogin
                  appId="1088597931155576"
                  autoLoad={false}
                  fields="name,email,picture" 
                  callback={responseFacebook}
                  className={classes.facebook}
                  render={renderProps => (
                    <button onClick={renderProps.onClick} className={classes.facebook}><FontAwesomeIcon icon={faFacebookF} className={classes.icon} /><span style={{color: 'white', fontSize: '15px'}}>Continue with Facebook</span></button>
                  )}
                />
              </div>
              

              <GoogleLogin
                  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  buttonText="Continue with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  className={classes.google}
                />

              <p style={{fontSize: '12px', color: '#666'}}>We'll never post without your permission</p>

            </form>


            <p>Already a member? <Link href={'#'} name="sign" onClick={handleMember} style={{color: 'DodgerBlue'}}>Sign In</Link></p>

            <p style={{fontSize: '12px', color: '#666'}}>By joining, I agree to the <Link href={'#'}style={{color: '#666', textDecoration: 'underline'}} >Terms &amp; Conditions</Link> and <Link href={'#'} style={{color: '#666', textDecoration: 'underline'}}>Privacy Policy</Link></p>


            <p style={{fontSize: '12px', color: '#666'}}>*Bonus terms apply</p>

          </div>
        </Fade>
      )
    }
    else if (member === 'pswd') {
      return(
      <Fade in={open}>
          <div className={classes.paper}>
            <form className={classes.form}>
              <h3 id="transition-modal-title">Forgot password?</h3>


              <TextField
                className={classes.margin}
                label="Email"
                variant="outlined"
                fullWidth
                id="mui-theme-provider-outlined-input"
                style={{marginBottom: '8px', width: '270px'}}
              />

              <p style={{fontSize: '12px', color: '#666'}}>We'll send you a link to reset your password</p>

              <button className={classes.button} onClick={handleSubmit} style={{width: '270px'}}>Submit</button>

              <Link href={'#'} name="sign" onClick={handleMember} style={{color: 'DodgerBlue'}}>Sign In</Link>
            </form>
          </div>
        </Fade>
      )
    }
  }

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleOpen} className={classes.menuButton}>
            Sign In
          </Button>

      
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
        { 'hi' === 'hi' ?
           getPopup() : null }
      </Modal>
    </React.Fragment>
  );
}