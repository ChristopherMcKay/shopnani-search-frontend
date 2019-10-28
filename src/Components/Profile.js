import React, { Component } from 'react'
import PropTypes from 'prop-types';
import AltSearchHeader from './AltSearchHeader';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { withStyles } from '@material-ui/core/styles';

import Earnings from './Earnings';
import Referrals from './Referrals';
import AccountSettings from './AccountSettings';


const AntTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#00A991',
    },
    flexContainer: {
      alignItems: 'start'
    }
  })(Tabs);

const AntTab = withStyles(theme => ({
    root: {
      textTransform: 'none',
      borderBottom: '1px solid #AAA',
      width: '100%',
      minWidth: 72,
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
        color: '#999',
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
    wrapper: {
        justifyContent: 'flex-start',
        alignItems: 'start'
    }
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
      },
      demo1: {
        backgroundColor: theme.palette.background.paper,
        width: '1007px'
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
        <Box p={3} style={{ width: '100%', marginLeft: '35px', marginTop: '5px'}}>{children}</Box>
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };


class Profile extends Component {

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
            <div style={{backgroundColor: '#F6F6F6', height: '98vh'}}>
                <AltSearchHeader/>
               
                <div style={{display: 'flex', flexWrap: 'wrap', width: '100%'}}>
                <Paper square style={{boxShadow: 'none', marginLeft: '2%', width: '265px', height: '145px', marginTop: '30px'}}>
                    <AntTabs value={this.state.value} onChange={this.handleChange} aria-label="ant example" orientation="vertical">
                        <AntTab label="Account Settings" />
                        <AntTab label="My Earnings" />
                        <AntTab label="Referrals" />
                    </AntTabs>
                    <Typography className={classes.padding} />
                </Paper>
                <TabPanel value={this.state.value} index={0}>
                    <AccountSettings />
                </TabPanel>
                <TabPanel value={this.state.value} index={1}>
                    <Earnings />
                </TabPanel>
                <TabPanel value={this.state.value} index={2}>
                    <Referrals />
                </TabPanel>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Profile);
