import ApplicationCard from "../components/ApplicationCard";
import StatCard from "../components/StatCard";
import applications from "../data/applications";

function Dashboard() {
    return (
        <div>
            <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="mt-2 text-gray-600">Here is an overview of your job search.</p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
                <StatCard title="Applications" value="12" />
                <StatCard title="Interviews" value={3} />
                <StatCard title="Offers" value="1" />
            </div>

            <div className="mt-10">
                <h2 className="text-xl font-semibold">Recent Applications</h2>

                <div className="mt-4 space-y-4">
                    {applications.slice(0,3).map((application) => (
                        <ApplicationCard
                            key={application.id}
                            company={application.company}
                            position={application.position}
                            status={application.status}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}
export default Dashboard;