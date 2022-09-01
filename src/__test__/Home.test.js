/* eslint-disable no-unused-vars */
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../app/store';
import Home from '../components/pages/Home';

const MockHome = () => (
  <Provider store={store}>
    <Router>
      <Home />
    </Router>
  </Provider>
);

describe('home', () => {
  test('should show texts', () => {
    render(<MockHome />);
    expect(screen.getByTestId('heading')).toBeInTheDocument();
  });
});
