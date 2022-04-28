import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes } from 'react-router-dom';
import App from './App';
import { setupStore } from './store/store';

const store = setupStore() 

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById('root')
);
