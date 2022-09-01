/* eslint-disable no-unused-vars */
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../app/store';

describe('app', () => {
  it('should render text', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
    expect(screen.getByTestId('coins-page')).toBeInTheDocument();
  });
});
