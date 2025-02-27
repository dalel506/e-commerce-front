import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser } from '../redux/slices/userSlice';
import "./Login.css"

const Login = () => {
    const { isAuth } = useSelector(state => state.user);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (isAuth) {
            navigate("/");
        }
    }, [isAuth, navigate]);
    
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => { dispatch(LoginUser(data)); };

    return (
      <div className="boxCard">
<div className="wrapper" style={{ backgroundImage: 'url("images/loginimage1.jpg")' }}>
            <div className="inner">
                <div className="image-holder">
                    <img src="images\loginimage1.jpg" alt="Registration" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Login Form</h3>
                    
                    <div className="form-wrapper">
                        <input type="email" placeholder="Email Address" className="form-control" {...register("email", { required: true })} />
                        <i className="zmdi zmdi-email" />
                    </div>
                    <div className="form-wrapper">
                        
                        <i className="zmdi zmdi-caret-down" style={{ fontSize: 17 }} />
                    </div>
                    <div className="form-wrapper">
                        <input type="password" placeholder="Password" className="form-control" {...register("password", { required: true })} />
                        <i className="zmdi zmdi-lock" />
                    </div>
                    
                    <button type="submit">
                        Login
                        <i className="zmdi zmdi-arrow-right" />
                    </button>
                </form>
            </div>
        </div>

      </div>
        
    );
};

export default Login;