import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    Swal.fire({
      icon: "success",
      title: "Added Toy Successful!",
      text: "You have successfully added toy.",
      confirmButtonText: "OK",
    });

    fetch("http://localhost:5000/addToy", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
    console.log(data);
  };

  return (
    <div className="text-center">
      <h2 className="text-success text-5xl mb-9 font-bold">
        Add Your Favourite Toy
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          className="w-1/2 h-14 rounded-xl p-2 mb-4"
          {...register("title")}
          placeholder="Name"
          defaultValue=""
        />
        <br />
        <input
          className="w-1/2 h-14 rounded-xl p-2 mb-4"
          {...register("sellerName", { required: true })}
          placeholder="Seller Name"
          defaultValue=""
        />
        <br />
        <input
          className="w-1/2 h-14 rounded-xl p-2 mb-4"
          value={user?.email}
          {...register("postedBy")}
          placeholder="Seller Email"
          type="email"
        />

        <br />
        <select
          className="w-1/2 h-14 rounded-xl p-2 mb-4"
          {...register("status")}>
          <option value="sports">Sports Toy</option>
          <option value="truck">Truck Toy</option>
          <option value="police">Police Toy</option>
        </select>
        <br />
        <input
          className="w-1/2 h-14 rounded-xl p-2 mb-4"
          {...register("image")}
          placeholder="image link"
          type="url"
          defaultValue=""
        />
        <br />
        <input
          className="w-1/2 h-14 rounded-xl p-2 mb-4"
          {...register("deadline")}
          placeholder="deadline"
          type="date"
        />
        <br />
        <input
          className="w-1/2 h-14 rounded-xl p-2 mb-4"
          {...register("price")}
          placeholder="Price"
          type="number"
        />
        <br />
        <input
          className="w-1/2 h-14 rounded-xl p-2 mb-4"
          {...register("quantity")}
          placeholder="Available quantity"
          type="number"
        />
        <br />

        
        <input
          className="w-1/2 h-14 rounded-xl p-2"
          {...register("description")}
          placeholder="description"
        />
        <br />
        <div className="w-full items-center text-center mt-4">
          <button className="btn btn-outline btn-success">Add a Toy</button>
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
