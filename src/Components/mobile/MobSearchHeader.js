import React, { Component } from 'react'
import MobFullLogo from './MobFullLogo';
import MobSearch2 from './MobSearch2';
import MobLoginButton from './MobLoginButton';
import MobSort from './MobSort';
import MobParams from './MobParams';

import { searchProducts, sortProducts } from '../../redux/actions/productAction';

import { withRouter } from "react-router";

import { connect } from 'react-redux';




const styles = {
    textAlign: 'center',
    position: 'relative',
    width: '100%'
}

const buttonStyles = {
    position: 'absolute',
    right: '32px',
    top: '25px'
}

const logoStyles = {
    position: 'absolute',
    left: '15px',
    top: '1px'
}

class MobSearchHeader extends Component {

    state = {
        product: this.props.products.searchTerm,
        sort: '',
        order: '',
        minPrice: '',
        maxPrice: '',
        sellers: ''
    }

    handleSubmit = (event) => {

        console.log('we ar here')

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


        switch(sortOrder) {

            case 0:

                this.setState({
                    sort: '',
                    order: ''
                }, () => {
                    this.props.sortProducts(this.state)
                })

                break;
            case 1:

                this.setState({
                    sort: 'price',
                    order: 'asc'
                }, () => {
                    this.props.sortProducts(this.state)
                })

                break;
            case 2:
                        
                this.setState({
                    sort: 'price',
                    order: 'desc'
                }, () => {
                    this.props.sortProducts(this.state)
                })

                break;
            case 3:
                    
                        
                this.setState({
                    sort: 'discount',
                    order: 'desc'
                }, () => {
                    this.props.sortProducts(this.state)
                })       

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
            this.props.sortProducts(this.state);
        })
    }

    render() {
        const { user } = this.props
        return (
            <React.Fragment >

                <div style={styles}>
                <form onSubmit={this.handleSubmit} >

                        <div style={logoStyles}>
                            <MobFullLogo />
                        </div>

                        <MobSearch2 getSearchTerm={this.getSearchTerm}/>

                        <div style={{borderBottom: '0.5px solid lightgrey', backgroundColor: 'white', width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <MobSort getSortAndOrder={this.getSortAndOrder} />
                    </div>
                        
                    <div>
                        <MobParams 
                        getMinMaxPrice={this.getMinMaxPrice}
                        getSellers={this.getSellers}
                        />
                    </div>
                    
                </form>
                            {/* <Menu /> */}
                            <div style={buttonStyles}>
                            {user.isAuth ? <p style={{display: 'inline', fontSize: '12px'}}>Welcome, {user.user.name}! <img src={user.user.avatar} width={30} style={{borderRadius: '15px', marginLeft: '5px'}} alt=""></img></p> : <MobLoginButton {...this.props} />}
                            </div>

                    

                    </div>
                
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      products: state.products,
      suggestions: state.suggestions,
      user: state.user
    }
  }

export default connect(mapStateToProps, { searchProducts, sortProducts })(withRouter(MobSearchHeader));
