import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const styles = theme => ({
    root: {
        padding: theme.spacing(3, 2),
        maxWidth: '600px'
      },
      link: {
        margin: theme.spacing(1),
      },
      img: {
        maxHeight: '150px',
        float: 'left',
        display: 'block'
      },
      info: {
          float: 'right',
          display: 'block',
          maxWidth: '60%'
      },
      extra: {
          clear: 'both'
      }
  });

class Product extends Component {
    render() {


        const { classes } = this.props;

        const  product  = this.props.product.productBaseInfoV1;

        return (
            <Paper className={classes.root}>
                <img src={product.imageUrls['200x200']} className={classes.img}></img>
                <div className={classes.info}>
                    <Link href={product.productUrl} className={classes.link}>
                        {product.title}
                    </Link>
                    <Typography component="h3">
                        ₹ {product.flipkartSpecialPrice.amount}
                    </Typography>
                </div>
                <div className={classes.extra}></div>
            </Paper>
        )
    }
}

Product.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Product);