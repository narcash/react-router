import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayout';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={<MainLayout />}
          >
            <Route
              index
              element={<Home />}
            ></Route>
            <Route
              path='about'
              element={<About />}
            ></Route>
            <Route
              path='contacts'
              element={<Contacts />}
            ></Route>
            <Route
              path='cart'
              element={<Cart />}
            ></Route>
            <Route
              path='contacts'
              element={<Contacts />}
            ></Route>
            <Route
              path='*'
              element={<NotFound />}
            ></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
