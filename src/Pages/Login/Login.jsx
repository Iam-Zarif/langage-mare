/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaUserAlt } from "react-icons/fa";
import Title from "../../Title/Title";
import { RiLockPasswordFill } from "react-icons/ri";
import Auth from "../../Hooks/Auth";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  Title("MARE | LOG IN");
  const { logIn, googleSignIn } = Auth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        Swal.fire({
          title: "Logged in With Google!!!",
          showClass: {
            popup: "animate__animated animate__bounceIn",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        const user = result.user;
        const savedUser = { name: user.displayName, email: user.email };

        fetch("https://summer-camp-server-i-am-zarif.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser), // Corrected variable name from `savedUser` to `user`
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Logged in Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => console.log(error));
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };
  const onSubmit = (data) => {
    logIn(data.email, data.password)
      .then((res) => {
        Swal.fire({
          title: "Logged in !!!",
          showClass: {
            popup: "animate__animated animate__bounceIn",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
    console.log(data);
  };
  return (
    <div>
      {" "}
      <Fade cascade damping={0.1}>
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text mx-auto text-lg flex items-center gap-2">
                        <FaUserAlt /> Email
                      </span>
                    </label>
                    <input
                      {...register("email", { required: true })}
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
                      {...register("password", { required: true })}
                      required
                      name="password"
                      type="password"
                      placeholder="password"
                      className="mx-auto my-2 w-60 lg:w-96 input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary mt-4" type="submit">
                      Login
                    </button>
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
                  <Link onClick={handleGoogleLogin}>
                    <FaGoogle />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>{" "}
    </div>
  );
};

export default Login;
