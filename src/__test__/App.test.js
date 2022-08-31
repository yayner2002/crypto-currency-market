import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../app/store';

const MockApp = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>

);

describe('app', () => {
  it('should render text', async () => {
    render(<MockApp />);
  });
});
