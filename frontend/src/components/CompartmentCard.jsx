import { Pill, Clock, CheckCircle, XCircle, Settings } from "lucide-react";

export default function CompartmentCard({ number, time, status }) {
  const statusStyles = {
    empty: "bg-gray-100 text-gray-600",
    scheduled: "bg-blue-100 text-blue-700",
    taken: "bg-green-100 text-green-700",
    missed: "bg-red-100 text-red-700",
    active: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="bg-white rounded-2xl shadow p-5 border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">Compartment {number}</p>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Pill size={22} />
            Pill Slot {number}
          </h2>
        </div>

        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusStyles[status]}`}>
          {status}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-2 text-gray-700">
        <Clock size={20} />
        <span className="text-lg">{time || "No time set"}</span>
      </div>

      <button className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-700">
        <Settings size={18} />
        Set / Edit Schedule
      </button>
    </div>
  );
}