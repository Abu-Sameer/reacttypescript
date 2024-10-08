import { Link, Outlet } from "react-router-dom";
import Model from "./Model";

export default function Com() {
  return (
    <div className="flex justify-between p-4">
      <div>
        <div className="flex space-x-5 items-center">
          <Link
            className="bg-blue-600 py-2 px-6 border-none rounded-md text-white"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="bg-blue-600 py-2 px-6 border-none rounded-md text-white"
            to="/signout"
          >
            SignOut
          </Link>
          <Link
            className="bg-blue-600 py-2 px-6 border-none rounded-md text-white"
            to="/home"
          >
            Home
          </Link>
          <Link
            className="bg-blue-600 py-2 px-6 border-none rounded-md text-white"
            to="/about"
          >
            About
          </Link>
        </div>
        <Outlet />
      </div>
      <Model />
    </div>
  );
}
