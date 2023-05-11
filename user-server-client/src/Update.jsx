import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedData = useLoaderData();
  return (
    <div>
      <h1>Update information of {loadedData.name}</h1>
    </div>
  );
};

export default Update;
