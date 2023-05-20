import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import useTitle from "../Hooks/useTitle";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  useTitle("Add a Toy")
  

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

    fetch("https://sports-toyzone-server.vercel.app/addToy", {
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
    <div className="">
      <h2 className="text-accent text-center text-5xl mb-10 font-bold">
        Add Your Favourite Toy
      </h2>
      <form className="text-center" onSubmit={handleSubmit(onSubmit)}>
        {errors.exampleRequired && <span>This field is required</span>}
        <div>
          <h1 className="text-2xl text-start text-accent lg:ml-80 mb-2">Toy Name:</h1>
        <input
          className="w-1/2 h-14 rounded-xl p-2 mb-2 bg bg-base-300 input-accent"
          {...register("title")}
          placeholder="Name"
          defaultValue=""
        />
        </div>
        
        <div>
        <h1 className="text-2xl text-start text-accent lg:ml-80 mb-2">Seller Name:</h1>
        <input
          className="w-1/2 h-14 rounded-xl p-2 mb-2 bg bg-base-300 input-accent"
          {...register("sellerName", { required: true })}
          placeholder="Seller Name"
          defaultValue=""
        />
        </div>
        
        <div>
        <h1 className="text-2xl text-start text-accent lg:ml-80 mb-2">Seller Email:</h1>
        <input
          className="w-1/2 h-14 rounded-xl p-2 mb-2 bg bg-base-300 input-accent"
          value={user?.email}
          {...register("postedBy")}
          placeholder="Seller Email"
          type="email"
        />
        </div>

        
        <div>
        <h1 className="text-2xl text-start text-accent lg:ml-80 mb-2">Category:</h1>
        <select
          className="w-1/2 h-14 rounded-xl p-2 mb-2 bg bg-base-300 input-accent"
          {...register("status")}>
          <option value="sports">Sports Toy</option>
          <option value="truck">Truck Toy</option>
          <option value="police">Police Toy</option>
        </select>
        </div>
        
        <div>
        <h1 className="text-2xl text-start text-accent lg:ml-80 mb-2">Image URL:</h1>
        <input
          className="w-1/2 h-14 rounded-xl p-2 mb-2 bg bg-base-300 input-accent"
          {...register("image")}
          placeholder="image link"
          type="url"
          defaultValue=""
        />
        </div>
        
        <div>
        <h1 className="text-2xl text-start text-accent lg:ml-80 mb-2">Date:</h1>
        <input
          className="w-1/2 h-14 rounded-xl p-2 mb-2 bg bg-base-300 input-accent"
          {...register("deadline")}
          placeholder="deadline"
          type="date"
        />
        </div>
        
        <div>
        <h1 className="text-2xl text-start text-accent lg:ml-80 mb-2">Price:</h1>
        <input
          className="w-1/2 h-14 rounded-xl p-2 mb-2 bg bg-base-300 input-accent"
          {...register("price")}
          placeholder="Price"
          type="number"
        />
        </div>
        
        <div>
        <h1 className="text-2xl text-start text-accent lg:ml-80 mb-2">Available Quantity:</h1>
        <input
          className="w-1/2 h-14 rounded-xl p-2 mb-2 bg bg-base-300 input-accent"
          {...register("quantity")}
          placeholder="Available quantity"
          type="number"
        />
        </div>
        
        <div>
        <h1 className="text-2xl text-start text-accent lg:ml-80 mb-2">Description:</h1>
        <input
          className="w-1/2 h-14 rounded-xl p-2 bg bg-base-300 input-accent"
          {...register("description")}
          placeholder="Description"
        />
        </div>
        
      
        <div className="w-full mt-4">
          <button className="btn btn-outline btn-success">Add a Toy</button>
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
