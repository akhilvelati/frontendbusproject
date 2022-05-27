import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import Login from './Login';
import { Route, Routes } from 'react-router-dom'
  ;
import User from './User';
import Admin from './Admin';
import { InputGroup, FormControl, } from 'reactstrap';
function CommonTab({ headingName}) {
  return (
      <>
          <div className='CommonTab-add'>
              
              <h2 className='CommonTab-add-h2'>Add {headingName}</h2>
              <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    <FormControl
      placeholder="Username"
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>

  <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
  </InputGroup>

          </div>
          <div className='CommonTab-search'></div>
          <div className='btn'><button>
          </button></div>
      </>
  );
}

export default CommonTab;
