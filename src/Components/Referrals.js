import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';

import { getRefID } from '../redux/actions/userAuthAction';

import referral from '../images/referral.jpg';

const styles = theme => ({
    toolbar: {
        
    },
    tabs: {
        borderLeft: `3px solid ${theme.palette.divider}`,
    },
    tab: {
        color: '#555',
        fontSize: '12px',
        textTransform: 'capitalize',
        alignItems: 'start',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '380px',
      },
    button: {
        margin: theme.spacing(1),
        width: '170px',
        backgroundColor: '#00A991',
        color: 'white',
        height: '45px',
        fontWeight: 'bold'
      }
  });

class Referrals extends Component {
    state = {
        refLink: null
    }

    componentDidMount() {
       
            // this.props.getRefID();
    }

    componentDidUpdate() {
        const { user } = this.props.user

        console.log(user);

        if(user && user.refID === undefined) {
            this.props.getRefID();
        }
    }
    render() {

        const { classes } = this.props

        const { user } = this.props.user

        return (
            <React.Fragment>
                <div style={{width: '1007px', backgroundColor: 'white', padding: '0', position: 'relative', paddingBottom: '30px'}}>
                    <div style={{background: `linear-gradient(rgba(255,255,255,.15), rgba(255,255,255,.15)), url(${referral})`, height: '250px', backgroundSize: '1007px 250px',
                    backgroundRepeat: 'no-repeat', width: '1007px', position: 'relative'}}>
                        <div style={{position: 'absolute', left: '280px', top: '45px', textAlign: 'center'}}>
                            <p style={{color: 'white', fontSize: '28px', fontWeight: 'bold'}}>Invite Friends &amp; Make Money <br />
                            <span style={{color: 'white', fontSize: '42px'}}>EVERY. SINGLE. TIME.</span>
                            </p>
                        </div>
                    </div>
                    <div style={{width: '70%', borderRadius: '7px', border: '2px solid black', height: '55px', backgroundColor: '#F6F6F6', textAlign: 'center', position: 'absolute', left: '155px', top: '220px'}}>
                    {user ? 
                        <p style={{fontWeight: 'bold', color: '#666'}}>Your Unique Referral Link
                        <span style={{marginLeft: '40px', backgroundColor: 'white', paddingTop: '7px', paddingBottom: '7px', paddingLeft: '20px', fontSize: '12px', paddingRight: '5px'}}>https://shopnani.com/user/register?referrer={user.refID}
                        </span></p> 
                         : null}
                        
                    </div>

                    <div style={{marginTop: '70px', marginLeft: '150px', display: 'inline-block'}}>
                        <p style={{fontWeight: 'bold', color: '#666', marginLeft: '10px', marginBottom: '0'}}>Invite by Email</p>
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            className={classes.textField}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                        <br />
                        <Button variant="contained" className={classes.button}>
                            SEND INVITE
                        </Button>
                    </div>
                    <div style={{display: 'inline-block', marginLeft: '50px'}}>
                        <p style={{fontWeight: 'bold', color: '#666'}}>Invite by Social Media</p>
                        <p style={{color: '#666'}}>Share on Facebook</p>
                        <p style={{color: '#666'}}>Share on Twitter</p>
                        <p style={{color: '#666'}}>Share on Google Plus</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        products: store.products,
        isLoading: store.products.isLoading,
        error: store.products.error,
        user: store.user
    }
  }
  

export default connect(mapStateToProps, {getRefID})(withStyles(styles)(Referrals));

