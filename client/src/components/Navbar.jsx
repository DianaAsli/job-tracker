function Navbar(){
    return (
        <nav className="flex items-center justify-between border-b px-6 py-4">
            <h1 className="text-xl font-bold">JobTracker</h1>

            <div className="flex gap-6">
                <a href="/" className="text-gray-600 hover:text-black">Dashboard</a>
                <a href="/applications" className="text-gray-600 hover:text-black">Applications</a>
            </div>
        </nav>
    );
}
export default Navbar;