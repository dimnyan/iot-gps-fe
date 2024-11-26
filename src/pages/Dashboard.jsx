import PropTypes from "prop-types";

const Dashboard = ({ onLogoutCLick }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="p-3 flex justify-between w-full px-5">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <button
          onClick={() => onLogoutCLick()}
          className="bg-red-300 px-2 py-1 rounded-lg hover:bg-red-500"
        >
          Logout
        </button>
      </div>
      <div className="m-3">
        <h1 className="text-center m-2 font-semibold">Vehicle Status</h1>
        <p>Last active: 12:12:20</p>
        <p>On From: 11:11:22</p>
        <p>On Duration: 0:20:11</p>
      </div>
      <div className="my-5">
        <h1 className="m-2 text-center font-semibold">Location</h1>
        <iframe
          src="https://maps.google.com/maps?q=10.305385,77.923029&hl=es;z=14&amp;output=embed"
          className="w-[80vw] h-[80vh] p-3"
        ></iframe>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  onLogoutCLick: PropTypes.func.isRequired,
};

export default Dashboard;
