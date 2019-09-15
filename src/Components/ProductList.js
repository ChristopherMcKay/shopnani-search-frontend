import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import ReactPaginate from 'react-paginate';
import { withStyles } from '@material-ui/core/styles';

import Product from './Product';

const styles = theme  => ({
    container: {
        color: '#1a89e6',
        fontFamily: 'Open Sans',
        fontSize: '',
        display: 'flex',
        width: '300px',
        justifyContent: 'space-evenly',
        listStyleType: 'none',
        fontWeight: '600'
    },
    previous: {
        cursor: 'pointer'
    },
    next: {
        cursor: 'pointer'
    },
    active: {
        color: 'grey',
    },
    disabled: {
        display: 'none'
    },
    activeLink: {
        cursor: 'pointer'
    },
    page: {
        cursor: 'pointer'
    }
})


class ProductList extends Component {

    state = {
        offset: 0,
        data: [],
        elements: [],
        perPage: 8,
        currentPage: 0,
    };

    loadData = () => {
        console.log('this got called!!!!')
        this.setState({
            data: this.props.products.products,
            pageCount: Math.ceil(this.props.products.products.length / this.state.perPage)
          }, () => this.setElementsForCurrentPage());
      }

      componentDidUpdate(prevProps) {
          if(this.props.products.products !== prevProps.products.products) {
            this.loadData();
          }
      }

      setElementsForCurrentPage() {
        let elements = this.state.data
                      .slice(this.state.offset, this.state.offset + this.state.perPage)
                      .map(product => {
                        return (
                            <Product 
                                product={product}
                            />
                        )
                      });

        this.setState({ elements: elements });
      }
    


    handlePageClick = (data) => {
        const selectedPage = data.selected;
        const offset = selectedPage * this.state.perPage;
        this.setState({ currentPage: selectedPage, offset: offset }, () => {
          this.setElementsForCurrentPage();
        });
      }

    

    render() {

        const { classes } = this.props;

        return (
            <div style={{display: 'inline-block', marginBottom: '100px'}}>
                {
                <Container component="main" maxWidth="md" style={{marginTop: '170px', marginLeft: '260px'}}>
                    {this.props.isLoading ? 
                        <div>
                        <CircularProgress style={{color: 'grey', marginLeft: '450px', marginTop: '250px'}} disableShrink />
                    </div>
                        :
                        null
                        }

                        {this.state.elements.length > 0 & this.props.isLoading == false ? 
                            <div>

                                {this.state.elements}
                                <ReactPaginate
                                previousLabel={"← Previous"}
                                nextLabel={"Next →"}
                                breakLabel={<span className="gap">...</span>}
                                pageCount={this.state.pageCount}
                                onPageChange={this.handlePageClick}
                                forcePage={this.state.currentPage}
                                containerClassName={classes.container}
                                previousLinkClassName={classes.previous}
                                nextLinkClassName={classes.next}
                                disabledClassName={classes.disabled}
                                activeClassName={classes.active}
                                activeLinkClassName={classes.activeLink}
                                pageClassName={classes.page}
                                />
                            </div>

                        :
                            null
                        }
                </Container>
            }
            { this.props.error ?
                <Container component="main" maxWidth="md" style={{marginTop: '200px', marginLeft: '500px'}}>
                    <h3>{this.props.error}</h3> 
                </Container> : null}
                
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
  
  export default connect(mapStateToProps, null)(withStyles(styles)(ProductList));