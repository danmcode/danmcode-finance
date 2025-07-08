import { ChevronLeft, Search } from "lucide-react";

// src/pages/dashboard.tsx
export default function Dashboard() {
     return (
          <>
               {/* Contenido principal del dashboard */}
               <h2 className="text-3xl font-semibold text-gray-800 mb-6">Good Morning, Matt!</h2>
               <p className="text-gray-600 mb-8">Welcome to Finance Management Dashboard</p>

               <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">

                    {/* Tarjeta de Total Income */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                         <h3 className="text-lg font-medium text-gray-700 mb-2">Total Income</h3>
                         <p className="text-gray-500 text-sm mb-4">View your income in a certain period of time</p>
                         <div className="flex items-center justify-between mb-4">
                              <span className="text-4xl font-bold text-gray-900">$256K</span>
                              <button className="text-indigo-600 font-medium text-sm">SEE MORE &gt;</button>
                         </div>
                         <div className="h-32 bg-gray-100 rounded-md flex items-end p-2">
                              {/* Gráfico de barras simple */}
                              <div className="flex w-full justify-around items-end h-full">
                                   {[...Array(10)].map((_, i) => (
                                        <div
                                             key={i}
                                             className="w-4 bg-indigo-400 rounded-t-sm"
                                             style={{ height: `${Math.random() * 80 + 20}%` }}
                                        ></div>
                                   ))}
                              </div>
                         </div>
                    </div>

                    {/* Tarjeta de Payment Overview */}
                    <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
                         <h3 className="text-lg font-medium text-gray-700 mb-2">Payment Overview</h3>
                         <p className="text-gray-500 text-sm mb-4">View your income in a certain period of time</p>
                         <div className="grid grid-cols-2 gap-4">
                              <div className="bg-blue-100 p-4 rounded-md flex justify-between items-center">
                                   <div>
                                        <p className="text-blue-800 font-semibold">Murabahah</p>
                                        <span className="text-2xl font-bold text-blue-900">$1.00</span>
                                   </div>
                                   {/* Icono o más detalles */}
                              </div>
                              <div className="bg-green-100 p-4 rounded-md flex justify-between items-center">
                                   <div>
                                        <p className="text-green-800 font-semibold">Ijarah</p>
                                        <span className="text-2xl font-bold text-green-900">$20.198</span>
                                   </div>
                                   {/* Icono o más detalles */}
                              </div>
                              <div className="bg-purple-100 p-4 rounded-md flex justify-between items-center">
                                   <div>
                                        <p className="text-purple-800 font-semibold">Mushakarah</p>
                                        <span className="text-2xl font-bold text-purple-900">$43.092</span>
                                   </div>
                                   {/* Icono o más detalles */}
                              </div>
                              <div className="bg-pink-100 p-4 rounded-md flex justify-between items-center">
                                   <div>
                                        <p className="text-pink-800 font-semibold">Istisna</p>
                                        <span className="text-2xl font-bold text-pink-900">$12.662</span>
                                   </div>
                                   {/* Icono o más detalles */}
                              </div>
                         </div>
                    </div>

                    {/* Tarjeta de Quick Send */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                         <h3 className="text-lg font-medium text-gray-700 mb-2">Quick send</h3>
                         <p className="text-gray-500 text-sm mb-4">View your income in a certain period of time</p>
                         <div className="flex -space-x-2 overflow-hidden mb-4">
                              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://placehold.co/40x40/E0E7FF/4F46E5?text=U1" alt="User 1" />
                              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://placehold.co/40x40/E0E7FF/4F46E5?text=U2" alt="User 2" />
                              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://placehold.co/40x40/E0E7FF/4F46E5?text=U3" alt="User 3" />
                              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://placehold.co/40x40/E0E7FF/4F46E5?text=U4" alt="User 4" />
                              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://placehold.co/40x40/E0E7FF/4F46E5?text=U5" alt="User 5" />
                         </div>
                         <div className="mb-4">
                              <label htmlFor="amount" className="sr-only">Amount</label>
                              <input
                                   type="text"
                                   id="amount"
                                   className="w-full p-3 border border-gray-300 rounded-md text-2xl font-bold text-gray-900 text-center"
                                   placeholder="100,000"
                              />
                              <p className="text-xs text-gray-500 text-center mt-1">Balance: $185,390</p>
                         </div>
                         <button className="w-full bg-indigo-600 text-white p-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors">
                              Send
                         </button>
                    </div>

                    {/* Tarjeta de Recent Activity */}
                    <div className="bg-white p-6 rounded-lg shadow-md col-span-full">
                         <h3 className="text-lg font-medium text-gray-700 mb-2">Recent activity</h3>
                         <p className="text-gray-500 text-sm mb-4">View your recent transaction period of time</p>
                         <div className="flex justify-between items-center mb-4">
                              <div className="flex space-x-2">
                                   <button className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-md text-sm font-medium">History</button>
                                   <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-md text-sm font-medium">Upcoming</button>
                              </div>
                              <div className="flex items-center space-x-2">
                                   <span className="text-gray-600 text-sm">12 January 2024 - 22 February 2024</span>
                                   <ChevronLeft size={16} className="rotate-90 text-gray-500" />
                                   <div className="relative">
                                        <input
                                             type="text"
                                             placeholder="Search"
                                             className="border border-gray-300 rounded-md pl-8 pr-3 py-1 text-sm focus:ring-indigo-500 focus:border-indigo-500"
                                        />
                                        <Search size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                                   </div>
                              </div>
                         </div>
                         <div className="overflow-x-auto">
                              <table className="min-w-full divide-y divide-gray-200">
                                   <thead className="bg-gray-50">
                                        <tr>
                                             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                  Description
                                             </th>
                                             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                  Date
                                             </th>
                                             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                  Invoice ID
                                             </th>
                                             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                  Fee
                                             </th>
                                             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                  Balance
                                             </th>
                                             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                  Status
                                             </th>
                                        </tr>
                                   </thead>
                                   <tbody className="bg-white divide-y divide-gray-200">
                                        {/* Fila de ejemplo */}
                                        <tr>
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                  <div className="flex items-center">
                                                       <img
                                                            src="https://placehold.co/32x32/E0E7FF/4F46E5?text=A" // Placeholder
                                                            alt="Amazon"
                                                            className="w-8 h-8 rounded-full mr-3"
                                                       />
                                                       <span className="text-sm font-medium text-gray-900">Amazon Support</span>
                                                  </div>
                                             </td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12 Jan 2024</td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">WXYX23Z</td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$0.00</td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$856</td>
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                       Success
                                                  </span>
                                             </td>
                                        </tr>
                                        <tr>
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                  <div className="flex items-center">
                                                       <img
                                                            src="https://placehold.co/32x32/E0E7FF/4F46E5?text=U" // Placeholder
                                                            alt="Upwork"
                                                            className="w-8 h-8 rounded-full mr-3"
                                                       />
                                                       <span className="text-sm font-medium text-gray-900">Upwork</span>
                                                  </div>
                                             </td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12 Jan 2024</td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$0.00</td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$856</td>
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                       Pending
                                                  </span>
                                             </td>
                                        </tr>
                                        <tr>
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                  <div className="flex items-center">
                                                       <img
                                                            src="https://placehold.co/32x32/E0E7FF/4F46E5?text=E" // Placeholder
                                                            alt="EA Games"
                                                            className="w-8 h-8 rounded-full mr-3"
                                                       />
                                                       <span className="text-sm font-medium text-gray-900">EA Games</span>
                                                  </div>
                                             </td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12 Jan 2024</td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$0.00</td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$856</td>
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                                       Pending
                                                  </span>
                                             </td>
                                        </tr>
                                        <tr>
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                  <div className="flex items-center">
                                                       <img
                                                            src="https://placehold.co/32x32/E0E7FF/4F46E5?text=A" // Placeholder
                                                            alt="Apple Inc"
                                                            className="w-8 h-8 rounded-full mr-3"
                                                       />
                                                       <span className="text-sm font-medium text-gray-900">Apple Inc</span>
                                                  </div>
                                             </td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12 Jan 2024</td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$0.00</td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$856</td>
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                                       Cancelled
                                                  </span>
                                             </td>
                                        </tr>
                                        <tr>
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                  <div className="flex items-center">
                                                       <img
                                                            src="https://placehold.co/32x32/E0E7FF/4F46E5?text=W" // Placeholder
                                                            alt="Webflow"
                                                            className="w-8 h-8 rounded-full mr-3"
                                                       />
                                                       <span className="text-sm font-medium text-gray-900">Webflow</span>
                                                  </div>
                                             </td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12 Jan 2024</td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$0.00</td>
                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$856</td>
                                             <td className="px-6 py-4 whitespace-nowrap">
                                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                       Success
                                                  </span>
                                             </td>
                                        </tr>
                                   </tbody>
                              </table>
                         </div>
                    </div>
               </div>
          </ >
     )
}
