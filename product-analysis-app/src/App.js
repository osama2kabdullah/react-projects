import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Review from './components/Review';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import NotFoundPage from './components/NotFoundPage';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
