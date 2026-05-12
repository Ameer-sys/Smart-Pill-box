import { Bell, Wifi, User } from "lucide-react";
import CompartmentCard from "../components/CompartmentCard";

export default function Dashboard() {
  const compartments = [
    { number: 1, time: "09:00 AM", status: "scheduled" },
    { number: 2, time: "12:30 PM", status: "scheduled" },
    { number: 3, time: "05:00 PM", status: "empty" },
    { number: 4, time: "08:00 PM", status: "taken" },
    { number: 5, time: "10:00 PM", status: "missed" },
  ];

  return (
    <div className="min-h-screen bg-[#f4f8fb]">
      <header className="bg-white border-b px-8 py-5 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-blue-700">Smart Pillbox</h1>
          <p className="text-gray-500">Today’s medication reminders</p>
        </div>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
            <Wifi size={18} />
            Device Connected
          </span>

          <button className="p-3 bg-blue-100 text-blue-700 rounded-full">
            <Bell size={22} />
          </button>

          <button className="p-3 bg-gray-100 text-gray-700 rounded-full">
            <User size={22} />
          </button>
        </div>
      </header>

      <main className="p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Your Compartments</h2>
          <p className="text-gray-500">
            Set one daily reminder time for each compartment.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {compartments.map((compartment) => (
            <CompartmentCard
              key={compartment.number}
              number={compartment.number}
              time={compartment.time}
              status={compartment.status}
            />
          ))}
        </section>
      </main>
    </div>
  );
}