import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Inventory from './Components/Page/Inventory/Inventory';
import Login from './Components/Page/Login/Login';
import Nothing from './Components/Page/Nothing/Nothing';
import Order from './Components/Page/Order/Order';
import Saved from './Components/Page/Saved/Saved';
import Shop from './Components/Page/Shop/Shop';
import SignUp from './Components/Page/SignUp/SignUp';

function App() {

  return ( 
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Shop />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<SignUp />}/>
      <Route path='/order' element={<Order />}/>
      <Route path='/page/saved' element={<Saved />}/>
      <Route path='/inventory' element={<Inventory />}/>
      <Route path='*' element={<Nothing />}/>
    </Routes>
    </>
  );
}

export default App;
