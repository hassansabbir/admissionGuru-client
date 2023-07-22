import { useLoaderData } from "react-router-dom";

const DetailsPage = () => {
  const collegeData = useLoaderData();
  console.log(collegeData);

  return (
    <div className="py-24">
      <h2>{collegeData.collegeName}</h2>
    </div>
  );
};

export default DetailsPage;
