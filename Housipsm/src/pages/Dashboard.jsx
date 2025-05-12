import { useState } from "react";
import LivingRoom from "../rooms/LivingRoom";
import KitchenRoom from "../rooms/KitchenRoom";

function Dashboard() {
  const rooms = ["Living Room", "Kitchen Room", "Bed Room", "Movie Room", "Game Room"];
  const [selectedRoom, setSelectedRoom] = useState("Living Room");

  return (
    <div className="bg-black rounded-r-2xl min-h-screen w-full p-4">
      
      <div className="flex space-x-4 items-center mb-6">
        <h1 className="text-white font-semibold text-2xl">Dashboard</h1>
        <input
          type="text"
          placeholder="Search type of keywords"
          className=" rounded w-[300px] bg-gray-500 px-2 py-1 text-white"
        />
        <button className="text-white">🔍</button>
      </div>

      
      <div className="flex space-x-4  mb-6">
        {rooms.map((room) => (
          <button
            key={room}
            onClick={() => setSelectedRoom(room)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              selectedRoom === room
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-black"
                : "bg-gray-800 text-white"
            }`}
          >
            {room}
          </button>
        ))}
      </div>

      
      <div className="text-white text-xl">
       {selectedRoom == "Living Room" && <LivingRoom />}
       {selectedRoom == "Kitchen Room" && <KitchenRoom />}
       {selectedRoom == "Bed Room" }
       {selectedRoom == "Game Room" }
      </div>

      
    </div>
  );
}

export default Dashboard;
