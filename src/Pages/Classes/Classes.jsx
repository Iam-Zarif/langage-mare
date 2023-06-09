/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Title from "../../Title/Title";
import SectionTitle from "../../SectionTitle/SectionTitle";

const Classes = () => {
  Title("MARE | CLASSES");
// TODO

  const [classes, setClasses] = useState([])

  useEffect(() =>{
    fetch("http://localhost:5000/classes")
    .then(res => res.json())
    .then(data => setClasses(data))
  })
  return (
    <div>
      <h1 className="text-center mt-14 text-4xl">
        Total Classes : {classes.length}
      </h1>
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"All Classes Here"}
      ></SectionTitle>
      <div className="divider w-1/2 mx-auto"></div>
    </div>
  );
};

export default Classes;
