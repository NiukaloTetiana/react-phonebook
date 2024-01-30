import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { userRegister } from '../redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();

    const { name, email, password } = event.target.elements;

    dispatch(
      userRegister({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-lime-600">Register now!</h1>
          <p className="py-6 text-violet-700 font-bold">
            Here you can save all your contacts and quickly find them when
            needed.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={onSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-violet-700 font-bold">
                  Name
                </span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                className="input input-bordered text-violet-700 font-bold"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-violet-700 font-bold">
                  Email
                </span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter email ..."
                className="input input-bordered text-violet-700 font-bold"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-violet-700 font-bold">
                  Password
                </span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter password ..."
                className="input input-bordered font-bold"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="border-none hover:text-white hover:bg-orange-400 hover:border-none btn btn-outline text-xl text-yellow-300 bg-lime-600">
                Register
              </button>
              <NavLink
                className="py-2 text-center text-orange-400 font-bold"
                to="/login"
              >
                Have acount?{' '}
                <span className="underline text-lime-600">LogIn</span>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
