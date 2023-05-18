/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const UpdateToy = (props) => {
  

  const {handleToyUpdate} = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal-5" className="btn">
        Edit
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div {...props} className="modal">
        
        <div className="modal-box w-11/12 max-w-5xl text-center">
        <h2 className="text-5xl text-white font-bold mb-10">Update Toys</h2>
          <form onSubmit={handleSubmit(handleToyUpdate)}>
            {errors.exampleRequired && <span>This field is required</span>}
            
            <input
              className="w-1/2 h-14 rounded-xl p-2 mb-4"
              {...register("price")}
              placeholder="Price"
              type="number"
              defaultValue={props?.toy?.price}
            />
            <br />
            <input
              className="w-1/2 h-14 rounded-xl p-2 mb-4 hidden"
              {...register("_id")}
              
              defaultValue={props?.toy?._id}
            />
            
            <input
              className="w-1/2 h-14 rounded-xl p-2 mb-4"
              {...register("quantity")}
              placeholder="Available quantity"
              type="number"
              defaultValue={props?.toy?.quantity}
            />
            <br />

            <input
              className="w-1/2 h-14 rounded-xl p-2"
              {...register("defaultValue={props?.toy?.quantity}")}
              placeholder="description"
              defaultValue={props?.toy?.description}
            />
            <br />
            <div className="w-full items-center text-center mt-4">
              <button className="btn btn-outline btn-success">Update Toy</button>
            </div>
          </form>

          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateToy;
