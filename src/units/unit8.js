import React from 'react';
import {useHistory} from 'react-router-dom';
import xrcamera from '../images/xrcamera.jpeg';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import Cart from '../cart.js';
import {Grid, Button, Typography, ButtonGroup} from '@mui/material';

const Unit8 = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  return (
    <Grid container id="Unit8">
      <Cart />
      <Nav />
      <Grid
        item
        container
        spacing={6}
        sx={{
          my: '20px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid item>
          <img src={xrcamera} width="500px" alt="Iphone XR Camera" />
        </Grid>
        <Grid item align="center">
          <Typography variant="h3">Iphone XR Camera </Typography>
          <Typography variant="h5" my="20px">
            $130
          </Typography>
          <ButtonGroup>
            <Button
              onClick={() => {
                dispatch({type: 'unit8_add'});
                dispatch({type: 'counter_add'});
                document.getElementById('cart').style.display = 'flex';
              }}
            >
              Add To Cart
            </Button>
            <Button
              onClick={() => {
                history.push('/shop');
              }}
            >
              Go Back
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Unit8;