/* eslint-disable no-unused-vars */
import { render } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CoinDetail from '../components/pages/CoinDetail';

import store from '../app/store';

const MockDetail = () => {
  <Provider store={store}>
    <Router>
      <CoinDetail />
    </Router>
  </Provider>;
};

describe('test the detail component', () => {
  it('should render detail component correctlly', () => {
    render(<MockDetail />);
    const tree = renderer.create(<MockDetail />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
