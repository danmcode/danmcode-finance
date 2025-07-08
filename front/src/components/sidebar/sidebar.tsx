import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SideBarItems } from "./sidebar.items";
import { SidebarItem } from "./sidebar.item";
import { useLocation } from 'react-router-dom';
import { Branding } from '../atoms/Branding';


interface SidebarProps {
     expanded: boolean;
     setExpanded: (expanded: boolean) => void;
}

export const Sidebar = ({ expanded, setExpanded }: SidebarProps) => {
     const location = useLocation();
     return (
          <aside className="h-screen fixed inset-y-0 left-0 z-50">
               <nav className="h-full flex flex-col bg-white justify-between items-center">

                    {/* Top: Logo */}
                    <div className="p-2 pb-2">
                         {expanded ? <Branding /> : <Branding isCollapsed={true} />}
                    </div>

                    { /* Middle: Sidebar Items */}
                    <ul className="px-3">
                         {
                              SideBarItems().map((item, index) => (
                                   <SidebarItem
                                        key={index}
                                        icon={item.icon}
                                        label={item.label}
                                        expanded={expanded}
                                        to={item.to}
                                        currentPath={location.pathname}
                                   />
                              ))
                         }
                    </ul>

                    {/* Bottom: Toggle Button */}
                    <div className="p-3">
                         <button
                              onClick={() => setExpanded(!expanded)}
                              className="w-full flex justify-end p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
                         >
                              {expanded ? <ChevronLeft /> : <ChevronRight />}
                         </button>
                    </div>
               </nav>
          </aside>
     );
}