import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

function createData(id, title, state, url, created, update, plus) {
  return { id, title, state, url, created, update, plus };
}

const rows = [
  createData(
    495514520,
    "PLATFORM_ID injection into custom decorators",
    "open",
    "https://api.github.com/repos/angular2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z"
  ),
  createData(
    495514521,
    "PLATFORM_ID injection into custom decorators",
    "open",
    "https://api.github.com/repos/angular2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z"
  ),
  createData(
    495514522,
    "PLATFORM_ID injection into custom decorators",
    "open",
    "https://api.github.com/repos/angular2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z"
  ),
  createData(
    495514523,
    "PLATFORM_ID injection into custom decorators",
    "open",
    "https://api.github.com/repos/angular2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z"
  ),
  createData(
    495514524,
    "PLATFORM_ID injection into custom decorators",
    "open",
    "https://api.github.com/repos/angular2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z"
  ),
  createData(
    495514525,
    "PLATFORM_ID injection into custom decorators",
    "open",
    "https://api.github.com/repos/angular2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z"
  ),
  createData(
    495514526,
    "PLATFORM_ID injection into custom decorators",
    "open",
    "https://api.github.com/repos/angular2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z"
  ),
  createData(
    495514527,
    "PLATFORM_ID injection into custom decorators",
    "open",
    "https://api.github.com/repos/angular2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z"
  ),
  createData(
    495514528,
    "PLATFORM_ID injection into custom decorators",
    "open",
    "https://api.github.com/repos/angular2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z"
  ),
  createData(
    495514529,
    "PLATFORM_ID injection into custom decorators",
    "open",
    "https://api.github.com/repos/angular2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z",
    "2019-09-17T09:40:59Z"
  )
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper
      className={classes.root}
      style={{ margin: "0px", borderRadius: "0px", boxShadow: "none" }}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align='left'>Title</TableCell>
            <TableCell align='left'>State</TableCell>
            <TableCell align='left'>Url</TableCell>
            <TableCell align='left'>Created at</TableCell>
            <TableCell align='left'>Updated at</TableCell>
            <TableCell align='left'>
              <AddIcon style={{ color: "#3F52B5" }} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell
                component='th'
                scope='row'
                style={{ whiteSpace: "nowrap" }}>
                {row.id}
              </TableCell>
              <TableCell align='left' style={{ whiteSpace: "nowrap" }}>
                {row.title}
              </TableCell>
              <TableCell align='left' style={{ whiteSpace: "nowrap" }}>
                {row.state}
              </TableCell>
              <TableCell align='left' style={{ whiteSpace: "nowrap" }}>
                {row.url}
              </TableCell>
              <TableCell align='left' style={{ whiteSpace: "nowrap" }}>
                {row.created}
              </TableCell>
              <TableCell align='left' style={{ whiteSpace: "nowrap" }}>
                {row.update}
              </TableCell>
              <TableCell align='left' style={{ whiteSpace: "nowrap" }}>
                <EditIcon style={{ color: "#E91F62" }} />
                <DeleteIcon style={{ color: "#E91F62" }} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
