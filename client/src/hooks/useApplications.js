import {
    useState
} from "react";
import applications from "../data/applications";

function useApplications() {
    const [applicationList, setApplicationList] = useState(applications);
    const [editingApplicationId, setEditingApplicationId] = useState(null);

    const handleApplication = (newApplication) => {
        const application = {
            id: Date.now(),
            ...newApplication
        };

        setApplicationList((currentApplications) => [
            ...currentApplications,
            application
        ])
    }
    const handleDeleteApplication = (id) => {
        setApplicationList((currentApplications) =>
            currentApplications.filter((application) => application.id !== id))
    }
    const handleEditApplication = (id) => {
        setEditingApplicationId(id);
    }
    const handleUpdateApplication = (id, updatedApplication) => {
        setApplicationList((currentApplications) =>
            currentApplications.map((application) =>
                application.id === id ? {
                    ...application,
                    ...updatedApplication
                } : application)
        );
        setEditingApplicationId(null);
    }


    return {
        applicationList,
        setApplicationList,
        editingApplicationId,
        setEditingApplicationId,
        handleApplication,
        handleDeleteApplication,
        handleDeleteApplication,
        handleUpdateApplication
    }
}
export default useApplications;