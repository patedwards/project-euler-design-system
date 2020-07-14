import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from "./SimpleCard"
import SolutionViewer from "./SolutionViewer"
import { TheContextConsumer } from "./TheContext"

const useStyles = makeStyles((theme) => ({
    root: {
    },
  }));

export default function ChallengeList(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root} >
        <Grid container spacing={3}>
            {props.challengeConfigs.map(
                (challenge) => <Grid item xs={4}> 
                  <TheContextConsumer>
                  {({setFoo}) => <SimpleCard update={setFoo} {...challenge} name={props.foo}/>}
                  </TheContextConsumer>
                </Grid>
                )
            }
        </Grid>
      </div>
    );
  }