import AddApplicationForm from "../components/AddApplicationForm";
import ApplicationCard from "../components/ApplicationCard";
import applications from "../data/applications";
import { useState } from "react";

function Applications() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [applicationList, setApplicationList] = useState(applications);
    const [editingApplicationId, setEditingApplicationId] = useState(null);

    const handleAddApplication = (newApplication) => {
        const application = {
            id: Date.now(),
            ...newApplication,
        };

        setApplicationList((currentApplications) =>
            [...currentApplications,
                application]
        )
    }

    const handleDeleteApplication = (id) => {
        setApplicationList((currentApplications) =>
            currentApplications.filter((application) => application.id !== id))
    }

    const handleEditApplication = (id) => {
        setEditingApplicationId(id);
    }
    const editingApplication = applicationList.find((application) => application.id === editingApplicationId);

    const handleUpdateApplication = (id, updatedApplication) => {
        setApplicationList((currentApplications) =>
            currentApplications.map((application) =>
                application.id === id ?
                    {
                        ...application, ...updatedApplication
                    } : application)
        );
        setEditingApplicationId(null);
    }

    const filteredApplications = applicationList.filter((application) => {
        const matchesSearch = application.company.toLowerCase().includes(searchTerm.toLowerCase())
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

            <AddApplicationForm
                onAddApplication={handleAddApplication}
                editingApplication={editingApplication}
                onEditApplication={handleUpdateApplication}
                onCancelEdit={() => setEditingApplicationId(null)} />

            <div className="mt-6 space-y-4">
                {filteredApplications.length > 0 ?
                    (filteredApplications.map((application) => (
                        <ApplicationCard
                            key={application.id}
                            company={application.company}
                            position={application.position}
                            status={application.status}
                            onEdit={() => handleEditApplication(application.id)}
                            onDelete={() => handleDeleteApplication(application.id)}
                        />))
                    ) : (
                        <div className="rounded-xl border bg-white p-8 text-center">
                            <h2 className="text-lg font-semibold">No applications found.</h2>
                            <p className="mt-2 text-sm text-gray-500">Try changin your search or filter.</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
export default Applications;