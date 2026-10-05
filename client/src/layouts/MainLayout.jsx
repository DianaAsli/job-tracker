import Navbar from "../components/Navbar";

function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <main className="mx-auto max-w-7xl px-6 py-8">
                {children}
            </main>
        </div>
    );
}
export default MainLayout;