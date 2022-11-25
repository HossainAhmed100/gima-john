import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Saved from './Components/Page/Saved/Saved';
import Shop from './Components/Page/Shop/Shop';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/Page/Saved' element={<Saved />}/>
      <Route path='/' element={<Shop />}/>
    </Routes>
    </>
  );
}

export default App;
