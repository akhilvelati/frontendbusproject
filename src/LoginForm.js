import React from 'react'

const LoginForm = () => {
    return (
        <div className="box-form">
            <div className="left">
                <h2 className='left-h2' style="color: black ;">Bus management</h2>

                <p style="color: black ;">Welcome to GCET bus management system</p>

                <img src="../premium.PNG" alt="" style="border-radius: 5%;" />



            </div>
            <div className="right">
                <h5>Login</h5>
                <p>Don't have an account? <a href="#">Create Your Account</a> it takes less than a minute</p>
                <div className="inputs">
                    <input type="text" placeholder="UserName" />
                    <span style="color: red;" className="errorName">*This is a required field</span>
                    <br />
                    <input type="password" placeholder="Password" />
                    <span style="color: red;" className="errorPassword">*This is a required field</span>
                </div>

                <br />

                <div className="remember-me--forget-password">

                    <label>
                        <input type="checkbox" name="item" checked />
                        <span className="text-checkbox">Remember me</span>
                    </label>
                    <p>forget password?</p>
                </div>

                <br />
                <button>Login</button>
            </div>

        </div>
    )
}

export default LoginForm;