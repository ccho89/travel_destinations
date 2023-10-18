import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';

  
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  '& .MuiIconButton-label': {
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
},
}));

  
  export default function Cards({ destination, onRemove, showSnackbar, handleCloseSnackbar}) {
    const [expanded, setExpanded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleFavoriteClick = () => {
      setIsFavorite(!isFavorite);
      showSnackbar();
    };

    const handleRemoveClick = (countryName) => {
      onRemove(countryName);
    };
  
    return (
        <Card className="picks" sx={{ 
        maxWidth: 345,
        textAlign: 'center',
        borderRadius: '8px',
        position: 'relative',
        zIndex: '3',
        top: '15em',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: '0',
        right: '0',
        }}>
        <CardHeader
          action={
            <IconButton aria-label="remove"
           onClick={() => handleRemoveClick(destination.name.common)}>
            <HighlightOffSharpIcon />
            </IconButton>
          }
          title={destination.name.common}
          subheader={`Capital: ${destination.capital}`}
        />
        <CardMedia
          component="img"
          height="194"
          image={destination.flags.png}
          alt="Country Flag"
        />
        <CardActions disableSpacing>
          <IconButton 
          sx={{mr:'auto'}}
          aria-label="add to favorites"
          onClick={handleFavoriteClick}
          color={isFavorite ? 'error' : 'default'}
          >
            <FavoriteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            style={{color: 'blue', fontSize: '15px'}}
            aria-label="show more"
          >
            Show More
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography><b>Country Info</b>:</Typography>
            <Typography style={{fontFamily: 'Ariel Narrow, sans-serif', fontStyle: 'italic', fontSize: '16px'}}>Region: {destination.region}
            </Typography>
            <Typography style={{fontFamily: 'Ariel Narrow, sans-serif', fontStyle: 'italic', fontSize: '16px'}}>
              Language: 
              {destination.languages && Object.keys(destination.languages).map((languageCode, langIndex) => (
                <span key={langIndex}>
                  {destination.languages[languageCode]}
                  {langIndex !== Object.keys(destination.languages).length - 1 && ', '}
                </span>
              ))}
              </Typography>
            <Typography style={{fontFamily: 'Ariel Narrow, sans-serif', fontStyle: 'italic', fontSize: '16px'}}>
              Currency:
              {destination.currencies && Object.keys(destination.currencies).map((currencyCode, currencyIndex) => (
                <span key={currencyIndex}>
                  {destination.currencies[currencyCode].name} ({destination.currencies[currencyCode].symbol}
                  {currencyIndex !== Object.keys(destination.currencies).length - 1 && ', '})
                </span>
              ))}
            </Typography>         
            <Typography style= {{fontFamily: 'Ariel Narrow, sans-serif', fontStyle: 'italic', fontSize: '16px'}}>Population: {destination.population}
            </Typography>
            <Typography>
              <img src= {destination.coatOfArms.png} alt="Coat of Arms" style={{ maxWidth: '50px', paddingTop: '10px'}} />
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
       )}
  
  
  