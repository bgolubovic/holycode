import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useInputChange } from 'hooks/useInputChanges';

import { StateContext } from 'store/store';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200
    }
  },
  header: {
    height: theme.spacing(40),
    background: theme.palette.primary.main,
    padding: theme.spacing(6)
  },
  input: {
    display: 'none'
  }
}));

function AddBook() {
  const { dispatch } = React.useContext(StateContext);
  const [input, handleInputChange] = useInputChange();
  const classes = useStyles();
  const addBook = () => {
    const { title, author, pages, year, quantity } = input;
    const book = {
      title,
      author,
      pages: parseInt(pages),
      year: parseInt(year),
      quantity: parseInt(quantity)
    };
    dispatch({ type: 'addBook', payload: book });
  };
  return (
    <div>
      <header className={classes.header}>Add Book</header>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Title"
          name="title"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="Author"
          name="author"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="Number ofPages"
          name="pages"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="Year published"
          name="year"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="Quantity"
          name="quantity"
          onChange={handleInputChange}
        />
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleInputChange}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            Upload
          </Button>
        </label>
        <Button variant="contained" color="primary" onClick={addBook}>
          Save Book
        </Button>
      </form>
    </div>
  );
}

export default AddBook;
