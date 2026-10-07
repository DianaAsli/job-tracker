import AddApplicationForm from "../components/AddApplicationForm";
import ApplicationCard from "../components/ApplicationCard";
import ApplicationFilters from "../components/ApplicationFilters";
import EmptyState from "../components/EmptyState";
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

            <ApplicationFilters
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
            />

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
                        <EmptyState />
                    )
                }
            </div>
        </div>
    );
}
export default Applications;