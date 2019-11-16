import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FlipartImg from '../images/flipkart.png';
import SuvidealsImg from '../images/suvideals.png';
import AmazonImg from '../images/amazon.png';


const styles = theme => ({
    root: {
        padding: theme.spacing(3, 2),
        maxWidth: '1000px',
        minHeight: '200px',
        border: '0',
        boxShadow: 'none'
      },
      link: {
        margin: theme.spacing(1),
        color: 'black',
        fontWeight: 'bold'
      },
      img: {
        maxHeight: '150px',
        marginLeft: '50px',
        maxWidth: '130px'
      },
      info: {
          display: 'inline-block',
          maxWidth: '60%',
          textAlign: 'left',
          width: '400px',
          verticalAlign: 'text-top'
      },
      order: {
          display: 'inline-block',
          marginLeft: '40px',
          fontSize: '13px',
          textAlign: 'left',
          verticalAlign: 'text-top'

      }
  });

class Product extends Component {

    getProductInfo = () => {
            if(this.props.product.features.length > 0) {

            
            return this.props.product.features.map((product) => {
                return(
                    <li style={{fontSize: '13px'}}>{product}</li>
                )
            })
            
        } else {
            return null;
        }
    }

    compareChange = () => {
        let product = this.props.product;

        this.props.compareChange(product);
    }

    render() {


        const { classes } = this.props;

        const  product  = this.props.product;

        return (
            <Paper className={classes.root}>
                <div style={{display: 'inline-block', width: '220px', verticalAlign: 'text-top'}}>
                    <img src={product.image} className={classes.img} alt=""></img>
                    <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" onChange={this.compareChange} />}
                    label="Add to Compare"
                    labelPlacement="end"
                />
                </div>
                <div className={classes.info}>
                    <Link href={product.link} className={classes.link} target="_blank">
                        {product.title}
                    </Link>
                    <ul>
                        {this.getProductInfo()}
                    </ul>
                    <br />
                </div>
                <div className={classes.order}>
                        <span style={{fontSize: '20px', fontWeight: 'bold'}}>₹{product.sellingPrice}</span>
                        <br />
                        <span style={{color: 'grey', textDecoration: 'line-through'}}>₹{product.originalPrice}</span><span style={{color: 'green', fontWeight: 'bold'}}> {product.discountPercentage}% off</span>
                        <br />
                        <span style={{fontSize: '16px', fontWeight: 'bold'}}>Available on</span>
                        <br />
                        <Link href={product.link} target="_blank">
                            {product.seller === 'flipkart' ? 
                            <img src={FlipartImg} width={100} alt=""></img> 
                            :
                            null   
                        }
                        {product.seller === 'suviDeals' ? 
                            <img src={SuvidealsImg} width={90} alt=""></img> 
                            :
                            null   
                        }

                        {product.seller === 'amazon' ? 
                            <img src={AmazonImg} width={70} style={{marginTop: '10px'}} alt=""></img> 
                            :
                            null   
                        }
                        </Link>
                        
                </div>
                
               
            </Paper>
        )
    }
}

Product.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Product);