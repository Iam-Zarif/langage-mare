import { useEffect, useState } from "react";
import Title from "../../Title/Title";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Auth from "../../Hooks/Auth";

const Classes = () => {
  Title("MARE | CLASSES");
  const { user } = Auth();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/approvedClasses")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
        console.log(data);
      });
  }, []);

  const getCardClassName = (availableSeats) => {
    if (availableSeats === 0) {
      return "w-96 glass mx-auto bg-red-500"; // Add the bg-red-500 class for red background
    } else {
      return "w-96 glass mx-auto";
    }
  };

  return (
    <div className="">
      <h1 className="text-center mt-14 text-4xl">
        Total Classes: {classes.length}
      </h1>
      <SectionTitle subHeading={"Check It Out"} heading={"All Classes Here"} />
      <div className="divider w-1/2 mx-auto"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 mb-20">
        {classes?.map((singleClass) => {
          return (
            <div key={singleClass._id}>
              <div className={getCardClassName(singleClass.sit)}>
                <img src={singleClass.photo} className="w-96 h-80" alt="car!" />

                <div className="card-body">
                  <h2 className="card-title">{singleClass.className}</h2>
                  <p>{singleClass.instructorName}</p>
                  <p>Available Seats: {singleClass.sit}</p>
                  <p>COST: {singleClass.price}$</p>
                  <div className="card-actions justify-end">
                    {user ? (
                      <>
                        <Link>
                          <button className="btn btn-primary">
                            Enroll now!
                          </button>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/login">
                          <button className="btn btn-primary">
                            Login to Enroll now!
                          </button>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Classes;
