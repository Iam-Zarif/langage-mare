/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Button = ({ name }) => {
  return (
    <div>
      <button  className="btn btn-outline border-0 border-b-4 border-b-orange-500 hover:border-b-2 hover:bg-yellow-700 text-yellow-500 hover:text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;