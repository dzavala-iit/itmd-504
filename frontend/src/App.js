

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employee from '/Emp_data.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Employee />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
