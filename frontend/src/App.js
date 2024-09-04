import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Registration from './component/Registration';
import Showall from './component/Showall';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import View from './component/View';
import Edit from './component/Edit';

function App() {
  return (
    <>
    <div className='container-fluid'> 
      {/* navbar start  */}
      <Navbar/>
      {/* navbar end   */}
      {/* main content start */}
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Registration/>} />
        <Route exact path='/showall' element={<Showall/>} />
        <Route exact path='/view/:id' element={<View/>}   />
        <Route exact path='/edit/:id' element={<Edit/>}   />
      </Routes>
      </BrowserRouter>
      
      {/* main content end */}
      {/* footer start   */}
      <Footer></Footer>
      {/* footer end   */}
    </div>
   </>
  );
}

export default App;
