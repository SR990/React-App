import tv from '../assets/screen.png';
import wifi from '../assets/wifi.png';
import router from '../assets/router.png';
import heater from '../assets/heater.png';
import speaker from '../assets/speaker.png';
import socket from '../assets/socket.png';
import light from '../assets/brightness.png';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const GameRoom = () => {
  const chartData = [
    { allocation: 60, type: '11:00' },
    { allocation: 45, type: '12:00' },
    { allocation: 12, type: '4:00' },
    { allocation: 4, type: '9:00' },
  ];

  return (
    <div className="mt-9">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="bg-gray-800 p-4 rounded-xl text-white w-[300px] mb-2">
          <h3 className="text-lg font-semibold">Room Temperature</h3>
          <p className="text-3xl font-bold text-blue-300 mt-4 text-center">
            21°C
          </p>
          <p className="text-sm text-gray-400 text-center mt-2">
            Game Room Temp
          </p>
          <div className="w-[200px] bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl h-2 mt-2"></div>
        </div>

        <div className="bg-gray-800 p-4 rounded-xl text-white mb-2">
          <h3 className="text-lg font-semibold">Energy Usage</h3>
          <ResponsiveContainer width="100%" height={150}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="allocation" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-7">
        <div className="flex justify-between mb-3">
          <h2>My Game Room Devices</h2>
          <h2 className="pr-[20%]">Lights</h2>
        </div>

        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6 md:col-span-6 lg:col-span-4 grid grid-cols-3 gap-4">
            <div className="bg-black p-4 text-white border-r border-b">
              <img src={tv} className="w-10 h-10 mb-5" alt="Console" />
              <div className="flex justify-between">
                <div>
                  <p>Gaming Console</p>
                  <p className="text-sm text-gray-400">Active for 5 hours</p>
                </div>
                <p className="text-[15px] pr-5">3.2kWh</p>
              </div>
            </div>

            <div className="bg-black p-4 text-white border-r border-b">
              <img src={speaker} className="w-10 h-10 mb-5" alt="Sound" />
              <div className="flex justify-between">
                <div>
                  <p>Surround Sound</p>
                  <p className="text-sm text-gray-400">Active for 3 hours</p>
                </div>
                <p className="text-[15px] pr-5">1.8kWh</p>
              </div>
            </div>

            <div className="bg-black p-4 text-white border-b">
              <img src={router} className="w-10 h-10 mb-5" alt="PC" />
              <div className="flex justify-between">
                <div>
                  <p>Gaming PC</p>
                  <p className="text-sm text-gray-400">Active for 6 hours</p>
                </div>
                <p className="text-[15px] pr-5">5.6kWh</p>
              </div>
            </div>

            <div className="bg-black p-4 text-white border-r">
              <img src={wifi} className="w-10 h-10 mb-5" alt="VR Headset" />
              <div className="flex justify-between">
                <div>
                  <p>VR Headset</p>
                  <p className="text-sm text-gray-400">Active for 1 hour</p>
                </div>
                <p className="text-[15px] pr-5">0.9kWh</p>
              </div>
            </div>

            <div className="bg-black p-4 text-white border-r">
              <img src={heater} className="w-10 h-10 mb-5" alt="LED" />
              <div className="flex justify-between">
                <div>
                  <p>LED Strip Lights</p>
                  <p className="text-sm text-gray-400">Active for 7 hours</p>
                </div>
                <p className="text-[15px] pr-5">1.1kWh</p>
              </div>
            </div>

            <div className="bg-black p-4 text-white">
              <img
                src={socket}
                className="w-10 h-10 mb-5"
                alt="Light Controller"
              />
              <div className="flex justify-between">
                <div>
                  <p>Light Controller</p>
                  <p className="text-sm text-gray-400">Active for 8 hours</p>
                </div>
                <p className="text-[15px] pr-5">0.6kWh</p>
              </div>
            </div>
          </div>

          <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-[60px]">
            <div className="flex space-x-2 mt-5">
              <img src={light} className="w-7 h-7 mt-5" alt="" />
              <div className="flex space-x-50 mt-3">
                <p className="text-lg font-semibold">Light 1</p>
                <p className="text-sm text-gray-400">60%</p>
              </div>
            </div>

            <div className="flex space-x-2 mt-5">
              <img src={light} className="w-7 h-7 mt-5" alt="" />
              <div className="flex space-x-50 mt-3">
                <p className="text-lg font-semibold">Light 2</p>
                <p className="text-sm text-gray-400">75%</p>
              </div>
            </div>

            <div className="flex space-x-2 mt-5">
              <img src={light} className="w-7 h-7 mt-5" alt="" />
              <div className="flex space-x-50 mt-3">
                <p className="text-lg font-semibold">Light 3</p>
                <p className="text-sm text-gray-400">80%</p>
              </div>
            </div>

            <div className="flex space-x-2 mt-5">
              <img src={light} className="w-7 h-7 mt-5" alt="" />
              <div className="flex space-x-50 mt-3">
                <p className="text-lg font-semibold">Light 4</p>
                <p className="text-sm text-gray-400">50%</p>
              </div>
            </div>

            <div className="flex space-x-2 mt-5">
              <img src={light} className="w-7 h-7 mt-5" alt="" />
              <div className="flex space-x-50 mt-3">
                <p className="text-lg font-semibold">Light 5</p>
                <p className="text-sm text-gray-400">40%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameRoom;
