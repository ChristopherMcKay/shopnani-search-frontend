import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import { withStyles } from '@material-ui/core/styles';

const AntTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#00A991',
    },
  })(Tabs);

const AntTab = withStyles(theme => ({
    root: {
      textTransform: 'none',
      minWidth: 72,
      fontSize: '12px',
      fontWeight: 'bold',
      marginRight: theme.spacing(4),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#00A991',
        opacity: 1,
      },
      '&$selected': {
        color: '#00A991',
        fontWeight: 'bold',
      },
      '&:focus': {
        color: '#00A991',
      },
    },
    selected: {},
  }))(props => <Tab disableRipple {...props} />);


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
        fontWeight: 'bold'
    },
    textField: {
        width: '200px',
      },
    button: {
        width: '150px',
        backgroundColor: '#00A991',
        color: 'white',
        height: '35px',
        marginBottom: '30px',
        marginTop: '20px'
      },
      demo1: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
      },
      padding: {
        padding: theme.spacing(3),
      },
  });

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        <Box p={3} style={{ width: '100%', marginLeft: '35px', padding: '0'}}>{children}</Box>
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

class AccountSettings extends Component {

    state = {
        value: 0
    }

    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
      }

    render() {

        const { classes } = this.props

        return (
            <div>
                <div className={classes.demo1}>
                  <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>

                    <AntTabs value={this.state.value} onChange={this.handleChange} aria-label="ant example">
                        <AntTab label="Personal Details" />
                        <AntTab label="Change Password" />
                    </AntTabs>
                    <Typography className={classes.padding} />
                  </div>

                <TabPanel value={this.state.value} index={0}>
                <div style={{marginRight: '3%'}}>
                    <p style={{fontWeight: 'bold', fontSize: '12px', color: '#666', marginLeft: '10px', marginBottom: '0'}}>Full Name:</p>
                        <TextField
                            id="outlined-email-input"
                            className={classes.textField}
                            type="text"
                            name="curpswd"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                </div>
                        <div style={{display: 'inline-block'}}>
                            <p style={{fontWeight: 'bold', fontSize: '12px', color: '#666', marginLeft: '10px', marginBottom: '0'}}>Email address:</p>
                            <TextField
                                id="outlined-email-input"
                                className={classes.textField}
                                type="email"
                                name="newpswd"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                            />
                        </div>
                        <br />
                        <p style={{fontWeight: 'bold', fontSize: '12px', color: '#666', marginLeft: '10px', marginBottom: '20px'}}>Mobile Number:</p>
                            <TextField
                                id="outlined-email-input"
                                className={classes.textField}
                                type="text"
                                name="newpswd"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                            />
                            <br />
                            <FormControlLabel
                    value="end"
                    control={<Checkbox className={classes.checkbox}  color="default" icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />} />}
                    label={<Typography style={{fontSize: '12px', fontWeight: 'bold', color: '#555'}}>Receive our weekly newsletters</Typography>}
                    labelPlacement="end"
                />
                <br />
                <FormControlLabel
                    value="end"
                    control={<Checkbox className={classes.checkbox} color="default" icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />} />}
                    label={<Typography style={{fontSize: '12px', fontWeight: 'bold', color: '#555'}}>Receive email when I get referral earnings</Typography>}
                    labelPlacement="end"
                />
                <br />
                        <Button variant="contained" className={classes.button}>
                            Save Changes
                        </Button>
                </TabPanel>
                <TabPanel value={this.state.value} index={1}>
                    <p style={{fontWeight: 'bold', fontSize: '12px', color: '#666', marginLeft: '10px', marginBottom: '0'}}>Current password:</p>
                        <TextField
                            id="outlined-email-input"
                            className={classes.textField}
                            type="email"
                            name="curpswd"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                        <br />
                        <p style={{fontWeight: 'bold', fontSize: '12px', color: '#666', marginLeft: '10px', marginBottom: '0'}}>New password:</p>
                        <TextField
                            id="outlined-email-input"
                            className={classes.textField}
                            type="email"
                            name="newpswd"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                        <br />
                        <p style={{fontWeight: 'bold', fontSize: '12px', color: '#666', marginLeft: '10px', marginBottom: '0'}}>Confirm new password:</p>
                        <TextField
                            id="outlined-email-input"
                            className={classes.textField}
                            type="email"
                            name="newpswd"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                        <br />
                        <Button variant="contained" className={classes.button}>
                            Save Changes
                        </Button>
                </TabPanel>
                </div>

            </div>
        )
    }
}

export default withStyles(styles)(AccountSettings);
