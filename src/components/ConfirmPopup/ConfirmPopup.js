import React, { useState, useEffect } from "react";
import Styles from "./ConfirmPopup.module.css";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import { createGrid } from "../../redux/actions";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function ConfirmPopup({ checkConfirm }) {
  const [size, setSize] = useState(4);
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleChange = (event) => {
    setSize(event.target.value);
  };
  useEffect(() => {
    dispatch(createGrid(size));
  }, [size]);
  return (
    <div className={Styles.container}>
      <div className={Styles.contentBlock}>
        <div className={Styles.select}>
          <h2>Choose a size grid:</h2>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Size</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={size}
              onChange={handleChange}
              label="Size"
            >
              <MenuItem value={4}>4x4</MenuItem>
              <MenuItem value={6}>6x6</MenuItem>
              <MenuItem value={8}>8x8</MenuItem>
            </Select>
          </FormControl>
        </div>
        <h2>After pressing the button, the countdown starts. You are ready?</h2>
        <Button variant="contained" color="primary" onClick={checkConfirm}>
          READY
        </Button>
      </div>
    </div>
  );
}
