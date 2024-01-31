import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Notify } from 'notiflix';

import { userLogin } from '../redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    dispatch(
      userLogin({
        email: email.value,
        password: password.value,
      })
    )
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(`${originalPromiseResult.user.name} welcome back!`);
      })
      .catch(error => Notify.failure('Incorrect login or password'));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.div
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.4,
              delay: 0.5,
            },
          }}
          initial={{ opacity: 0, x: 300 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-5xl font-bold text-lime-600">Login now!</h1>
          <p className="py-6 text-violet-700 font-bold">
            Come in! We will quickly find the contact you need.
          </p>
        </motion.div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <motion.form
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.4,
                delay: 0.5,
              },
            }}
            onSubmit={onSubmit}
            className="card-body "
          >
            <div className="form-control">
              <label className="label">
                <span className="abel-text text-violet-700 font-bold">
                  Email
                </span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter email..."
                className="input input-bordered text-violet-700 font-bold"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="abel-text text-violet-700 font-bold">
                  Password
                </span>
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  placeholder="Enter password ..."
                  className="input input-bordered w-full text-violet-700 font-bold pr-8"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(prev => !prev)}
                >
                  {showPass ? (
                    <FaEye
                      color="rgba(101 163 13)"
                      className="absolute right-4 top-4"
                    />
                  ) : (
                    <FaEyeSlash
                      color="rgba(109 40 217)"
                      className="absolute right-4 top-4"
                    />
                  )}
                </button>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className=" hover:text-white hover:bg-orange-400 hover:border-none btn btn-outline text-xl bg-yellow-300 text-lime-600">
                Login
              </button>
            </div>
            <NavLink
              className="py-2 text-center text-orange-400 font-bold "
              to="/register"
            >
              Don`t have acount?{' '}
              <span className="underline text-lime-600">Register</span>
            </NavLink>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Login;
