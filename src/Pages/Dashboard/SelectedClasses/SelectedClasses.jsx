import { useEffect, useState } from "react";
import Auth from "../../../Hooks/Auth";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Button from "../../../Button/Button";

const SelectedClasses = () => {
  const { user } = Auth();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-server-i-am-zarif.vercel.app/selectedClasses")
      .then((res) => res.json())
      .then((data) => {
        const myClass = data.filter((Classes) => Classes.email === user.email);
        setClasses(myClass);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://summer-camp-server-i-am-zarif.vercel.app/selectedClasses/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount>0){
            alert("deleted")
        }
      })
      .catch((error) => {
        console.error("Error deleting document:", error);
      });
  };



  return (
    <div>
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"Your Selected Classes Here"}
      ></SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-3 my-20">
        {classes?.map((myClass) => {
          return (
            <div key={myClass._id}>
              <div className="mx-auto w-96 glass">
                <figure>
                  <img src={myClass.photo} className="w-96 h-80" alt="car!" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Course Title :{" "}
                    <span className="text-yellow-500">{myClass.className}</span>
                  </h2>
                  <p>
                    Instructor name :{" "}
                    <span className="text-yellow-500 text-xl">
                      {myClass.instructorName}
                    </span>
                  </p>
                  <p>
                    Sit :{" "}
                    <span className="text-yellow-500 text-xl">
                      {myClass.sit}
                    </span>
                  </p>
                  <p>
                    Cost :{" "}
                    <span className="text-yellow-500 text-xl">
                      ${myClass.price}
                    </span>
                  </p>
                  <div className="card-actions justify-end">
                    
                      <button className="btn"
                        name={"Delete"}
                        onClick={() => handleDelete(myClass._id)}
                      >Delete</button>
                    
                    <Link to="/dashboard/payment">
                      <Button name={"Pay"}></Button>
                    </Link>
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

export default SelectedClasses;
