import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

/*
<Box bgcolor="primary.main" 
        color="primary.contrastText" 
        p={2} 
        style={{width: width, height: height}}
    />
*/

export default function SolutionViewer(props) {
  const width = 400
  const height = 800

  return (
    <Box bgcolor="primary.main" 
    p={2} 
    style={{width: width, height: height}}>
        {props.children}
    </Box>
  );
}