import React from 'react';
import {useNavigate} from 'react-router-dom';
import lit2 from '../images/lit2.jpg';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import Cart from '../cart.js';
import {Grid, Button, Typography, ButtonGroup} from '@mui/material';

const Unit8 = (props) => {
  let navigate = useNavigate();
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
          <img src={lit2} width="100%" alt="Iphone XR Camera" />
        </Grid>
        <Grid item align="center">
          <Typography variant="h3">Lit Rig 2 </Typography>
          <Typography variant="h5" my="20px">
            $5500
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
                navigate(`/shop`);
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
