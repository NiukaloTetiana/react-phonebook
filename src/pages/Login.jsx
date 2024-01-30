import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { userLogin } from '../redux/auth/operations';

const Login = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    dispatch(
      userLogin({
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-lime-600">Login now!</h1>
          <p className="py-6 text-violet-700 font-bold">
            Come in! We will quickly find the contact you need.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={onSubmit} className="card-body ">
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
              <input
                name="password"
                type="password"
                placeholder="Enter password ..."
                className="input input-bordered text-violet-700 font-bold"
                required
              />
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
