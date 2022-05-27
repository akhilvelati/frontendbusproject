import React,{useState} from 'react'

const User = () => {
  const [searchValue,setSearchValue]=useState('');
  const handleChange=(e)=>{
    setSearchValue(e.target.value);
  }
  const handleClick=()=>{
    console.log('in lcik');
  }
  return (
    <>
    <header className='userheader'>
      <div className='header-first'>
       <h2>User Portal</h2>
      </div>
      <div className='header-last'>
        <p className='header-last-p'> welcome {JSON.parse(sessionStorage.getItem('userDetails'))?.name}</p>
        <button className='login-button logout'>Logout </button>
      </div>
    </header>
      <div className='userContents'>
        <div className='ContensCard'>
        <h3>Enter the destination</h3>
           <input type={'text'} onChange={(e)=>handleChange(e)} ></input>
        <button onClick={()=>handleClick()}>Submit</button>
        </div>
    </div>
    </>
  )
}

export default User