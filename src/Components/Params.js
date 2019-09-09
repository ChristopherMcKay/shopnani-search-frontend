import React, { Component } from 'react'
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';



const styles = {
    marginLeft: '25px',
    marginTop: '10%',
    width: '200px',
    textAlign: 'left',
    fontSize: '14px',
    position: 'fixed',
    left: '0',
}

class Params extends Component {

    state = {
        value: [0, 100000]
    }

 handleChange = (event, newValue) => {
    this.setState({
        value: newValue
    }, () => {
        this.props.getMinMaxPrice(this.state.value)
    })
  }

  valuetext = (value) => {
    return `${value}°C`;
  }

    render() {
        return (
            <div style={styles}>
                <p style={{fontWeight: 'bold', fontFamily: 'Open Sans'}}>PRICE</p>
                <Slider
                    value={this.state.value}
                    onChange={this.handleChange}
                    valueLabelDisplay="auto"
                    aria-label="custom thumb label"
                    getAriaValueText={this.valuetext}
                    max={100000}
                    step={20000}
                    marks
                />
                <span style={{color: 'grey'}}>..................................................</span>

                <p style={{fontWeight: 'bold', fontFamily: 'Open Sans'}}>STORE</p>

                <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />} />}
                    label={<Typography style={{fontSize: '12px'}}>Amazon (IN)</Typography>}
                    labelPlacement="end"
                />
                <br />
                <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />} />}
                    label={<Typography style={{fontSize: '12px'}}>Flipkart</Typography>}
                    checked="true"
                    labelPlacement="end"
                />
                <br />
                <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />} />}
                    label={<Typography style={{fontSize: '12px'}}>ShopClues</Typography>}
                    labelPlacement="end"
                />
                <br />
                <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                    checkedIcon={<CheckBoxIcon fontSize="small" />} />}
                    label={<Typography style={{fontSize: '12px'}}>TataCliq</Typography>}
                    labelPlacement="end"
                />
                <span style={{color: 'grey'}}>..................................................</span>

                <p style={{fontWeight: 'bold', fontFamily: 'Open Sans'}}>USER RATINGS</p>
                
                

                <div style={{backgroundColor: '#EEE', textAlign: 'center', padding: '10px', marginBottom: '15px'}}>

                    <p style={{fontSize: '14px', fontWeight: 'bold', fontFamily: 'Open Sans'}}>Need Help?</p>
                    <p style={{fontWeight: 'bold', fontFamily: 'Open Sans'}}>Help us decide ></p>
                    
                    <button style={{backgroundColor: 'transparent', border: 'none'}}><svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg></button>
                </div>
            </div>
        )
    }
}

export default Params;