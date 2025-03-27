

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Emp_data from './Emp_data';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Emp_data />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
