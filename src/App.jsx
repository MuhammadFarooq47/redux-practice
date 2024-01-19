import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "./navigation/navigation";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ToastContainer
            theme="dark"
            position="bottom-left"
            closeOnClick={true}
            pauseOnHover={false}
          />
          <Navigation />
    </>
  )
}

export default App
