import ApplicationCard from "../components/ApplicationCard";
import applications from "../data/applications";
import { useState } from "react";

function Applications() {
    const[searchTerm, setSearchTerm] = useState("");
    const filteredApplications = applications.filter((application) => 
        application.company.toLowerCase().includes(searchTerm.toLocaleLowerCase()))

    return (
        <div>
            <h1 className="text-3xl font-bold">Aplications</h1>
            <p className="mt-2 text-gray-600">Mange your applications here.</p>

            <div className="mt-8">
                <input type="text" 
                placeholder="Search applications..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                className="w-full rounded-lg border bg-white px-4 py-3 otline-none focus:ring-2"
                />
            </div>

            <div className="mt-8 space-y-4">
                {filteredApplications.map((application) => (
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