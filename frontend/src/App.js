import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap';

import Student from './Pages/Student';
import Create from './Pages/Create';
import Update from './Pages/Update';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>

        <Route path='/' element = { <Student/>}> </Route>
        <Route path='/create' element={ <Create/> }> </Route>
        <Route path='/update/:id' element={ <Update/> }> </Route>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
