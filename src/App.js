import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Login />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
