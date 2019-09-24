import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6'>Angular 6 MatTable CRUD Example</Typography>
        <Button color='inherit'>
          Reload Data: <RefreshIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
}
