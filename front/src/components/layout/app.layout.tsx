import { useState } from "react";
import { Navbar } from "../navbar/navbar";
import { Sidebar } from "../sidebar/sidebar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
     const [expanded, setExpanded] = useState(false);

     return (
          <div className="flex min-h-screen">
               <div className="flex-1 flex flex-col">
                    <Navbar />
                    <Sidebar expanded={expanded} setExpanded={setExpanded} />
                    <main className={`flex-1 p-6 transition-all duration-300 mt-16 ${expanded ? 'ml-64' : 'ml-20'} bg-gray-50 rounded-[20px]`
                    }>
                         {<Outlet />}
                    </main>
               </div>
          </div>
     );
}
