import { useState } from "react";

function AddApplicationForm({ onAddApplication }) {
    const [formData, setFormData] = useState({
        company: "",
        position: "",
        status: "Applied"
    });
    const [error, setError] = useState('');

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (!formData.company.trim() || !formData.position.trim()) {
                setError('Company and position are required.')
                return;
            }
            setError('');

            onAddApplication(formData);

            setFormData({
                company: '',
                position: '',
                status: 'Applied'
            })
        }}>
            <h2 className="text-lg font-semibold">Add Application</h2>

            {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
            )}

            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="">Company</label>
                <input
                    type="text"
                    value={formData.company}
                    onChange={(event) => setFormData({
                        ...formData,
                        company: event.target.value,
                    })}
                    placeholder="Company name..."
                    className="mt-1 w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
                />
            </div>

            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="">Position</label>
                <input
                    type="text"
                    value={formData.position}
                    onChange={(event) => setFormData({
                        ...formData,
                        position: event.target.value,
                    })}
                    placeholder="Position..."
                    className="mt-1 w-full rounded-lg border px-4 py-3 outline-none focus:ring-2"
                />
            </div>

            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="">Status</label>
                <select
                    value={formData.status}
                    onChange={(event) => setFormData({
                        ...formData,
                        status: event.target.value,
                    })}
                    className="mt-1 w-full rounded-lg border bg-white px-4 py-3 outline-none focus:ring-2"
                >
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </div>

            <button
                type="submit"
                className="mt-6 rounded-lg bg-black px-5 py-3 font-medium text-white hoover:bg-gray-800"
            >
                Add Application
            </button>
        </form>
    );
}
export default AddApplicationForm;