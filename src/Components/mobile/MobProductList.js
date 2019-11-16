import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import ReactPaginate from 'react-paginate';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';


import MobProduct from './MobProduct';

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
    },
    compare: {
        width: '400px',
        height: '310px',
        position: 'fixed',
        bottom: '50px',
        right: '25px',
        border: '2px solid grey',
        paddingTop: '30px',
        backgroundColor: 'white'
    },
    products: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    buttons: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: '30px',
    },
    img: {
        width: '70px'
    }
})


class MobProductList extends Component {

    state = {
        offset: 0,
        data: [],
        elements: [],
        perPage: 8,
        currentPage: 0,
        compareProducts: []
    };

    componentDidMount() {
        this.loadData();
    }


    loadData = () => {
        this.setState({
            data: this.props.products.products,
            currentPage: this.props.products.currentPage,
            offset: this.props.products.offset,
            pageCount: Math.ceil(this.props.products.products.length / this.state.perPage)
          }, () => this.setElementsForCurrentPage());
      }

      componentDidUpdate(prevProps) {
        
          if(this.props !== prevProps) {
            this.loadData();
          }
      }

      compareChange = (product) => {
        let exists = false;

        for(let i = 0; i < this.state.compareProducts.length; i++) {
            if(this.state.compareProducts[i].title === product.title) {
                exists = true;
            }
        }

        if(!exists) {
            let newArr = this.state.compareProducts;
            newArr.push(product);
            this.setState({
                compareProducts: newArr
            }, () => {
                console.log(this.state.compareProducts)
            })
        }
        else {
            let currentProducts = this.state.compareProducts;

            let newArr = currentProducts.filter(pro => pro.title !== product.title)

            this.setState({
                compareProducts: newArr
            }, () => {
                console.log(this.state.compareProducts)
            })
        }

      }

      setElementsForCurrentPage() {
        let elements = this.state.data
                      .slice(this.state.offset, this.state.offset + this.state.perPage)
                      .map(product => {
                        return (
                            <MobProduct 
                                product={product}
                                compareChange={this.compareChange}
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

    removeCompareProducts = () => {
        let newArr = [];

        this.setState({
            compareProducts: newArr
        })
    }

    render() {

        const { classes } = this.props;

        return (
            <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                {
                <Container component="main" maxWidth="md" style={{marginTop: '10px', marginLeft: '10px'}}>
                    {this.props.isLoading ? 
                        <div>
                        <CircularProgress style={{color: 'grey', marginTop: '80px', marginBottom: '50px', marginLeft: '46%'}} disableShrink />
                    </div>
                        :
                        null
                        }

                        {this.state.elements.length > 0 & this.props.isLoading === false ? 
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

                { this.props.error ?
                    <Container component="main" maxWidth="md" style={{marginTop: '10px', marginLeft: '10px'}}>
                        <h4>{this.props.error}</h4> 
                    </Container>
                    : null}

                    <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '50px'}}>
                    <div style={{backgroundColor: '#EEE', textAlign: 'center', padding: '10px', marginBottom: '5px', width: '90%'}}>


                    <p style={{fontSize: '14px', fontWeight: 'bold', fontFamily: 'Open Sans'}}>Need Help?</p>

                    <Link href="https://blog.shopnani.com/contact-us/" target="_blank"> 
                        <p style={{fontWeight: 'bold', fontFamily: 'Open Sans', color: 'black'}}>Help us decide ></p>
                    </Link>

                    <Link href="https://blog.shopnani.com/contact-us/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>
                    </Link>
                    </div>
                </div>
                </Container>
            }
            

                {
                    this.state.compareProducts.length > 0 ? 
                    <div className={classes.compare}>

                        <div className={classes.products}>
                            <div style={{textAlign: 'center'}}>
                                <img src={this.state.compareProducts[0].image} className={classes.img} alt=""></img>
                                <p>{this.state.compareProducts[0].title.slice(0, 15)}...</p>
                            </div>

                            { this.state.compareProducts[1] ?
                            <div style={{textAlign: 'center'}}>
                                <img src={this.state.compareProducts[1].image} className={classes.img}alt=""></img>
                                <p>{this.state.compareProducts[1].title.slice(0, 15)}...</p>
                            </div>
                            :
                            null
                            }
                        </div>

                        <div className={classes.buttons}>
        
                            <button style={{width: '160px', height: '50px', backgroundColor: 'white', fontSize: '16px', border: 'none', fontWeight: 'bold', fontFamily: 'Open Sans', cursor: 'pointer'}} onClick={this.removeCompareProducts}>
                                REMOVE ALL
                            </button>

                            { this.state.compareProducts[1] ?
                            <button style={{width: '160px', height: '50px', backgroundColor: '#1a89e6', fontSize: '16px', color: 'white', border: 'none', fontWeight: 'bold',   fontFamily: 'Open Sans', cursor: 'pointer'}}>
                                COMPARE  <span style={{padding: '3px', backgroundColor: '#1571d1'}}> {this.state.compareProducts.length}</span>
                            </button>
                            :
                            null
                            }

                        </div>

                    </div>
                    :
                    null
                }
                
                
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
  
  export default connect(mapStateToProps, null)(withStyles(styles)(MobProductList));