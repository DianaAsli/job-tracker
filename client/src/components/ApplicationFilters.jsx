function ApplicationFilters({searchTerm, selectedStatus, setSearchTerm, setSelectedStatus}) {
    return (
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
    );
}
export default ApplicationFilters;