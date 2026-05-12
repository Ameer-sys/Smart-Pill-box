import { Link } from "react-router-dom";
import { Pill, Bell, Activity } from "lucide-react";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-[#f4f8fb] flex items-center justify-center px-6">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-lg p-10 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 text-blue-700 p-5 rounded-full">
            <Pill size={48} />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Chrono-Pill 
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          A simple medication reminder system that uses lights, sound,
          vibration, and automatic compartment detection to track whether a
          dose was taken.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-blue-50 p-5 rounded-2xl">
            <Bell className="mx-auto text-blue-700 mb-2" />
            <h3 className="font-bold text-gray-800">Remind</h3>
            <p className="text-sm text-gray-500">Alerts at the scheduled time.</p>
          </div>

          <div className="bg-green-50 p-5 rounded-2xl">
            <Pill className="mx-auto text-green-700 mb-2" />
            <h3 className="font-bold text-gray-800">Detect</h3>
            <p className="text-sm text-gray-500">Records when a compartment opens.</p>
          </div>

          <div className="bg-red-50 p-5 rounded-2xl">
            <Activity className="mx-auto text-red-700 mb-2" />
            <h3 className="font-bold text-gray-800">Track</h3>
            <p className="text-sm text-gray-500">Shows taken and missed doses.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/login"
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-white border border-blue-600 text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50"
          >
            Create Account
          </Link>

          <Link
            to="/dashboard"
            className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}