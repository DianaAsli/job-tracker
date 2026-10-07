function ApplicationCard({ company, position, status, onDelete }) {
    return (
        <div className="flex items-center justify-between rounded-xl border bg-white p-5 shadow-sm">
            <div>
                <h3 className="font-semibold">{company}</h3>
                <p className="mt-1 text-sm text-gray-500">{position}</p>
            </div>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium">{status}</span>

            <button
                type="button"
                onClick={onDelete}
                className="rounded-lg border px-3 text-sm font-medium text-red hover:bg-red-50"
            >Delete
            </button>
        </div>
    );
}
export default ApplicationCard;