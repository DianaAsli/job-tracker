import ApplicationCard from "../components/ApplicationCard";
import applications from "../data/applications";
import { useState } from "react";

function Applications() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState('All');

    const filteredApplications = applications.filter((application) => {
        const matchesSearch = application.company.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        const matchesStatus = selectedStatus === 'All' || application.status === selectedStatus;

        return matchesSearch && matchesStatus;
    });


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

                <select
                    value={selectedStatus}
                    onChange={(event) => setSelectedStatus(event.target.value)}
                    className="rounded-lg border mt-2 bg-white px-4 py-3 outline-none focus:ring-2"
                >
                    <option value="All">All statues</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Rejected">Rejected</option>
                </select>
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