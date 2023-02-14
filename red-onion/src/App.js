import './App.css';
import Header from './Pages/shared/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/shared/Footer';
import { Route, Routes } from 'react-router-dom';
import ItemWrap from './Pages/Home/ItemWrap';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import DeliveryDetails from './Pages/Login/DeliveryDetails';
import ItemDetails from './Pages/Home/ItemDetails';

function App() {
  return (
    <div>
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path='/food/:lunch' element={<ItemWrap></ItemWrap>}></Route>
          <Route path='/food/:breakfast' element={<ItemWrap></ItemWrap>}></Route>
          <Route path='/food/:dinner' element={<ItemWrap></ItemWrap>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/deliverydetails' element={<DeliveryDetails></DeliveryDetails>}></Route>
        <Route path='/itemDetails' element={<ItemDetails></ItemDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
