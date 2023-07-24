import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const Reviews = ({ user, myCollege }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const {
    register,
    handleSubmit,

    reset,
  } = useForm();

  const onSubmit = (data) => {
    const addAReview = {
      name: user?.displayName,
      email: user?.email,
      photoUrl: user?.photoURL,
      ratedCollege: myCollege?.collegeName,
      ratedCollegeId: myCollege?._id,
      rating: parseFloat(rating),
      ...data,
    };
    fetch(`${import.meta.env.VITE_SERVER_API}/reviews`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(addAReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: `Successfully rating added to ${myCollege.collegeName}`,
            icon: "success",
            confirmButtonText: "Done",
          });
        }
        reset();
      });
  };

  return (
    <div className="flex flex-col py-20 bg-slate-100 rounded-3xl justify-center items-center">
      <div className="p-5 border shadow-md bg-base-100 hover:shadow-2xl w-11/12 md:w-5/12 rounded-3xl my-5">
        <h2 className="text-3xl my-5 font-bold">
          Give Your Rating on This College.
        </h2>
        <div className="md:flex items-center gap-10">
          <div className="flex">
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label key={index}>
                  <input
                    className="hidden"
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                  />
                  <FaStar
                    className=" cursor-pointer"
                    size={50}
                    color={
                      currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          <p className="text-3xl">
            Your rating is - <span className="font-bold">{rating}/5</span>
          </p>
        </div>
      </div>
      <div className="border p-5 text-center bg-base-100 shadow-md hover:shadow-2xl rounded-3xl w-11/12 md:w-6/12">
        <h2 className="text-3xl my-5 font-bold">
          Give Your Feedback on This College.
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register("feedback")}
            className="border p-5 w-10/12 text-xl"
            name="feedback"
            placeholder="Give your feedback here"
            cols="60"
            rows="5"
          ></textarea>
          <button
            className="btn bg-blue-800 hover:bg-blue-600 text-white"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
