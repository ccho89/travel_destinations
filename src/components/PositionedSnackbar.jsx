import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function PositionedSnackbar({ open: propOpen }) {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
  });
  const { vertical } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
    setTimeout(handleCloseSnackbar, 6000);
  };

  const handleCloseSnackbar = () => {
    setState({ ...state, open: false });
    
  };

  const buttons = (
    <React.Fragment>
        <Grid item xs={6} textAlign="right">
          <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
          </Button>
        </Grid>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: 500 }}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={propOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Added to Favorites!"
        key={vertical + 'right'}
      />
    </Box>
  );
}