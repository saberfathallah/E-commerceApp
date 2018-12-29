import React from 'react';
import ReactDOM from 'react-dom';
import App3 from './App3';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App3 />, div);
});
