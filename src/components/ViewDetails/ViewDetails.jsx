import { useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {

  const allData = useLoaderData();

  const {toyInfoId} = useParams();
  console.log(toyInfoId)

  console.log(allData.title)

  const {
    title,
    
  } = allData;

  


  
  return (
    <div>
        <h1>data: {title}</h1>
    </div>
  );
};

export default ViewDetails;
