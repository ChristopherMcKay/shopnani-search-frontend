import React, { Component } from 'react'
import FullLogo from './FullLogo';
import Search2 from './Search2';
import Menu from './Menu';
import LoginButton from './LoginButton';
import Sort from './Sort';
import Params from './Params';

import { searchProducts, sortProducts } from '../redux/actions/productAction';

import { withRouter } from "react-router";

import { connect } from 'react-redux';



const wholeStyles = {
    width: '100%',
    position: 'fixed',
    top: '0',
    zIndex: '990',
    backgroundColor: 'white',
    display: 'inline-block'
}

const styles = {
    float: 'left',
    width: '750px'
}

const rightStyle = {
    width: '160px',
    marginTop: '15px',
    float: 'right'
}

class SearchHeader extends Component {

    state = {
        product: this.props.products.searchTerm,
        sort: '',
        order: '',
        minPrice: '',
        maxPrice: '',
        sellers: ''
    }

    handleSubmit = (event) => {

        if(event) {
            event.preventDefault();
        }
    
        let searchObj = {
            product: this.state.product,
            sort: this.state.sort,
            order: this.state.order,
            minPrice: this.state.minPrice,
            maxPrice: this.state.maxPrice,
            sellers: this.state.sellers
        }
    
        this.props.searchProducts(searchObj, () => {
            console.log('finished!')
        });

        this.props.history.push('/search');
      }

      getSearchTerm = (searchTerm) => {
        this.setState({
            product: searchTerm
        })
      }

      getSellers = (newSellers) => {
          this.setState({
              sellers: newSellers
          }, () => {
              this.handleSubmit();
          })
      }

      getSortAndOrder = (sortOrder) => {

        let params = {}

        switch(sortOrder) {

            case 0:
                params = {
                    sort: '',
                    order: ''
                }

                this.props.sortProducts(params)

                break;
            case 1:

                params = {
                    sort: 'price',
                    order: 'asc'
                }
                this.props.sortProducts(params)

                break;
            case 2:
                    params = {
                        sort: 'price',
                        order: 'desc'
                    }

                this.props.sortProducts(params)

                break;
            case 3:
                    params = {
                        sort: 'discount',
                        order: 'desc'
                    }

                this.props.sortProducts(params)

                break;
            default:
                break;
        
        }
      }

      getMinMaxPrice = (minMax) => {
        this.setState({
            minPrice: minMax[0],
            maxPrice: minMax[1]
        }, () => {
            this.handleSubmit();
        })
    }

    render() {
        return (
            <React.Fragment >
                <form onSubmit={this.handleSubmit} >

                <div style={wholeStyles}>

                    <div style={styles}>
                        <FullLogo />
                        <Search2 getSearchTerm={this.getSearchTerm}/>
                        
                        
                    </div>
                    <div style={rightStyle}>
                            <Menu />
                            <LoginButton />
                        </div>
                    <div style={{borderBottom: '0.5px solid lightgrey', display: 'flex', flexWrap: 'wrap', marginRight: '5px', backgroundColor: 'white', clear: 'both'}}>
                        <span style={{fontWeight: 'bold', marginTop: '15px', marginLeft: '19%'}}>Sort By</span>
                        <Sort getSortAndOrder={this.getSortAndOrder} />
                    </div>
                </div>
                <Params 
                    getMinMaxPrice={this.getMinMaxPrice}
                    getSellers={this.getSellers}
                />
                </form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      products: state.products,
      suggestions: state.suggestions
    }
  }

export default connect(mapStateToProps, { searchProducts, sortProducts })(withRouter(SearchHeader));
