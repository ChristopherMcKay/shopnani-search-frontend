import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
    color: 'black',
    fontFamily: 'Open Sans',
    fontSize: '12px',
    minWidth: '60px'
}

export default class Sort extends Component {

    state = {
        value: 0
    }

 handleChange = (event, newValue) => {
    this.setState({
        value: newValue
    }, () => {
        this.props.getSortAndOrder(this.state.value)
    })
  }

  render() {

    return (
        <Paper square style={{display: 'block', boxShadow: 'none'}}>
        <Tabs
            value={this.state.value}
            indicatorColor="primary"
            textColor="primary"
            onChange={this.handleChange}
            aria-label="disabled tabs example"
            
        >
            <Tab label="Relevance" style={styles} />
            <Tab label="Price - Low to High" style={styles} />
            <Tab label="Price - High to Low" style={styles} />
            <Tab label="Discount" style={styles} />

        </Tabs>
        </Paper>
    );
  }
}