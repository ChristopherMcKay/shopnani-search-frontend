import React, { Component } from 'react'
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest'
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


import { searchProducts } from '../redux/actions/productAction';
import { getSuggestions } from '../redux/actions/suggestionAction';

import { connect } from 'react-redux';


function renderInputComponent(inputProps) {
  const { classes, inputRef = () => {}, ref, ...other } = inputProps;
  return (
    <TextField
      fullWidth
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input,
        },
      }}
      {...other}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion, query);
  const parts = parse(suggestion, matches);
  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map(part => (
          <span key={part.text} style={{ fontWeight: part.highlight ? 500 : 400 }}>
            {part.text}
          </span>
        ))}
      </div>
    </MenuItem>
  );
} 


function getSuggestionValue(suggestion) {
  return suggestion;
}

const styles = theme => ({
    '@global': {
      body: {
        backgroundColor: theme.palette.common.white,
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    grid: {
        width: '60%',
      },
      root: {
        height: 250,
        flexGrow: 1,
      },
      containerz: {
        position: 'relative',
        border: '2px solid #00A991',
        borderRadius: '30px',
        padding: '10px',
        backgroundColor: 'white'
      },
      suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing(1),
        left: 0,
        right: 0,
      },
      suggestion: {
        display: 'block',
      },
      suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
      },
      divider: {
        height: theme.spacing(2),
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      }
  });

 



class Search extends Component {

  state = {
    single: '',
    popper: '',
    stateSuggestions: [],
    items: [],
    values: {
        sort: '',
        order: '',
        minPrice: '',
        maxPrice: ''
    }
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    this.props.getSuggestions(value);
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      stateSuggestions: []
    })
  };

  handleChange = name => (event, { newValue }) => {
    this.setState({
      ...this.state,
      [name]: newValue,
    });
  };

  handleSubmit = (event) => {

    event.preventDefault();

    let searchObj = {
        product: event.target.product.value,
        sort: event.target.sort.value,
        order: event.target.order.value,
        minPrice: event.target.minPrice.value,
        maxPrice: event.target.maxPrice.value
    }

    this.props.searchProducts(searchObj);
  }

  sortHandleChange = (event) => {
    this.setState({
        values: {
        order: this.state.values.order,
        minPrice: this.state.values.minPrice,
        maxPrice: this.state.values.maxPrice,
        [event.target.name]: event.target.value
        }
      });
  }

  orderHandleChange = (name) => (event) => {

    this.setState({
        values: {
        sort: this.state.values.sort,
        minPrice: this.state.values.minPrice,
        maxPrice: this.state.values.maxPrice,
        [event.target.name]: event.target.value
        }
      });
  }

  priceHandleChange = (name) => (event) => {
      this.setState({
          values: {
            sort: this.state.values.sort,
            order: this.state.values.order,
            [event.target.name]: event.target.value            
          }
      })
  }

  
    render() {


        const { classes } = this.props

        const autosuggestProps = {
          renderInputComponent,
          suggestions: this.props.suggestions.suggestions,
          onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
          onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
          getSuggestionValue,
          renderSuggestion,
        };

        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <h1>This time I wanna buy...</h1>
               
                <form className={classes.form} onSubmit={this.handleSubmit}>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="sort">Sort by</InputLabel>
                    <Select
                        value={this.state.values.sort}
                        onChange={this.sortHandleChange}
                        inputProps={{
                            name: 'sort',
                            id: 'sort-simple',
                        }}
                    >
                    <MenuItem value={'price'}>Price</MenuItem>
                    <MenuItem value={'discount'}>Discount</MenuItem>
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="order">Order</InputLabel>
                    <Select
                        value={this.state.values.order}
                        onChange={this.orderHandleChange('order')}
                        inputProps={{
                            name: 'order',
                            id: 'order-simple',
                        }}
                    >
                    <MenuItem value={'asc'}>Ascending</MenuItem>
                    <MenuItem value={'desc'}>Descending</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    id="standard-number"
                    label="Minimum Price ₹"
                    value={this.state.values.minPrice}
                    onChange={this.priceHandleChange('minPrice')}
                    type="number"
                    className={classes.textField}
                    inputProps={{
                        name: 'minPrice',
                    }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    margin="normal"
                />

                <br />

                <TextField
                    id="standard-number"
                    label="Maximum Price ₹"
                    value={this.state.values.maxPrice}
                    onChange={this.priceHandleChange('maxPrice')}
                    type="number"
                    className={classes.textField}
                    inputProps={{
                        name: 'maxPrice',
                    }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    margin="normal"
                />

                <Container component="main" maxWidth="xs" className={classes.containerz}>

                <Autosuggest
                  {...autosuggestProps}
                  inputProps={{
                    classes,
                    name: 'product',
                    id: 'react-autosuggest-simple',
                    label: 'Search for a product',
                    placeholder: 'Start typing...',
                    value: this.state.single,
                    onChange: this.handleChange('single'),
                  }}
                  theme={{
                    container: classes.container,
                    suggestionsContainerOpen: classes.suggestionsContainerOpen,
                    suggestionsList: classes.suggestionsList,
                    suggestion: classes.suggestion,
                  }}
                  renderSuggestionsContainer={options => (
                    <Paper {...options.containerProps} square>
                      {options.children}
                    </Paper>
                  )}
                />
                	<button style={{border: 'none'}}><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg></button>
							
            </Container>
            Couldn't find a product you were looking for? Contact us.

                
                </form>
            </div>
            <div>

              { this.state.items.length !== 0 ? this.showFood() : null }
              <form className={classes.form} onSubmit={this.foodSubmit}>
                { this.state.items.length !== 0 ? <TextField
                      id="date"
                      label="Date"
                      type="date"
                      defaultValue="2017-05-24"
                      className={classes.textField}
                      InputLabelProps={{
                      shrink: true,
                      }}
                  />  : null }
                { this.state.items.length !== 0 ? <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                  >
                      Submit
                  </Button> : null }
                </form>

                  
            </div>
            </Container>
            
        )
    }
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  const mapStateToProps = (state) => {
    return {
      products: state.products,
      suggestions: state.suggestions
    }
  }

export default connect(mapStateToProps, { searchProducts, getSuggestions })(withStyles(styles)(Search));