import { Link } from "react-router-dom";
import Title from "../Title/Title";


const Error = () => {
  Title("404 Not found")
    return (
      <div>
        <img
          className=" mx-auto mt-36 rounded-xl"
          src="https://www.digital.ink/wp-content/uploads/discord-1.gif"
          alt=""
        />
        <div className="mt-20 flex flex-col items-center">
          <p className="text-orange-500 text-xl">We are still trying to fix it</p>
          <p className="divider mx-auto w-1/4 my-10">or</p>
          <p className="text-2xl">Go To <Link to="/" className="btn">home</Link></p>
        </div>
      </div>
    );
};

export default Error;