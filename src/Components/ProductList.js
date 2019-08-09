import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';



import Product from './Product';


class ProductList extends Component {

    componentDidUpdate() {
    }

    showAllProducts = () => {
        return this.props.products.products.map((product) => {
            return (
                <Product 
                    product={product}
                    key={product.productBaseInfoV1.productId}
                />
            )
          })
    } 
    

    render() {
        return (
            <div>
                {this.props.isLoading ? 
                <div>
                    <br />
                    <CircularProgress style={{color: 'grey'}} disableShrink />
                </div>
                :
                <Container component="main" maxWidth="sm" >
                    {this.showAllProducts()}
                </Container>
            }
            { this.props.error ? <div> <br /> <h3>{this.props.error}</h3> </div> : null}
                
            </div>
    
        )
    }
}

const mapStateToProps = (store) => {
    return {
        products: store.products,
        isLoading: store.products.isLoading,
        error: store.products.error
    }
  }
  
  export default connect(mapStateToProps, null)(ProductList);