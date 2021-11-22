import React from 'react';
import {useNavigate} from 'react-router-dom';
import kit2 from '../images/kit2.jpeg';
import Nav from '../nav.js';
import {useDispatch} from 'react-redux';
import Cart from '../cart.js';
import {Grid, Button, Typography, ButtonGroup} from '@mui/material';

const Unit10 = (props) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Grid container id="Unit10">
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
          <img src={kit2} width="500px" alt="kit2" />
        </Grid>
        <Grid item align="center">
          <Typography variant="h3">kit2 </Typography>

          <Typography variant="h5" my="20px">
            $50
          </Typography>
          <ButtonGroup>
            <Button
              onClick={() => {
                dispatch({type: 'unit10_add'});
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

export default Unit10;
