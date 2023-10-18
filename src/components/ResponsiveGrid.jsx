import * as React from 'react';
import Grid from '@mui/material/Grid';
import Cards from './Cards';


export default function ResponsiveGrid({ destinations, onRemove, showSnackbar }) {
  return (
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {destinations.map((destination, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Cards 
            destination={destination}
            onRemove={onRemove}
            showSnackbar={showSnackbar}
            />
          </Grid>
        ))}
      </Grid>
  );
}
