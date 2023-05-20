import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import useTitle from "../Hooks/useTitle";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  useTitle('Signup');

  const handleSignUp = (event) => {
    event.preventDefault();
    setError('');
    
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    

    console.log(name, email, password, photo);

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError("Password not valid need 8 character");
      return;
    }

    if ((email, password)){
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Signup Successful!",
          text: "You have successfully signed up.",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Please provide valid information.",
          confirmButtonText: "OK",
        });
      });
    }
  };

  return (
    <div className="hero bg-base-100">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12"></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="file"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered p-2"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="Your Password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p className="text-center">{error}</p>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already Have an Account?{" "}
              <Link className="text-orange-600 font-bold" to="/login">
                Login
              </Link>{" "}
            </p>
            <SocialLogin></SocialLogin>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SingUp;
