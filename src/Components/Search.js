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

import { searchProducts } from '../redux/actions/productAction';
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
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

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

function getSuggestions(value) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;
  
    return inputLength === 0
      ? []
      : this.props.products.products.filter(suggestion => {
          const keep =
            count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;
  
          if (keep) {
            count += 1;
          }
  
          return keep;
        });
}
  


function getSuggestionValue(suggestion) {
  return suggestion.label;
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
        position: 'relative',
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
      }
  });

 



class Search extends Component {

  state = {
    single: '',
    popper: '',
    stateSuggestions: [],
    items: []
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    getSuggestions(value)
    .then( stuff => {
      this.setState({
        stateSuggestions: stuff
      });
    })
    
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


  
    render() {


        const { classes } = this.props

        const autosuggestProps = {
          renderInputComponent,
          suggestions: this.state.stateSuggestions,
          onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
          onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
          getSuggestionValue,
          renderSuggestion,
        };

        return (
            <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
               
                <form className={classes.form}>

                <Autosuggest
                  {...autosuggestProps}
                  inputProps={{
                    classes,
                    name: 'food',
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
      products: state.products
    }
  }

export default connect(mapStateToProps, { searchProducts })(withStyles(styles)(Search));