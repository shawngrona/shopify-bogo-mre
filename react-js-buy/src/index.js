import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Client from 'shopify-buy';
import '../../shared/app.css';

// dev
// 7994b3cf3469ef3b16df87978ce0b9fc
const client = Client.buildClient({
  storefrontAccessToken: '7994b3cf3469ef3b16df87978ce0b9fc',
  domain: 'dev-psychedelicsupport.myshopify.com'
});

ReactDOM.render(
  <App client={client}/>,
  document.getElementById('root')
);
