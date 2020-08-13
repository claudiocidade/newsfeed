import React from 'react';
import ReactDOM from 'react-dom';
import { Feed } from './pages/Feed';
import { Article } from './pages/Article';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Route path="/" component={ Feed } exact />
        <Route path="/article/:id" component={ Article } />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);