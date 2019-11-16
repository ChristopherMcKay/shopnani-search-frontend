import React, { Component } from 'react'
import Autosuggest from 'react-autosuggest'
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';

import MobContact from './MobContact';

import { withRouter } from "react-router";

import { searchProducts } from '../../redux/actions/productAction';
import { getSuggestions } from '../../redux/actions/suggestionAction';

import { connect } from 'react-redux';


function renderInputComponent(inputProps) {
  const { classes, ref, ...other } = inputProps;
  return (
    <InputBase
      fullWidth
      
      className={classes.input}
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
      container: {
        width: '84%',
        border: 'none'
      },
      containerz: {
        position: 'relative',
        border: '2px solid #00A991',
        borderRadius: '30px',
        backgroundColor: 'white',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        maxHeight: '40px',
        width: '320px',
        textAlign: 'center'
      },
      suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing(1),
        left: 0,
        right: 0,
        textAlign: 'center',
        width: '90%',
        margin: 'auto'
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
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      input: {
        fontFamily: 'Open Sans',
        marginTop:'3px',
        marginBottom: '5px',
        fontSize: '14px',
        letterSpacing: '5px'
      }
  });

 



class Search extends Component {

  state = {
    single: '',
    popper: '',
    stateSuggestions: [],
    items: [],
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
        sort: '',
        order: '',
        minPrice: '',
        maxPrice: '',
        sellers: ''
    }

    this.props.searchProducts(searchObj);

    this.props.history.push('/search');
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
            <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>

                <span style={{fontFamily: 'Open Sans', fontSize: '24px'}}>This time I wanna buy...</span>
               
                <form className={classes.form} onSubmit={this.handleSubmit}>


                <Container component="main" maxWidth="sm" className={classes.containerz}>

                <Autosuggest
                  {...autosuggestProps}
                  inputProps={{
                    classes,
                    name: 'product',
                    id: 'react-autosuggest-simple',
                    label: 'Search here....',
                    placeholder: 'Search here...',
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
               
                    
                	<button style={{border: 'none', backgroundColor: 'transparent', padding: '0', marginTop: '3px', marginLeft: '10px'}}><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg></button>
							
            </Container>
          

            <MobContact />
                
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

export default connect(mapStateToProps, { searchProducts, getSuggestions })(withStyles(styles)(withRouter(Search)));
