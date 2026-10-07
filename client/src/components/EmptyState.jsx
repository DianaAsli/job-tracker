function EmptyState() {
    return (
        <div className="rounded-xl border bg-white p-8 text-center">
            <h2 className="text-lg font-semibold">No applications found.</h2>
            <p className="mt-2 text-sm text-gray-500">Try changin your search or filter.</p>
        </div>
    );
}
export default EmptyState;