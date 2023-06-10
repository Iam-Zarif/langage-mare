import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const token = localStorage.getItem("access-token");
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/myClasses", {
      headers: { authorization: `bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, [token]);

  const handleApprove = (approve) => {
  const url = `http://localhost:5000/all/${approve._id}`;

  fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status: "approve" }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.modifiedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Class is now approved`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};


  return (
    <div className="">
      <SectionTitle
        subHeading={"Check The added Class"}
        heading={`Total added (${classes.length}) Class`}
      ></SectionTitle>

      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>Instructor</th>
                <th>Available Sits</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
              {
                console.log(classes)
              }
              {classes.map((singleClass, index) => (
                <tr key={singleClass._id}>
                  <th>
                    <label>{index + 1}</label>
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
                        <div className="font-bold text-xl">
                          {singleClass.className}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="text-lg font-bold text-yellow-500 ">
                      {singleClass.instructorName}
                    </div>
                    <div>{singleClass.instructorEmail}</div>
                  </td>
                  <td>{singleClass.sit}</td>
                  <td>$ {singleClass.price}</td>
                  <td>
                    <button className="btn btn-outline border-0 border-b-4 border-b-orange-500 hover:border-b-2 hover:bg-yellow-700 text-yellow-500 hover:text-white">
                      Pending
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleApprove(singleClass)}
                      className="btn btn-outline border-0 border-b-4 border-b-orange-500 hover:border-b-2 hover:bg-yellow-700 text-yellow-500 hover:text-white"
                    >
                      Approved
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline border-0 border-b-4 border-b-orange-500 hover:border-b-2 hover:bg-yellow-700 text-yellow-500 hover:text-white">
                      Denied
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
