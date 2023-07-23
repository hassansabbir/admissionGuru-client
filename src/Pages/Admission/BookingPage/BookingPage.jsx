import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const BookingPage = () => {
  const collegeData = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const addABooking = {
      ...data,
      collegeName: collegeData.collegeName,
    };
    fetch(`${import.meta.env.VITE_SERVER_API}/bookings`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addABooking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: `Successfully Seat Booked to ${collegeData.collegeName}`,
            icon: "success",
            confirmButtonText: "Done",
          });
        }
        reset();
      });
  };

  return (
    <div className="py-24">
      <h2 className="text-5xl font-bold text-center">
        Book Your Seat In <br />{" "}
        <span className="text-blue-800">{collegeData.collegeName}</span>
      </h2>
      <div className="hero my-10">
        <div className="hero-content w-full flex-col">
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="w-full flex gap-5">
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Candidate Name
                    </span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    defaultValue={user?.displayName}
                    placeholder="name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control w-1/2">
                  <label className="label">
                    <span className="label-text text-xl font-bold">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    defaultValue={user?.email}
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
                    Candidate Image
                  </span>
                </label>
                <input
                  {...register("photoUrl", { required: true })}
                  type="text"
                  defaultValue={user?.photoURL}
                  placeholder="photoUrl"
                  className="input input-bordered"
                />
                {errors.photoUrl && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>

              <div className="w-full flex gap-5">
                <div className="form-control w-1/3">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Booking for Subject
                    </span>
                  </label>
                  <input
                    {...register("subject", { required: true })}
                    type="text"
                    placeholder="subject"
                    className="input input-bordered"
                  />
                  {errors.subject && (
                    <span className="text-red-600">Subject is required</span>
                  )}
                </div>
                <div className="form-control w-1/3">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Candidate Phone Number
                    </span>
                  </label>
                  <input
                    {...register("phone", { required: true })}
                    type="text"
                    placeholder="phone"
                    className="input input-bordered"
                  />
                  {errors.phone && (
                    <span className="text-red-600">
                      Phone Number is required
                    </span>
                  )}
                </div>
                <div className="form-control w-1/3">
                  <label className="label">
                    <span className="label-text text-xl font-bold">
                      Date Of Birth
                    </span>
                  </label>
                  <input
                    {...register("bDate", { required: true })}
                    type="date"
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
                  placeholder="address"
                  className="input input-bordered"
                />
                {errors.address && (
                  <span className="text-red-600">Address is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-800 hover:bg-blue-600 text-white text-xl">
                  Submit Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
