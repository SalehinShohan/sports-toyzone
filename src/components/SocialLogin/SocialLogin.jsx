import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSingIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSingIn = () => {
    googleSingIn()
      .then((result) => {
        console.log(result.user);
        navigate(from, {replace:true});
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handleGoogleSingIn}
          className="btn btn-circle btn-outline">
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
