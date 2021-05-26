import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import {
  createMuiTheme,
  ThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#fff",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const styles = {
  root: {
    background: "black",
  },
  input: {
    color: "white",

    border: "1px solid #fff",
    borderRadius: "20px",
  },
};

const AddTransaction = (props) => {
  const { classes } = props;
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <form onSubmit={onSubmit} className="formAddTransaction">
          <div className="form-control">
            <label htmlFor="text">Name</label>
            <TextField
              variant="outlined"
              InputProps={{
                className: classes.input,
              }}
              className="input"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter Income/Expense name"
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
            </label>
            <TextField
              InputProps={{
                className: classes.input,
              }}
              className="input"
              variant="outlined"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter a positive or negative number"
            />
          </div>
          <button className="btn">Submit</button>
        </form>
      </ThemeProvider>
    </>
  );
};

AddTransaction.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddTransaction);
