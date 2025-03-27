

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import emp_data from './emp_data';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<emp_data />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
