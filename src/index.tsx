import React from 'react';
// @ts-ignore
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";
import './index.css'


const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
   <App/>
);
