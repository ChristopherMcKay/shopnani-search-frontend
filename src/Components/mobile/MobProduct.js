import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import FlipartImg from '../../images/flipkart.png';
import SuvidealsImg from '../../images/suvideals.png';
import AmazonImg from '../../images/amazon.png';


const styles = theme => ({
    root: {
        maxWidth: '450px',
        minHeight: '290px',
        border: '0',
        boxShadow: 'none',
        marginBottom: '15px',
        borderBottom: '2px solid #888',
        paddingTop: '10px'

      },
      link: {
        color: 'black',
        fontSize: '10px',
        fontWeight: 'bold',
        marginBottom: '20px',
        maxWidth: '160px',
        float: 'right',
        marginRight: '20px'
      },
      img: {
        maxHeight: '100px',
        maxWidth: '85px',
        float: 'left',
        marginLeft: '40px'        
      },
      info: {
          display: 'block',
          textAlign: 'left',
          width: '180px',
          float: 'left'
      },
      order: {
          display: 'block',
          fontSize: '11px',
          textAlign: 'right',

      }
  });

class MobProduct extends Component {

    getProductInfo = () => {
            if(this.props.product.features.length > 0) {

            
            return this.props.product.features.map((product) => {
                return(
                    <li style={{fontSize: '11px'}}>{product}</li>
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
                <div style={{display: 'block', width: '100%', minHeight: '120px'}}>
                    <img src={product.image} className={classes.img} alt=""></img>
                    {/* <FormControlLabel
                    value="end"
                    control={<Checkbox color="primary" onChange={this.compareChange} />}
                    label="Add to Compare"
                    labelPlacement="end"
                /> */}
                 <Link href={product.link} className={classes.link} target="_blank">
                        {product.title}
                    </Link>
               
                </div>

                <div className={classes.order}>
               
                <ul className={classes.info}>
                        {this.getProductInfo()}
                    </ul>

                    <div style={{marginRight: '30px', float: 'right', marginTop: '6px'}}>

                        <span style={{fontSize: '15px', fontWeight: 'bold'}}>₹{product.sellingPrice}</span>
                        <br />
                        <span style={{color: 'grey', textDecoration: 'line-through'}}>₹{product.originalPrice}</span><span style={{color: 'green', fontWeight: 'bold'}}> {product.discountPercentage}% off</span>
                        <br />
                        <span style={{fontSize: '11px', fontWeight: 'bold'}}>Available on</span>
                        <br />
                        <Link href={product.link} target="_blank">
                            {product.seller === 'flipkart' ? 
                            <img src={FlipartImg} width={90} alt=""></img> 
                            :
                            null   
                        }
                        {product.seller === 'suviDeals' ? 
                            <img src={SuvidealsImg} width={80} alt=""></img> 
                            :
                            null   
                        }

                        {product.seller === 'amazon' ? 
                            <img src={AmazonImg} width={60} style={{marginTop: '10px'}} alt=""></img> 
                            :
                            null   
                        }
                        </Link>
                        </div>
                        
                </div>
                
               
            </Paper>
        )
    }
}

MobProduct.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(MobProduct);