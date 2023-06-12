import { useEffect, useState } from "react";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Swal from "sweetalert2";


const ManageClasses = () => {
  const token = localStorage.getItem("access-token");
  const [classes, setClasses] = useState([]);


const handleFeedback =(e) =>{
e.preventDefault();
const form =e.target;
const feedback = form.feedback.value;
console.log(feedback);
form.reset();
window.location.reload();
}



  useEffect(() => {
    fetch("https://summer-camp-server-i-am-zarif.vercel.app/myClasses", {
      headers: { authorization: `bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, [token]);

  const handleApprove = (approve) => {
    const url = `https://summer-camp-server-i-am-zarif.vercel.app/all/${approve._id}`;

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
            title: `Class Accepted`,
            showConfirmButton: false,
            timer: 1500,
          });

          // Update the class status locally
          setClasses((prevClasses) =>
            prevClasses?.map((classItem) =>
              classItem._id === approve._id
                ? { ...classItem, status: "approve" }
                : classItem
            )
          );
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDeny = (deny) => {
    const url = `https://summer-camp-server-i-am-zarif.vercel.app/all/${deny._id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "deny" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `Class denied`,
            showConfirmButton: false,
            timer: 1500,
          });

          // Update the class status locally
          setClasses((prevClasses) =>
            prevClasses?.map((classItem) =>
              classItem._id === deny._id
                ? { ...classItem, status: "deny" }
                : classItem
            )
          );
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
              <tr className="text-xl">
                <th>Serial</th>
                <th>Name</th>
                <th>Instructor</th>
                <th>Available Sits</th>
                <th>Price</th>
                <th>Main Status</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* rows */}
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
                  {singleClass.status === "pending" && (
                    <>
                      <td>
                        <button className="btn  hover:border-b-2 font-bold text-yellow-500 hover:text-white">
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
                        <button
                          onClick={() => handleDeny(singleClass)}
                          className="btn btn-outline border-0 border-b-4 border-b-orange-500 hover:border-b-2 hover:bg-yellow-700 text-yellow-500 hover:text-white"
                        >
                          Denied
                        </button>
                      </td>
                    </>
                  )}
                  {singleClass.status === "approve" && (
                    <td colSpan="3">
                      <button className="btn text-green-500">Approved</button>
                    </td>
                  )}
                  {singleClass.status === "deny" && (
                    <td colSpan="3" className="">
                      <button className="btn ">Denied</button>
                      <button
                        className="btn text-red-500 ml-28"
                        onClick={() => window.my_modal_1.showModal()}
                      >
                        Feedback
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box" onSubmit={handleFeedback}>
          <h3 className="font-bold text-lg">Hello!</h3>
          <textarea
          name="feedback"
            className="textarea textarea-warning w-full h-[200px] mt-10"
            placeholder="Bio"
          ></textarea>
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ManageClasses;


//<button
          //   type="submit "
          //   className="btn btn-outline border-0 border-b-4 border-b-orange-500 hover:border-b-2 hover:bg-yellow-700 text-yellow-500 hover:text-white  "
          // >
          //   Submit
          // </button>