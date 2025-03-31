import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employee from './Employee';
import CreateEmployee from './CreateEmployee';
import UpdateEmployee from './UpdateEmployee';
import About from './About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Employee />}> </Route>
          <Route path='/create' element={<CreateEmployee />}> </Route>
          <Route path='/update/:id' element={<UpdateEmployee />}> </Route>
          <Route path='/about' element={<About />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
