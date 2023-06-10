/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Title from "../../Title/Title";
import SectionTitle from "../../SectionTitle/SectionTitle";

const Classes = () => {
  Title("MARE | CLASSES");
// TODO

  const [classes, setClasses] = useState([])

//  
  useEffect(() =>{
fetch("http://localhost:5000/approvedClasses").then(res => res.json()).then(data => {
setClasses(data)  
console.log(data)})
// 

  },[])

  
  return (
    <div className="">
      <h1 className="text-center mt-14 text-4xl">
        Total Classes : {classes.length}
      </h1>
      <SectionTitle
        subHeading={"Check It Out"}
        heading={"All Classes Here"}
      ></SectionTitle>
      <div className="divider w-1/2 mx-auto"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10">
        {
          classes?.map(singleClass =>{
        return (
          <div key={singleClass._id}>
            <div className=" w-96 glass mx-auto">
              
                <img
                  src={singleClass.photo}
                  className="w-96 h-80"
                  alt="car!"
                />
              
              <div className="card-body">
                <h2 className="card-title">Life hack</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>
            
          </div>
        )
          })
        }
      </div>
    </div>
  );
};

export default Classes;
