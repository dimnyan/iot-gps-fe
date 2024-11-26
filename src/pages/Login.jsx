import PropTypes from "prop-types";

const Login = ({ onLoginClick }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="rounded-lg bg-gray-400 p-4 w-full m-3 md:w-[50%] lg:w-[40%] xl:w-[400px]">
        <div className="flex justify-center items-center flex-col py-3">
          <h1 className="text-xl font-semibold py-3">Login</h1>
          <p className="font-semibold">Please login to your account</p>
        </div>
        <label className="flex flex-col my-3 gap-2">
          Email
          <input
            type="email"
            placeholder="johndoe@example.com"
            className="rounded-lg px-2 py-1"
          />
        </label>
        <label className="flex flex-col my-3 gap-2">
          Password
          <input
            type="password"
            placeholder="******"
            className="rounded-lg px-2 py-1"
          />
        </label>
        <button
          onClick={() => onLoginClick()}
          className="rounded-lg px-2 py-1 bg-blue-300 my-2"
        >
          Login
        </button>
      </div>
    </div>
  );
};

Login.propTypes = {
  onLoginClick: PropTypes.func.isRequired,
};

export default Login;
