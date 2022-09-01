/* eslint-disable no-unused-vars */
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
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
    const tree = renderer.create(<MockHome />).toJSON();
    expect(tree).toMatchSnapshot();
    expect(screen.getByTestId('heading')).toBeInTheDocument();
  });
});
