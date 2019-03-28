import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';

const CustomTableCell = withStyles(theme => ({
  head: {
    color: theme.palette.common.inherit,
    fontSize: 18,
  },
  body: {
    fontSize: 18,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    textSize: 15,
    width: '30%',
    margin: theme.spacing.unit * 4,
    color: theme.palette.primary,
    align: 'center',
  },
  top: {
    fontWeight: 'bold',
  },
  strip: {
    cursor: 'pointer',
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },

  head: {
    marginLeft: theme.spacing.unit * 65,
  },

  footer: {
    fontSize: 10,
  },
  button: {
    color: theme.palette.background.primary,
    marginRight: theme.spacing.unit * 4,
  },
});

class TableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleOpenChatBox = (details) => {
    const { onSelect } = this.props;
    onSelect(details);
  }

  render() {
    const {
      data,
      classes,
      name,
    } = this.props;
    return (
      <Paper className={classes.root}>
        <div>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" color="inherit">
                {`Welcome ${name}`}
              </Typography>
              <Typography variant="h6" color="inherit" className={classes.head}>
                Available Friends
              </Typography>
            </Toolbar>
          </AppBar>
        </div>
        <div align="center">
        <Table className={classes.table}>
          <TableBody>
            {data.map((friends) => (
              <TableRow
                className={classes.strip}
                hover
                onClick={() => this.handleOpenChatBox(friends)}
              >
                <CustomTableCell align="center">{friends.name}</CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      </Paper>
    );
  }
}

TableData.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  column: PropTypes.objectOf(PropTypes.string).isRequired,
  data: PropTypes.objectOf(PropTypes.string).isRequired,
};


export default withStyles(styles)(TableData);