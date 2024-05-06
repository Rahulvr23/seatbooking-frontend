
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';
import FilimPage from './Pages/FilimPage';

import Home from './Pages/Home';

import { Route, Routes } from 'react-router-dom';
import ListingSeats from './Pages/ListingSeats';
import Booking from './Pages/Booking';

function App() {
  return (
    <div className="App">
    
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/filims' element={<FilimPage/>}></Route>
  <Route path='/login' element={<Login/>}/>
  <Route path='/Register' element={<Register/>}/> 
  <Route path='/seats/:movie' element={<ListingSeats/>}/>
  <Route path='/bookings' element={<Booking/>}/>

</Routes>



    </div>
  );
}

export default App;
