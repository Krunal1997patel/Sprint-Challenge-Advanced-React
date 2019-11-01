import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import Navbar from './components/Navbar';
import Card from './components/Card';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('App is rending', () => { render(<App/>) })

test('Title is there', () => {
  const {getByText} = render(<App/>)
  getByText(/^Women's World Cup$/i)
})

test('Navbar is rending', () => { render(<Navbar/>) })

test('logo title is there', () => {
  const {getByText} = render(<Navbar/>)
  getByText(/^wwc$/i)
})


test('Dark mode button was clicked', () => {
  const {getByText} = render(<Navbar/>)
  fireEvent.click(getByText(/Dark Mode/i))
})

test('Card is rending', () => { render(<Card/>) })