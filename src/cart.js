import React from 'react';
import {useNavigate} from 'react-router-dom';
import close from './images/close.png';
import carticon from './images/carticon.png';
import {useSelector, useDispatch} from 'react-redux';
import Item from './item.js';
import btc1 from './images/btc1.jpg';
import btc2 from './images/btc2.jpeg';
import eth1 from './images/eth1.jpeg';
import eth2 from './images/eth2.jpeg';
import mon1 from './images/mon1.jpeg';
import mon2 from './images/mon2.jpg';
import lit1 from './images/lit1.jpeg';
import lit2 from './images/lit2.jpg';
import rav1 from './images/rav1.jpeg';
import rav2 from './images/rav2.jpg';
import {Grid, Button, Typography, Backdrop, TextField} from '@mui/material';

function Cart(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const _unit1 = useSelector((state) => state.unit1);
  const _unit2 = useSelector((state) => state.unit2);
  const _unit3 = useSelector((state) => state.unit3);
  const _unit4 = useSelector((state) => state.unit4);
  const _unit5 = useSelector((state) => state.unit5);
  const _unit6 = useSelector((state) => state.unit6);
  const _unit7 = useSelector((state) => state.unit7);
  const _unit8 = useSelector((state) => state.unit8);
  const _unit9 = useSelector((state) => state.unit9);
  const _unit10 = useSelector((state) => state.unit10);

  return (
    <Backdrop
      id="cart"
      sx={{
        display: 'none',
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        overflow: 'auto',
      }}
      open
    >
      <Grid
        item
        direction="column"
        align="center"
        sx={{
          border: '5px solid black',
          backgroundColor: 'white',
          p: '30px',
          overflow: 'auto',
          height: '100%',
        }}
      >
        <Grid item align="start" my="10px">
          <img
            src={close}
            alt="close icon"
            className="closeicon"
            width="50px"
            onClick={() => {
              document.getElementById('cart').style.display = 'none';
            }}
          />
        </Grid>
        <Grid item my="10px">
          <Typography variant="h3" color="black">
            Your Shopping Bag
          </Typography>
        </Grid>

        {counter === 0 && (
          <Grid item id="emptybag" my="10px">
            <Typography variant="h6" color="black">
              Your bag is empty.
            </Typography>
            <img
              src={carticon}
              alt="cart icon"
              width="100px"
              className="carticon"
            />
          </Grid>
        )}

        {_unit1 > 0 && (
          <Item
            id="_unit1"
            src={btc1}
            price="2000"
            alt="BTC Rig 1"
            type1="unit1_add"
            type2="unit1_minus"
          >
            <TextField
              sx={{width: '100px'}}
              id="input_total"
              onChange={(ev) => {
                dispatch({type: 'unit1change', payload: ev.target.value});
              }}
              value={_unit1}
            />
          </Item>
        )}

        {_unit2 > 0 && (
          <Item
            id="_unit2"
            src={btc2}
            price="2500"
            alt="BTC Rig 2"
            type1="unit2_add"
            type2="unit2_minus"
          >
            <TextField
              id="input_total"
              onChange={(ev) => {
                dispatch({type: 'unit2change', payload: ev.target.value});
              }}
              value={_unit2}
              sx={{width: '100px'}}
            />
          </Item>
        )}
        {_unit3 > 0 && (
          <Item
            id="_unit3"
            src={eth1}
            price="3000"
            alt="Eth Rig 1"
            type1="unit3_add"
            type2="unit3_minus"
          >
            <TextField
              sx={{width: '100px'}}
              id="input_total"
              onChange={(ev) => {
                dispatch({type: 'unit3change', payload: ev.target.value});
              }}
              value={_unit3}
            />
          </Item>
        )}
        {_unit4 > 0 && (
          <Item
            id="_unit4"
            src={eth2}
            price="3500"
            alt="Eth Rig 2"
            type1="unit4_add"
            type2="unit4_minus"
          >
            <TextField
              sx={{width: '100px'}}
              id="input_total"
              onChange={(ev) => {
                dispatch({type: 'unit4change', payload: ev.target.value});
              }}
              value={_unit4}
            />
          </Item>
        )}
        {_unit5 > 0 && (
          <Item
            id="_unit5"
            src={mon1}
            price="4000"
            alt="Mon Rig 1"
            type1="unit5_add"
            type2="unit5_minus"
          >
            <TextField
              sx={{width: '100px'}}
              id="input_total"
              onChange={(ev) => {
                dispatch({type: 'unit5change', payload: ev.target.value});
              }}
              value={_unit5}
            />
          </Item>
        )}
        {_unit6 > 0 && (
          <Item
            id="_unit6"
            src={mon2}
            price="4500"
            alt="Mon Rig 2"
            type1="unit6_add"
            type2="unit6_minus"
          >
            <TextField
              sx={{width: '100px'}}
              id="input_total"
              onChange={(ev) => {
                dispatch({type: 'unit6change', payload: ev.target.value});
              }}
              value={_unit6}
            />
          </Item>
        )}
        {_unit7 > 0 && (
          <Item
            id="_unit7"
            src={lit1}
            price="5000"
            alt="Lit Rig 1"
            type1="unit7_add"
            type2="unit7_minus"
          >
            <TextField
              sx={{width: '100px'}}
              id="input_total"
              onChange={(ev) => {
                dispatch({type: 'unit7change', payload: ev.target.value});
              }}
              value={_unit7}
            />
          </Item>
        )}
        {_unit8 > 0 && (
          <Item
            id="_unit8"
            src={lit2}
            price="5500"
            alt="Lit Rig 2"
            type1="unit8_add"
            type2="unit8_minus"
          >
            <TextField
              sx={{width: '100px'}}
              id="input_total"
              onChange={(ev) => {
                dispatch({type: 'unit8change', payload: ev.target.value});
              }}
              value={_unit8}
            />
          </Item>
        )}
        {_unit9 > 0 && (
          <Item
            id="_kit1"
            src={rav1}
            price="6000"
            alt="Rav Rig 1"
            type1="unit9_add"
            type2="unit9_minus"
          >
            <TextField
              sx={{width: '100px'}}
              id="input_total"
              onChange={(ev) => {
                dispatch({type: 'unit9change', payload: ev.target.value});
              }}
              value={_unit9}
            />
          </Item>
        )}
        {_unit10 > 0 && (
          <Item
            id="_kit2"
            src={rav2}
            price="6500"
            alt="Rav Rig 2"
            type1="unit10_add"
            type2="unit10_minus"
          >
            <TextField
              sx={{width: '100px'}}
              id="input_total"
              onChange={(ev) => {
                dispatch({type: 'unit10change', payload: ev.target.value});
              }}
              value={_unit10}
            />
          </Item>
        )}

        {counter > 0 && (
          <Grid item id="checkout" my="10px">
            <Typography variant="h6" color="black">
              Total:
              {_unit1 * 2000 +
                _unit2 * 2500 +
                _unit3 * 3000 +
                _unit4 * 3500 +
                _unit5 * 4000 +
                _unit6 * 4500 +
                _unit7 * 5000 +
                _unit8 * 5500 +
                _unit9 * 6000 +
                _unit10 * 6500}
            </Typography>
            <Button
              variant="contained"
              onClick={() => {
                navigate(`/`);
                document.getElementById('cart').style.display = 'none';
              }}
            >
              Checkout
            </Button>
          </Grid>
        )}

        <Grid item my="20px">
          <Button
            variant="contained"
            onClick={() => {
              navigate(`/shop`);
              document.getElementById('cart').style.display = 'none';
            }}
          >
            Browse Products
          </Button>
        </Grid>
      </Grid>
    </Backdrop>
  );
}

export default Cart;
