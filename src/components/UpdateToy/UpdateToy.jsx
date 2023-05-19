/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const UpdateToy = (props) => {
  const { handleToyUpdate } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-5" className="btn btn-info">
        Edit
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div {...props} className="modal">
        <div className="modal-box w-11/12 max-w-2xl">
          <h2 className="text-5xl text-accent text-center font-bold mb-10">
            Update Toys
          </h2>
          <form className="text-center" onSubmit={handleSubmit(handleToyUpdate)}>
            {errors.exampleRequired && <span>This field is required</span>}

            <div>
              <h1 className="text-start text-3xl text-accent mb-2 lg:ml-40">Price:</h1>
              <input
                className="w-1/2 h-14 rounded-xl p-2 mb-4 input-accent"
                {...register("price")}
                placeholder="Price"
                type="number"
                defaultValue={props?.toy?.price}
              />
            </div>

            <input
              className="w-1/2 h-14 rounded-xl p-2 mb-4 hidden"
              {...register("_id")}
              defaultValue={props?.toy?._id}
            />

            <div>
              <h1 className="text-start text-3xl text-accent mb-2 lg:ml-40">Available Quantity:</h1>
              <input
                className="w-1/2 h-14 rounded-xl p-2 mb-4 input-accent"
                {...register("quantity")}
                placeholder="Available quantity"
                type="number"
                defaultValue={props?.toy?.quantity}
              />
            </div>

            <div>
              <h1 className="text-start text-3xl text-accent mb-2 lg:ml-40">Description:</h1>
              <input
                className="w-1/2 h-14 rounded-xl p-2 input-accent"
                {...register("description")}
                placeholder="description"
                defaultValue={props?.toy?.description}
              />
            </div>

            <div className="w-full mt-4">
              <button className="btn btn-outline btn-success">
                Update Toy
              </button>
            </div>
          </form>

          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Exit!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
