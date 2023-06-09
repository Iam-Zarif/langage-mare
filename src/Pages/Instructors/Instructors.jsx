/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Title from "../../Title/Title";


const Instructors = () => {
    Title("MARE | INSTRUCTORS")
    const [instructors,setInstructors] =useState([])
    useEffect(() =>{
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(data => setInstructors(data))
    })
    const makeInstructor = instructors.filter(
      (instructor) => instructor.role === "instructor"
    );
    console.log(makeInstructor)
    return (
      <div>
        <h1 className="text-center mt-14 text-4xl">
          Total instructors : {instructors.length}
        </h1>
        <div>
          <SectionTitle
            subHeading={"Check It Out"}
            heading={"All Instructors Here"}
          ></SectionTitle>
          <div className="divider w-1/2 mx-auto"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 my-20">
            {makeInstructor.map((instructor) => {
              return (
                <div key={instructor._id} className="card w-96 glass mx-auto">
                  <figure>
                    <img
                      className="h-80 w-96"
                      src={instructor.photo}
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
      </div>
    );
};

export default Instructors;