
import Swal from "sweetalert2";
import Auth from "../../../Hooks/Auth";
import SectionTitle from "../../../SectionTitle/SectionTitle";
import { AiOutlineSelect } from "react-icons/ai";


const AddAClass = () => {
 
  const token =  localStorage.getItem("access-token");
  const handleClasses =(e) =>{
    e.preventDefault();
    const form = e.target;
    const className = form.className.value;
    const photo = form.photo.value;
    const instructorName = form.instructorName.value;
    const instructorEmail = form.instructorEmail.value;
    const sit = form.sit.value;
    const price = form.price.value;
    const addClass ={
      className,
photo,
instructorName,
instructorEmail,
sit,
price,
status : "pending"
    }
    console.log(addClass)
    fetch("https://summer-camp-server-i-am-zarif.vercel.app/classes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${token}`,
      },
      body: JSON.stringify(addClass),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: `Successfully Added Your class `,
            showClass: {
              popup: "animate__animated animate__wobble",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });

  }
    const {user} = Auth();
    console.log(user)
    return (
      <div>
        <SectionTitle
          subHeading={"Think and Add"}
          heading={"Add A Class Here"}
        ></SectionTitle>
        <div>
          <div className="hero min-h-[600px] bg-base-200 mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse ">
              <div className="card  flex-shrink-0 w-full  shadow-2xl bg-base-100 ">
                <div className="card-body ">
                  <form
                    onSubmit={handleClasses}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 "
                  >
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">
                          Class Name{" "}
                          <span className="text-yellow-500 text-xl">*</span>{" "}
                        </span>
                      </label>
                      <input
                        required
                        name="className"
                        type="text"
                        placeholder="Class name"
                        className="w-96 input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">
                          Class Image
                          <span className="text-yellow-500 text-xl">
                            *
                          </span>{" "}
                        </span>
                      </label>
                      <input
                        required
                        name="photo"
                        type="url"
                        placeholder="Image"
                        className="w-96 input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Instructor Name</span>
                      </label>
                      <input
                        name="instructorName"
                        readOnly
                        value={user.displayName}
                        type="text"
                        className="w-96 input input-bordered text-yellow-500"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Instructor Email</span>
                      </label>
                      <input
                        name="instructorEmail"
                        readOnly
                        type="text"
                        value={user.email}
                        className="w-96 input input-bordered text-yellow-500"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">
                          Available Sits
                          <span className="text-yellow-500 text-xl">
                            *
                          </span>{" "}
                        </span>
                      </label>
                      <input
                        name="sit"
                        type="number"
                        placeholder="Available Sits"
                        className="w-96 input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">
                          Price
                          <span className="text-yellow-500 text-xl">
                            *
                          </span>{" "}
                        </span>
                      </label>
                      <input
                        name="price"
                        type="number"
                        placeholder="Price $"
                        className="w-96 input input-bordered"
                      />
                    </div>
                    <div className="form-control mt-6 col-span-2">
                      <button className="btn btn-outline border-0 border-b-4 border-b-orange-500 hover:border-b-2 hover:bg-yellow-700 text-yellow-500 hover:text-white">
                     <AiOutlineSelect/>   Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddAClass;