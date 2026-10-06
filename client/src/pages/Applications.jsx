import ApplicationCard from "../components/ApplicationCard";
import applications from "../data/applications";

function Applications() {
    return (
        <div>
            <h1 className="text-3xl font-bold">Aplications</h1>
            <p className="mt-2 text-gray-600">Mange your applications here.</p>

            <div className="mt-8 space-y-4">
                {applications.map((application) => (
                    <ApplicationCard
                        key={application.id}
                        company={application.company}
                        position={application.position}
                        status={application.status}
                    />
                ))}
            </div>
        </div>
    );
}
export default Applications;