/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Title from "../../Title/Title";

const Classes = () => {
  Title("MARE | CLASSES");
// TODO

  const [classes, setClasses] = useState([])

  useEffect(() =>{
    fetch("http://localhost:5000/classes")
    .then(res => res.json())
    .then(data => setClasses(data))
  })
  return <div></div>;
};

export default Classes;
