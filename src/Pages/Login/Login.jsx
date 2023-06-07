import { Link } from "react-router-dom";
import {  FaGoogle, FaUserAlt } from "react-icons/fa";
import Title from "../../Title/Title";
import { RiLockPasswordFill } from "react-icons/ri";
const Login = () => {
    Title("MARE | LOG IN")
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
          <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="text-center ">
              <img
                src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif"
                alt=""
              />
            </div>
            <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
              <div className="card-body">
                <div>
                  <h1 className="text-center mb-5 text-3xl font-bold">
                    PLease Login
                  </h1>
                </div>
                <form onSubmit={handleLogIn}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text mx-auto text-lg flex items-center gap-2">
                        <FaUserAlt /> Email
                      </span>
                    </label>
                    <input
                    required
                      name="email"
                      type="email"
                      placeholder="email"
                      className="mx-auto my-2 w-60 lg:w-96 input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-4">
                    <label className="label">
                      <span className="label-text mx-auto text-lg flex items-center gap-2">
                        <RiLockPasswordFill /> Password
                      </span>
                    </label>
                    <input
                    required
                      name="password"
                      type="password"
                      placeholder="password"
                      className="mx-auto my-2 w-60 lg:w-96 input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary mt-4">Login</button>
                  </div>
                </form>
                <div className="mt-5">
                  <p>
                    New to Language Mare?{" "}
                    <Link
                      to="/register"
                      className="text-orange-500 font-semibold"
                    >
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