import React, { Component } from 'react'
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Link from '@material-ui/core/Link';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';



const styles = {
    marginLeft: '0px',
    marginTop: '10px',
    width: '100%',
    textAlign: 'left',
    fontSize: '14px',
}

const styled = theme  => ({
    checkbox: {
        color: '#1a89e6',
        '&$checked': {
            color: '#1a89e6',
          }
    },
    heading: {
        fontSize: '10px',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    root: {
        minHeight: '10px',
        padding: '0 18px 0 18px'
    }
})


const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 20000,
      label: '20K',
    },
    {
      value: 40000,
      label: '40K',
    },
    {
      value: 60000,
      label: '60K',
    },
    {
        value: 80000,
        label: '80K',
    },
    {
        value: 100000,
        label: '100K',
    },
  ];

class Params extends Component {

    state = {
        value: [0, 100000],
        sellers: ''
    }

 handleChange = (event, newValue) => {
    this.setState({
        value: newValue
    })
  }

  handleChangeCommit = (event, newValue) => {
    this.setState({
        value: newValue
    }, () => {
        this.props.getMinMaxPrice(this.state.value)
    })
  }

  valuetext = (value) => {
    return `${value}°C`;
  }

  amazonCheck = (event) => {
    if(event.target.checked === true) {
        this.setState({
            sellers: this.state.sellers + 'amazon-'
        }, () => {
            this.props.getSellers(this.state.sellers)
        })
    }
    else {
        this.setState({
            sellers: this.state.sellers.replace('amazon-', '')
        }, () => {
            this.props.getSellers(this.state.sellers)
        })
    }
  }

  flipkartCheck = (event) => {
    if(event.target.checked === true) {
        this.setState({
            sellers: this.state.sellers + 'flipkart-'
        }, () => {
            this.props.getSellers(this.state.sellers)
        })
    }
    else {
        this.setState({
            sellers: this.state.sellers.replace('flipkart-', '')
        }, () => {
            this.props.getSellers(this.state.sellers)
        })
    }
  }

  suviDealsCheck = (event) => {
    if(event.target.checked === true) {
        this.setState({
            sellers: this.state.sellers + 'suviDeals-'
        }, () => {
            this.props.getSellers(this.state.sellers)
        })
    }
    else {
        this.setState({
            sellers: this.state.sellers.replace('suviDeals-', '')
        }, () => {
            this.props.getSellers(this.state.sellers)
        })
    }
  }

  valueLabelFormat = (value) => {
    return marks.findIndex(mark => mark.value === value) + 1;
  }

    render() {

        const { classes } = this.props;


        return (
            <ExpansionPanel>
                    <ExpansionPanelSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    classes={{root: classes.root}}
                    >
                    <Typography className={classes.heading}>FILTERS <ExpandMoreIcon /></Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <div style={styles}>
                <div style={{width: '100%', paddingBottom: '15px', marginBottom: '10px'}}>
                <p style={{fontWeight: 'bold', fontFamily: 'Open Sans'}}>PRICE</p>
                <Slider
                    value={this.state.value}
                    onChange={this.handleChange}
                    onChangeCommitted={this.handleChangeCommit}
                    valueLabelFormat={this.valueLabelFormat}
                    aria-labelledby="discrete-slider-restrict"
                    getAriaValueText={this.valuetext}
                    max={100000}
                    step={null}
                    marks={marks}
                    className={classes.checkbox}
                />
                </div>
                {/* <span style={{color: 'grey', display: 'block'}}>..................................................</span> */}

                <p style={{fontWeight: 'bold', fontFamily: 'Open Sans'}}>STORE</p>

                <FormControlLabel
                    value="end"
                    control={<Checkbox className={classes.checkbox} onChange={this.amazonCheck} color="default" icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />} />}
                    label={<Typography style={{fontSize: '12px'}}>Amazon (IN)</Typography>}
                    labelPlacement="end"
                />
                <br />
                <FormControlLabel
                    value="end"
                    control={<Checkbox className={classes.checkbox} onChange={this.flipkartCheck} color="default" icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />} />}
                    label={<Typography style={{fontSize: '12px'}}>Flipkart</Typography>}
                    labelPlacement="end"
                />
                <br />
                <FormControlLabel
                    value="end"
                    control={<Checkbox className={classes.checkbox} onChange={this.suviDealsCheck} color="default" icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />} />}
                    label={<Typography style={{fontSize: '12px'}}>suviDeals</Typography>}
                    labelPlacement="end"
                />
                {/* <span style={{color: 'grey', display: 'block'}}>..................................................</span> */}

                {/* <p style={{fontWeight: 'bold', fontFamily: 'Open Sans'}}>USER RATINGS</p> */}
                
            </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            
        )
    }
}

export default withStyles(styled)(Params);