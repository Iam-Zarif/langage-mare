/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Auth from "../../../Hooks/Auth";


const MyClasses = () => {
  const token = localStorage.getItem("access-token")
  const {user} = Auth();
  const[classes,setClasses] = useState([]);
  useEffect(() =>{
fetch("http://localhost:5000/myClasses", {
  headers: { authorization: `bearer ${token}` },
})
  .then((res) => res.json())
  .then((data) => {
    const myClass = data.filter((Classes) => Classes.instructorEmail === user.email);
    setClasses(myClass)
  });
  },[token,user.email])
    return (
      <div>
        <SectionTitle
          subHeading={"Check The Classes of You"}
          heading={"Your All  Classes"}
        ></SectionTitle>
        <div>
          <div className="overflow-x-auto">
            {classes.length}
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <div className="text-6xl"></div>
                {classes.map((singleClass) => (
                  <tr key={singleClass._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={singleClass.photo}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{singleClass.className}</div>
                          <div className="text-sm opacity-50">
                            {singleClass.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {singleClass.teacher}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {singleClass.title}
                      </span>
                    </td>
                    <td>{singleClass.color}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default MyClasses;