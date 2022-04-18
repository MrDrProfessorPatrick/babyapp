import { Routes, Route } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { MainPage } from './components/MainPage';
import { GoodsPage } from './components/GoodsPage';
import { GoodPageFull } from './components/GoodPageFull';
import { Login } from './components/Auth/Login';
import { SignUp } from './components/Auth/SignUp';
import './style.css';

function App() {
  const authTableState = useSelector((state) => state.AuthWindowStateReducer.isVisible);

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='goods' element={<GoodsPage />} />
        <Route path='good' element={<GoodPageFull />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
