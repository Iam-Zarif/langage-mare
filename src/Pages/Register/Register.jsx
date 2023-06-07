/* eslint-disable no-unused-vars */
import { FaGoogle, FaUserAlt } from "react-icons/fa";
import Title from "../../Title/Title";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiTwotoneMail, AiTwotoneUnlock } from "react-icons/ai";
import { MdAddPhotoAlternate, MdOutlineAddPhotoAlternate } from "react-icons/md";
import { Link } from "react-router-dom";
import Auth from "../../Hooks/Auth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser } = Auth();
  const onSubmit = (data) => {
    const pass = data.password;
    const conf = data.confirm;
    if (pass !== conf) {
      Swal.fire({
        icon: "error",
        title: "Try again",
        text: "Password didn't match",
      });
    }

    // console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        Swal.fire({
          title: "Hello There",
          text: "Successfully Registered",
          imageUrl:
            "https://usagif.com/wp-content/uploads/2021/4fh5wi/welcome-15.gif",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
        const user = res.user;
        // console.log(user)
        reset();
      })
      .catch((error) => console.log(error));
  };
  Title("MARE | REGISTER");
  return (
    <div className="mx-auto">
      <div>
        <div className="hero  bg-base-200 py-20">
          <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-0 ">
            <div className="text-center ">
              <img
                className="lg:h-[740px] rounded-lg"
                src="https://cdna.artstation.com/p/assets/images/images/027/682/158/original/liz-gross-signup.gif?1592246526"
                alt=""
              />
            </div>
            <div className="card flex-shrink-0 w-fit mx-auto  shadow-2xl bg-base-100">
              <div className="card-body ">
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text mx-auto text-lg flex items-center gap-2">
                        <FaUserAlt /> Name
                      </span>
                    </label>
                    <input
                      {...register("name", { required: true })}
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="mx-auto  w-60 lg:w-96 input input-bordered"
                    />
                    {errors.name && (
                      <span className="text-center text-red-500">
                        Name is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text mx-auto text-lg flex items-center gap-2">
                        <AiTwotoneMail /> Email
                      </span>
                    </label>
                    <input
                      {...register("email", { required: true })}
                      name="email"
                      type="email"
                      placeholder="email"
                      className="mx-auto  w-60 lg:w-96 input input-bordered"
                    />
                    {errors.email && (
                      <span className="text-center text-red-500">
                        Email is required
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col lg:flex-row gap-5">
                    <div className="form-control mt-4">
                      <label className="label">
                        <span className="label-text mx-auto text-lg flex items-center gap-2">
                          <RiLockPasswordFill /> Password
                        </span>
                      </label>
                      <input
                        {...register("password", {
                          required: true,
                          minLength: 6,
                          pattern: /^(?=.*[A-Z])(?=.*[!@#$%&*]).*$/,
                        })}
                        name="password"
                        type="password"
                        placeholder="password"
                        className="mx-auto w-60 lg:w-72 input input-bordered"
                      />

                      {errors.password?.type === "required" && (
                        <p className="text-center text-red-500">
                          Password is required
                        </p>
                      )}
                      {errors.password?.type === "minLength" && (
                        <p className="text-center text-red-500">
                          At Lest 6 characters
                        </p>
                      )}
                      {errors.password?.type === "pattern" && (
                        <p className="text-center text-red-500">
                          At least one uppercase and one special character
                        </p>
                      )}
                    </div>
                    <div className="form-control mt-4">
                      <label className="label">
                        <span className="label-text mx-auto text-lg flex items-center gap-2">
                          <AiTwotoneUnlock />
                          Confirm Password
                        </span>
                      </label>
                      <input
                        {...register("confirm", { required: true })}
                        name="confirm"
                        type="password"
                        placeholder="Confirm your password"
                        className="mx-auto  w-60 lg:w-72 input input-bordered"
                      />
                    </div>
                  </div>
                  <div className="form-control mt-4">
                    <label className="label">
                      <span className="label-text mx-auto text-lg flex items-center gap-2">
                        <MdAddPhotoAlternate/>
                        Photo
                      </span>
                    </label>
                    <input
                      {...register("photo", { required: true })}
                      name="photo"
                      type="url"
                      placeholder="Your Photo link"
                      className="mx-auto  w-60 lg:w-96 input input-bordered"
                    />
                    {errors.photo && (
                      <span className="text-center text-red-500">
                        Provide Your Photo Link
                      </span>
                    )}
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary mt-4" type="submit">
                      Register
                    </button>
                  </div>
                </form>
                <div className="mt-5">
                  <p>
                    Already have an account?{" "}
                    <Link to="/login" className="text-orange-500 font-semibold">
                      Login
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
    </div>
  );
};

export default Register;
