import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import Login from './Login';
import { Route, Routes } from 'react-router-dom'
  ;
import User from './User';
import Admin from './Admin';
function App() {
  return (
    //  <LoginForm/>
    <Routes>
      <Route path='/' exact element={<Login />} />
      <Route path='/user' exact element={ <User/>}/>
      <Route path='/admin' exact element={ <Admin/>}/>

    </Routes>
  );
}

export default App;
