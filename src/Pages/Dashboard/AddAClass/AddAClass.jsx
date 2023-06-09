
import Auth from "../../../Hooks/Auth";
import SectionTitle from "../../../SectionTitle/SectionTitle";


const AddAClass = () => {
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
                <div className="card-body grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Class Name{" "}
                        <span className="text-yellow-500 text-xl">*</span>{" "}
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      className="w-96 input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Class Image
                        <span className="text-yellow-500 text-xl">*</span>{" "}
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="password"
                      className="w-96 input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Instructor Name</span>
                    </label>
                    <input
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
                        <span className="text-yellow-500 text-xl">*</span>{" "}
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="password"
                      className="w-96 input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">
                        Price<span className="text-yellow-500 text-xl">*</span>{" "}
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="password"
                      className="w-96 input input-bordered"
                    />
                  </div>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-outline border-0 border-b-4 border-b-orange-500 hover:border-b-2 hover:bg-yellow-700 text-yellow-500 hover:text-white">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AddAClass;