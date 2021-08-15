import { makeStyles, MenuItem, MenuList, Paper } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem><Link to='/'>Home </Link></MenuItem>
          <MenuItem><Link to='/Favorites' >
              Favorites
            </Link></MenuItem>
        </MenuList>
      </Paper>
    </header>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));
export default Header