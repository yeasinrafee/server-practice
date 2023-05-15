import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`)
          .then((res) => res.json())
          .then((data) => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            console.log("deleted successfully");
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl mt-20">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex w-full justify-around items-center">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Taste: {taste}</p>
          <p>Category: {category}</p>
          <p>Details: {details}</p>
        </div>
        <div className="">
          <div className="btn-group btn-group-vertical">
            <button className="btn btn-active">Details</button>
            <button className="btn">Update</button>
            <button
              className="btn bg-red-500"
              onClick={() => handleDelete(_id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
