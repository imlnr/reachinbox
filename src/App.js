import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import MainRoutes from './Allroutes/MainRoutes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <MainRoutes/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
