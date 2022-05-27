import React, { useState, useEffect } from 'react'
import { useNavigate, useRoutes } from 'react-router';
import BusImg from './images/premium.png';
const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })


    }
    const handleBlur = (e) => {
        console.log('in blur', values[e.target.name]);
        if (values[e.target.name]?.length < 1 || !values[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: 'This field is required' })
        } else {
            setErrors({})
        }

    }
    const handleClick = () => {
        // navigate('/user');
        if (!values?.name && !values?.password) {

        } else {
            sessionStorage.setItem('userDetails',JSON.stringify(values))
            navigate('/user');
        }
    }
    console.log(errors);
    return (
        <div className="box-form">
            <div className="left">
                <h2 className='left-h2' >Bus management</h2>

                <p className='left-p'>Welcome to GCET bus management system</p>

                <img src={BusImg} alt="" className='leftImg' />



            </div>
            <div className="right">
                <h5>Login</h5>
                {/* <p>Don't have an account? <a href="#">Create Your Account</a> it takes less than a minute</p> */}
                <div className="inputs">
                    <input type="text" placeholder="UserName" onChange={(e) => handleChange(e)} name='name' onBlur={(e) => handleBlur(e)} />
                    {errors?.name ? <span className="errorSpan">{errors?.name}</span> : null}
                    <br />
                    <input type="password" placeholder="Password" value={values?.password} onChange={(e) => handleChange(e)} name='password' onBlur={(e) => handleBlur(e)} />
                    {errors?.password ? <span className="errorSpan">{errors?.password}</span> : null}
                </div>

                <br />

                <div className="remember-me--forget-password">

                    <label>
                        <input type="checkbox" name="item" />
                        <span className="text-checkbox">Remember me</span>
                    </label>
                    <p>forget password?</p>
                </div>

                <br />
                <button className='login-button' onClick={() => handleClick()}>Login</button>
            </div>
        </div>
    )
}

export default Login