/* eslint-disable no-unused-vars */
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../app/store';
import Header from '../components/Header/Header';

const MockHeader = () => (
  <Provider store={store}>
    <Router>
      <Header />
    </Router>
  </Provider>
);

describe('Test Header component', () => {
  it('should render header component corectlly', () => {
    const tree = renderer.create(<MockHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should render crypto title', () => {
    render(<MockHeader />);
    const titleElement = screen.queryByRole('heading', { level: 5 });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('Crypto Market');
  });
});
