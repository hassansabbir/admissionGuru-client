// import { useContext } from "react";
import { useForm } from "react-hook-form";
// import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useProfile from "../../hooks/useProfile";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const EditProfile = () => {
  const [myProfile] = useProfile();
  console.log(myProfile);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    fetch(`${import.meta.env.VITE_SERVER_API}/bookings/${myProfile[0]?._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: `Successfully Profile Updated`,
            icon: "success",
            confirmButtonText: "Done",
          });
        }
        reset();
        navigate("/myProfile", { replace: true });
      });
  };

  return (
    <div className="py-24">
      <Helmet>
        <title>Edit Details - AdmissionGuru</title>
      </Helmet>
      <h2 className="text-5xl text-center font-bold">
        Edit Your Profile Details
      </h2>
      <div className="hero my-10">
        <div className="hero-content w-full flex-col">
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="w-full lg:flex gap-5">
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Candidate Name
                    </span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    defaultValue={myProfile[0]?.name}
                    placeholder="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control lg:w-1/2">
                  <label className="label">
                    <span className="label-text text-xl font-bold">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    defaultValue={myProfile[0]?.email}
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">
                    College Name
                  </span>
                </label>
                <input
                  {...register("collegeName", { required: true })}
                  type="text"
                  defaultValue={myProfile[0]?.collegeName}
                  placeholder="photoUrl"
                  className="input input-bordered"
                />
                {errors.collegeName && (
                  <span className="text-red-600">College Name is required</span>
                )}
              </div>

              <div className="w-full lg:flex gap-5">
                <div className="form-control lg:w-1/3">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Booking for Subject
                    </span>
                  </label>
                  <input
                    {...register("subject", { required: true })}
                    type="text"
                    defaultValue={myProfile[0]?.subject}
                    placeholder="subject"
                    className="input input-bordered"
                  />
                  {errors.subject && (
                    <span className="text-red-600">Subject is required</span>
                  )}
                </div>
                <div className="form-control lg:w-1/3">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Candidate Phone Number
                    </span>
                  </label>
                  <input
                    {...register("phone", { required: true })}
                    type="text"
                    defaultValue={myProfile[0]?.phone}
                    placeholder="phone"
                    className="input input-bordered"
                  />
                  {errors.phone && (
                    <span className="text-red-600">
                      Phone Number is required
                    </span>
                  )}
                </div>
                <div className="form-control lg:w-1/3">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Date Of Birth
                    </span>
                  </label>
                  <input
                    {...register("bDate", { required: true })}
                    type="date"
                    defaultValue={myProfile[0]?.bDate}
                    placeholder="date of birth"
                    className="input input-bordered"
                  />
                  {errors.bDate && (
                    <span className="text-red-600">
                      Date of Birth is required
                    </span>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Address</span>
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  defaultValue={myProfile[0]?.address}
                  placeholder="address"
                  className="input input-bordered"
                />
                {errors.address && (
                  <span className="text-red-600">Address is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-800 hover:bg-blue-600 text-white text-xl">
                  Save Edit Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
