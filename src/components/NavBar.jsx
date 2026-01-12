import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6">
      <Link to="/" className="hover:underline">
        Planner
      </Link>
      <Link to="/progress" className="hover:underline">
        Progress
      </Link>
      <Link to="/dashboard" className="hover:underline">
        Dashboard
      </Link>
    </nav>
  );
}
