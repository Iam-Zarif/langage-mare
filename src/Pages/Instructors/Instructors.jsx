/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Title from "../../Title/Title";
import { Fade } from "react-awesome-reveal";


const Instructors = () => {
    Title("MARE | INSTRUCTORS")
    const [instructors,setInstructors] =useState([])
    useEffect(() =>{
        fetch("https://summer-camp-server-i-am-zarif.vercel.app/instructor")
          .then((res) => res.json())
          .then((data) => setInstructors(data));
    })
    const makeInstructor = instructors.filter(
      (instructor) => instructor.role === "instructor"
    );
    console.log(makeInstructor)
    return (
      <Fade cascade damping={0.1}>
        <h1 className="text-center mt-14 text-4xl">
          Total instructors : {makeInstructor.length}
        </h1>
        <div>
          <SectionTitle
            subHeading={"Check It Out"}
            heading={"All Instructors Here"}
          ></SectionTitle>
          <div className="divider w-1/2 mx-auto"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 my-20">
            {makeInstructor?.map((instructor) => {
              return (
                <div key={instructor._id} className=" w-96 glass mx-auto">
                  <figure>
                    <img
                      className="h-72 w-96"
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
      </Fade>
    );
};

export default Instructors;