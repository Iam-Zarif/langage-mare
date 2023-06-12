/* eslint-disable no-unused-vars */
import { useQuery } from "react-query";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import Button from "../../../Button/Button";
import "animate.css";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const ManageUsers = () => {
  const token = localStorage.getItem("access-token");

  const [disabledButtons, setDisabledButtons] = useState([]);

  useEffect(() => {
    // Retrieve the disabled buttons from local storage
    const disabledButtonsFromStorage = localStorage.getItem("disabledButtons");
    if (disabledButtonsFromStorage) {
      setDisabledButtons(JSON.parse(disabledButtonsFromStorage));
    }
  }, []);

  useEffect(() => {
    // Save the disabled buttons to local storage whenever it changes
    localStorage.setItem("disabledButtons", JSON.stringify(disabledButtons));
  }, [disabledButtons]);

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://summer-camp-server-i-am-zarif.vercel.app/users", {
      headers: {
        authorization: `bearer ${token}`,
      },
    });
    return res.json();
  });

  const handleAdmin = (user) => {
    const updatedDisabledButtons = disabledButtons.map((disabledUser) => {
      if (disabledUser._id === user._id) {
        return {
          ...disabledUser,
          role: "admin",
        };
      } else {
        return {
          ...disabledUser,
          role: "",
        };
      }
    });
    setDisabledButtons(updatedDisabledButtons);

    fetch(`https://summer-camp-server-i-am-zarif.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: `${user.name} is Admin Now`,
            showClass: {
              popup: "animate__animated animate__backInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

  const handleInstructor = (user) => {
    const updatedDisabledButtons = disabledButtons.map((disabledUser) => {
      if (disabledUser._id === user._id) {
        return {
          ...disabledUser,
          role: "instructor",
        };
      } else {
        return {
          ...disabledUser,
          role: "",
        };
      }
    });
    setDisabledButtons(updatedDisabledButtons);

    fetch(`https://summer-camp-server-i-am-zarif.vercel.app/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: `${user.name} is instructor Now`,
            showClass: {
              popup: "animate__animated animate__backInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

  const isButtonDisabled = (userId, role) => {
    const disabledUser = disabledButtons.find((user) => user._id === userId);
    return disabledUser && disabledUser.role === role;
  };

  return (
    <div className="">
      <div>
        <SectionTitle
          subHeading={"Be Careful"}
          heading={`All Users Here(${users.length} users)`}
        ></SectionTitle>
      </div>

      <div className="mt-10 ">
        <div className="overflow-x-auto ">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="text-lg text-white text-center">
                <th>Serial</th>
                <th>Name</th>
                <th>email</th>
                <th>Role</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((user, index) => {
                const isAdmin = user.role === "admin";
                const isInstructor = user.role === "instructor";
                const adminButtonDisabled = isButtonDisabled(user._id, "admin");
                const instructorButtonDisabled = isButtonDisabled(
                  user._id,
                  "instructor"
                );

                return (
                  <tr key={user._id} className="container text-center">
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>
                      {isAdmin ? (
                        <p>Admin</p>
                      ) : (
                        <button
                          disabled={adminButtonDisabled}
                          onClick={() => handleAdmin(user)}
                          className={`btn btn-outline border-0 border-b-4 ${
                            adminButtonDisabled
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          } border-b-orange-500 hover:border-b-2 hover:bg-yellow-700 text-yellow-500 hover:text-white`}
                        >
                          Make admin
                        </button>
                      )}
                    </td>
                    <td>
                      {isInstructor ? (
                        <p>Instructor</p>
                      ) : (
                        <button
                          disabled={instructorButtonDisabled}
                          onClick={() => handleInstructor(user)}
                          className={`btn btn-outline border-0 border-b-4 ${
                            instructorButtonDisabled
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          } border-b-orange-500 hover:border-b-2 hover:bg-yellow-700 text-yellow-500 hover:text-white`}
                        >
                          Make Instructor
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
