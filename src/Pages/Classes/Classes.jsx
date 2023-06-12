/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Title from "../../Title/Title";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import Auth from "../../Hooks/Auth";
import Button from "../../Button/Button";
import { Fade } from "react-awesome-reveal";

const Classes = () => {
  const {user} = Auth();
  const selectClass =(myClass) =>{
    const allClass = {
      className: myClass.className,
      photo: myClass.photo,
      instructorName: myClass.instructorName,
      instructorEmail: myClass.instructorEmail,
      sit: myClass.sit,
      price: myClass.price,
      email: user.email,
    };

// const selectedClass = {...myClass,email:user.email}
    fetch("https://summer-camp-server-i-am-zarif.vercel.app/selectedClasses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Inserted");
        }
        console.log(data);
      });
    
  }
  Title("MARE | CLASSES");
 
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("https://summer-camp-server-i-am-zarif.vercel.app/approvedClasses")
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
    <Fade cascade damping={0.1}>
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
                        <Link onClick={() => selectClass(singleClass)}>
                          <Button name={"Select"}>Enroll now!</Button>
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/login">
                          <Button name={"Login to Enroll now!"}></Button>
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
    </Fade>
  );
};

export default Classes;
