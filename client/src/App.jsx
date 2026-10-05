import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (

    <MainLayout>
      <main>
        <h2 className="text-3xl font-bold">Welcome to Jobtracker</h2>
        <p className="mt-2 text-gray-600">Track your job applications in one place. </p>
      </main>
    </MainLayout>

  )
};
export default App;