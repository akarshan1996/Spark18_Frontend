import React, { useContext, useReducer } from 'react';
import Grid from '@material-ui/core/Grid';
import { globalState as GlobalState } from '../context'
import { mainReducer } from '../reducers/index'
import { appStyle } from './App.style'
import LeftDivision from './LeftDivision'
import RightDivision from './RightDivision'
import NavBar from './AppBar'
import './App.style.js';

function App() {
  const classes = appStyle();
  const initialState = useContext(GlobalState);
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Grid container className={classes.root} >
      <NavBar />
      <GlobalState.Provider value={{ state, dispatch }} >
        <Grid item xs={12} className={classes.parentDiv}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={4}>
              <LeftDivision />
            </Grid>
            <Grid item xs={4}>
              <RightDivision />
            </Grid>
          </Grid>
        </Grid>
      </GlobalState.Provider>
    </Grid>
  );
}
export default App;
