import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const collegeData = useLoaderData();
  const {
    collegeName,
    collegeImage,
    researchHistory,
    admissionProcess,
    admissionStarts,
    admissionEnds,
    researchWorks,
    events,
    sports,
  } = collegeData;

  return (
    <>
      <img
        className=" w-full rounded-3xl lg:h-[800px] "
        src={collegeImage}
        alt=""
      />
      <div className="bg-blue-100 md:w-11/12 lg:w-full md:mx-auto  rounded-3xl px-5 md:px-0 shadow-lg pt-2 pb-14 mt-10">
        <h2 className="text-5xl text-center my-10 font-bold">{collegeName}</h2>
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            <span className="text-blue-800">Admission Starts:</span>{" "}
            {admissionStarts}
          </h2>
          <h2 className="text-2xl font-bold">
            <span className="text-blue-800">Admission Ends:</span>{" "}
            {admissionEnds}
          </h2>
        </div>
      </div>
      <div className="my-16 md:px-10 lg:px-0">
        <div className="px-5 md:px-0">
          <p className="text-xl">
            <span className="text-4xl font-bold">History:</span> <br />{" "}
            {researchHistory}
          </p>
        </div>
        <div className="mt-10 px-5 md:px-0">
          <p className="text-xl">
            <span className="text-4xl font-bold">Admission Process:</span>
            <br /> {admissionProcess}
          </p>
        </div>
      </div>
      <div className="px-5 md:px-10 lg:px-0">
        <h2 className="text-4xl my-10 font-bold">Our Events:</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {events.map((event, i) => (
            <div
              className="bg-slate-200 p-10 shadow-lg hover:shadow-2xl rounded-3xl"
              key={i}
            >
              <h2 className="text-3xl font-bold">{event.name}</h2>
              <p className="text-xl my-2">{event.details}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 md:px-10 lg:px-0">
        <h2 className="text-4xl my-10 font-bold">Popular Sports:</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {sports.map((sport, i) => (
            <div
              className="bg-slate-100 p-10 shadow-lg hover:shadow-2xl rounded-3xl"
              key={i}
            >
              {" "}
              <img
                className="w-full md:w-7/12 lg:w-full md:mx-auto h-56 rounded-3xl"
                src={sport.sportsImage}
                alt=""
              />
              <h2 className="text-3xl font-bold my-5 text-center">
                {sport.name}
              </h2>
              <p className="text-xl text-center">{sport.details}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-10 px-5 md:px-10 lg:px-0">
        <h2 className="text-4xl my-10 font-bold">Research Works:</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {researchWorks.map((researchWork, i) => (
            <div
              className="bg-blue-50 p-10 shadow-lg hover:shadow-2xl rounded-3xl"
              key={i}
            >
              <h2 className="text-3xl font-bold">{researchWork.title}</h2>
              <p className="text-xl my-2">{researchWork.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
