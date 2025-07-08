import { Link } from "react-router-dom";

export interface SidebarItemProps {
     icon: React.ElementType;
     label: string;
     expanded?: boolean;
     to: string;
     currentPath?: string;
}

export const SidebarItem = ({
     icon: Icon,
     label,
     expanded = false,
     to,
     currentPath,
}: SidebarItemProps) => {
     const active = currentPath === to;
     return (
          <li>
               <Link to={to} className={`
               relative 
               flex 
               items-center 
               w-full 
               h-full 
               font-medium
               rounded-md
               cursor-pointer 
               p-4
               my-1 
               transition-colors 
               group
               ${active ? 'bg-gradient-to-tr from-[var(--green-danmcode)] to-teal-400 text-white' : 'hover:bg-indigo-50 text-gray-600'}`}>
                    <Icon size={20} />
                    <span className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}`}
                    >
                         {label}
                    </span>

                    {!expanded && (
                         <div className={`
                             absolute left-full rounded-md px-2 py-1 ml-6
                             bg-gray-800 text-white text-sm
                             invisible opacity-20 -translate-x-3 transition-all
                             group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                          `}
                         >
                              {label}
                         </div>
                    )}
               </Link>
          </li>
     );
};
