import {Link} from "react-router-dom";

function Navbar(){
    return (
        <nav className="flex items-center justify-between border-b px-6 py-4">
            <Link to="/" className="text-xl font-bold">JobTracker</Link>

            <div className="flex gap-6">
                <Link to="/" className="text-gray-600 hover:text-black">Dashboard</Link>
                <Link to="/applications" className="text-gray-600 hover:text-black"> Applications</Link>
            </div>
        </nav>
    );
}
export default Navbar;