import { Link } from "react-router-dom";
import {  FaGoogle } from "react-icons/fa";

const Login = () => {
    const handleLogIn = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user ={email,password};
        console.log(user)
    }
    return (
      <div className="">
        <div className="hero  bg-base-200 py-20">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-center">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleLogIn}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="email"
                      className="w-44 lg:w-96 input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      name="password"
                      type="password"
                      placeholder="password"
                      className="w-44 lg:w-96 input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
                <div className="mt-5">
                  <p>
                    New to Language Mare?{" "}
                    <Link to="/register" className="text-orange-500 font-semibold">
                      Register
                    </Link>
                  </p>
                </div>
                <div>
                  <p className="divider ">OR</p>
                </div>
                <div className="mx-auto mt-5 text-orange-500 bg-black p-5 rounded-full">
                  <Link>
                    <FaGoogle />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;