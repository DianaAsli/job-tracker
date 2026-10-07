import AddApplicationForm from "../components/AddApplicationForm";
import ApplicationCard from "../components/ApplicationCard";
import ApplicationFilters from "../components/ApplicationFilters";
import EmptyState from "../components/EmptyState";
import { useState } from "react";
import useApplications from "../hooks/useApplications";

function Applications({
    applicationList,
    editingApplicationId,
    handleAddApplication,
    handleDeleteApplication,
    handleEditApplication,
    handleUpdateApplication,
    setEditingApplicationId
}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = useState('All');

    const {
        applicationList,
        editingApplicationId,
        handleAddApplication,
        handleDeleteApplication,
        handleEditApplication,
        handleUpdateApplication,
        setEditingApplicationId
    } = useApplications();

    const editingApplication = applicationList.find((application) => application.id === editingApplicationId);

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