import React from 'react';
import {useHistory} from 'react-router-dom';
import kit2 from './images/kit2.jpeg';

const Unit10 = (props) => {
  let history = useHistory();
  function addtocart() {
    document.getElementById('cart').style.display = 'flex';
    document.getElementById('emptybag').style.display = 'none';
    document.getElementById('cart_stuff').style.display = 'flex';
    document.getElementById('checkout').style.display = 'block';
    let x = document.getElementById('cart_items').innerHTML;
    document.getElementsByClassName('cart_items').innerHTML = Number(x) + 1;
  }
  return (
    <div className="Unit Unit10" id="Unit10">
      <nav>
        <div
          class="logo logo_shop"
          onClick={() => {
            history.push('/');
          }}
        >
          iFix
        </div>
        <div id="nav_right">
          <span
            onClick={() => {
              history.push('/shop');
            }}
          >
            Shop
          </span>
          <span
            onClick={() => {
              document.getElementById('cart').style.display = 'flex';
            }}
          >
            Cart
          </span>
          <span className="cart_items">0</span>
        </div>
      </nav>
      <main>
        <div className="thing">
          <img src={kit2} alt="kit2" />
          <span>kit2 </span>
        </div>
        <div className="info">
          <span>$200</span>
          <button onClick={addtocart}>Add To Cart</button>
          <button
            onClick={() => {
              history.push('/shop');
            }}
          >
            Go Back
          </button>
        </div>
      </main>
    </div>
  );
};

export default Unit10;