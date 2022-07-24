import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Main from './components/Main';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Signup />} />
        <Route exact path='/login' element={[<Main />, <Login />]} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/dashboard' element={[<Main />, <Dashboard />]} />
      </Routes>
    </div>
  );
}

export default App;
