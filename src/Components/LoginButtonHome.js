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

import { withRouter } from "react-router";

import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { googleLogin } from '../redux/actions/userAuthAction';
import { googleRegister } from '../redux/actions/userAuthAction';

import { login } from '../redux/actions/userAuthAction';
import { register } from '../redux/actions/userAuthAction';



import { connect } from 'react-redux';


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 'initial'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 0 12px 3px #333',
    padding: theme.spacing(2, 4, 3),
    fontFamily: 'Open Sans',
    textAlign: 'center',
    width: '363px'
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
  },
  xIcon: {
    fontSize: '20px',
    cursor: 'pointer',
  }
}));

function LoginButton(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [member, setMember] = React.useState('sign');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setMember('sign');
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    let userInfo = {
      email: event.target.email.value,
      password: event.target.pswd.value
    }
    props.login(userInfo);
  };

  const handleJoinSubmit = (event) => {
    event.preventDefault();
    let userInfo = {
      email: event.target.email.value,
      password: event.target.pswd.value,
      name:event.target.name.value
    }
    props.register(userInfo);
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


  const responseGoogleLogin = (response) => {
    console.log(response)
    props.googleLogin(response.profileObj);
    props.history.push('/profile');
  };

  const responseGoogleRegister = (response) => {
    console.log(response)
    props.googleRegister(response.profileObj);
    props.history.push('/profile');
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
            <form className={classes.form} onSubmit={handleLoginSubmit}>
            <div style={{width: '100%', textAlign: 'right'}}>
                <FontAwesomeIcon icon={faTimes} onClick={handleClose} className={classes.xIcon} />
              </div>
              <h2 id="transition-modal-title">Sign In</h2>
              
              <GoogleLogin
                  clientId="92733740831-9d5b0gkds1as9nv0bjv5u7icjii9gk28.apps.googleusercontent.com"
                  buttonText="Continue with Google"
                  onSuccess={responseGoogleLogin}
                  onFailure={responseGoogleLogin}
                  cookiePolicy={'single_host_origin'}
                  className={classes.google}
                />

              <p style={{fontSize: '12px', color: '#666'}}>We'll never post without your permission</p>

              <p style={{fontSize: '13px', color: '#666'}}>------ or ------</p>

              { props.error.message.length > 0 ? <p style={{color: 'red', padding: '5px', backgroundColor: 'pink', borderRadius: '4px'}}>{props.error.message}</p> : null}

              <TextField
                className={classes.margin}
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                id="mui-theme-provider-outlined-input"
                style={{display: 'block', marginBottom: '10px', width: '300px'}}
              />

              <TextField
                className={classes.margin}
                label="Password"
                type="password"
                name="pswd"
                variant="outlined"
                fullWidth
                id="mui-theme-provider-outlined-input"
                style={{display: 'block', marginBottom: '10px', width: '300px'}}
              />

              <ReCAPTCHA
                  sitekey="Your client site key"
                  onChange={onChange}
                />

              <button className={classes.button} style={{marginTop: '10px'}}>Sign In</button>
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
            <form className={classes.form} onSubmit={handleJoinSubmit}>
            <div style={{width: '100%', textAlign: 'right'}}>
                <FontAwesomeIcon icon={faTimes} onClick={handleClose} className={classes.xIcon} />
              </div>
              <h3 id="transition-modal-title">Join ShopNani today and get 50 credits*</h3>
              { props.error.message.length > 0 ? <p style={{color: 'red', padding: '5px', backgroundColor: 'pink', borderRadius: '4px'}}>{props.error.message}</p> : null}

              <TextField
                className={classes.margin}
                label="Name"
                type="password"
                name="name"
                variant="outlined"
                fullWidth
                id="mui-theme-provider-outlined-input"
                style={{display: 'block', marginBottom: '10px', width: '300px'}}
              />

              <TextField
                className={classes.margin}
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                id="mui-theme-provider-outlined-input"
                style={{display: 'block', marginBottom: '10px', width: '300px'}}
              />

              <TextField
                className={classes.margin}
                label="Password"
                name="pswd"
                variant="outlined"
                fullWidth
                id="mui-theme-provider-outlined-input"
                style={{display: 'block', marginBottom: '10px', width: '300px'}}
              />

              <ReCAPTCHA
                  sitekey="Your client site key"
                  onChange={onChange}
                />

              <button className={classes.button} style={{marginTop: '8px', marginBottom: '12px'}}>Sign Up</button>

              <Link href={'#'} style={{marginBottom: '20px', color: 'DodgerBlue'}}>Did someone refer you?</Link>

            
            <span style={{display: 'block', color: 'white', padding: '0', margin: '0', fontSize: '9px'}}>------</span>
              

              <GoogleLogin
                  clientId="92733740831-9d5b0gkds1as9nv0bjv5u7icjii9gk28.apps.googleusercontent.com"
                  buttonText="Continue with Google"
                  onSuccess={responseGoogleRegister}
                  onFailure={responseGoogleRegister}
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
            <div style={{width: '100%', textAlign: 'right'}}>
                <FontAwesomeIcon icon={faTimes} onClick={handleClose} className={classes.xIcon} />
              </div>
              <h3 id="transition-modal-title">Forgot password?</h3>

              <p style={{fontSize: '14px', color: '#666', marginBottom: '20px'}}>We'll send you a link to reset your password</p>

              <TextField
                className={classes.margin}
                label="Email"
                name="pswd"
                variant="outlined"
                fullWidth
                id="mui-theme-provider-outlined-input"
                style={{marginBottom: '18px', width: '270px'}}
              />

              

              <button className={classes.button} style={{width: '270px'}}>Submit</button>

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

const mapStateToProps = (state) => {
  return {
    user: state.user,
    error: state.error
  }
}

export default connect(mapStateToProps, { googleLogin, googleRegister, login, register })(withRouter(LoginButton));
