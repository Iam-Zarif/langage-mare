import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";


const HomeInstructors = () => {
     const [instructors, setInstructors] = useState([]);
     useEffect(() => {
       fetch("http://localhost:5000/instructors")
         .then((res) => res.json())
         .then((data) => setInstructors(data));
     });
     const teachers = instructors.filter(teacher => teacher.role === "instructor")
    return (
      <div className="mt-20">
        <hr className="w-1/3 mx-auto" />
        <SectionTitle
          subHeading={"Check it Out"}
          heading={"Most Popular Instructors"}
        ></SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 my-20">
          {teachers.slice(0, 6).map((instructor) => {
            return (
              <div key={instructor._id} className="card w-96 glass mx-auto">
                <figure>
                  <img
                    className="h-80 w-96"
                    src={instructor.image}
                    alt="Instructors"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-3xl name text-white font-bold text-center">
                    {instructor.name}
                  </h2>
                  <p className="text-center mt-5 text-lg font-bold">
                    {instructor.email}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
};

export default HomeInstructors;