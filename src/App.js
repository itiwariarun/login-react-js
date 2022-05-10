import './App.css';
import Login from './LoginForm/Login';
import {Route, Routes} from 'react-router-dom'
import Dashboard from './LoginForm/Dashboard';
function App() {
  return (
//      <Routes>
//      <Route path='/' element={<Login/>}/>
//      <Route path='/Dashboard' element={<Dashboard/>}/>


//  </Routes>
  <div className="App">
     <Login/>
     </div>

  );
}

export default App;
