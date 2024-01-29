import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "./navigation/navigation";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {store, persistor} from "./redux/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} > 
        <ToastContainer
            theme="dark"
            position="bottom-left"
            closeOnClick={true}
            pauseOnHover={false}
          />
          <Navigation />
          </PersistGate>
    </Provider>
  )
}

export default App
