import React, { Component } from 'react'
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    marginLeft: '25px',
    marginTop: '10%',
    width: '200px',
    textAlign: 'left',
    fontSize: '14px',
    position: 'fixed',
    left: '0',
}

const styled = theme  => ({
    checkbox: {
        color: '#1a89e6',
        '&$checked': {
            color: '#1a89e6',
          }
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
            <div style={styles}>
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
                <span style={{color: 'grey', display: 'block'}}>..................................................</span>

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
                <span style={{color: 'grey', display: 'block'}}>..................................................</span>

                <p style={{fontWeight: 'bold', fontFamily: 'Open Sans'}}>USER RATINGS</p>
                
                

                <div style={{backgroundColor: '#EEE', textAlign: 'center', padding: '10px', marginBottom: '15px'}}>


                    <p style={{fontSize: '14px', fontWeight: 'bold', fontFamily: 'Open Sans'}}>Need Help?</p>

                    <Link href="https://blog.shopnani.com/contact-us/" target="_blank"> 
                        <p style={{fontWeight: 'bold', fontFamily: 'Open Sans', color: 'black'}}>Help us decide ></p>
                    </Link>
                   
                    <Link href="https://blog.shopnani.com/contact-us/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                    </Link>
                    
                </div>
            </div>
        )
    }
}

export default withStyles(styled)(Params);