function StatCard({ title, value }) {
    return(
        <div className="rounded-xl border bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <p className="mt-2 text-3xl font-bold">{value}</p>
        </div>
    );
}
export default StatCard;