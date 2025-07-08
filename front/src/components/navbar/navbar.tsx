import { Bell, ChevronLeft, Menu, Search, User, X } from "lucide-react";
import { useState } from "react";


export const Navbar = () => {
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

     return (
          <nav className="bg-white p-4 flex items-center justify-between w-full fixed inset-x-0 top-0 z-50">
               <div className="flex items-center space-x-4">
                    <button
                         className="md:hidden p-2 rounded-md hover:bg-gray-100"
                         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                         {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
               </div>

               {/* Menú móvil (condicional) */}
               {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-4 z-10">
                         <div className="border-t mt-2 pt-2">
                              <div className="flex items-center justify-between py-2">
                                   <div className="flex items-center space-x-2">
                                        <Search size={20} className="text-gray-500" />
                                        <input
                                             type="text"
                                             placeholder="Search..."
                                             className="outline-none focus:ring-0 border-none p-0 text-sm"
                                        />
                                   </div>
                              </div>
                              <div className="flex items-center justify-between py-2">
                                   <Bell size={20} className="text-gray-500" />
                                   <span className="text-gray-600 text-sm">Notifications</span>
                              </div>
                              <div className="flex items-center justify-between py-2">
                                   <User size={20} className="text-gray-500" />
                                   <span className="text-gray-600 text-sm">Profile</span>
                              </div>
                         </div>
                    </div>
               )}

               <div className="flex items-center space-x-4">
                    {/* Barra de búsqueda para pantallas grandes */}
                    <div className="hidden md:flex items-center border rounded-full px-3 py-1 bg-gray-50">
                         <Search size={20} className="text-gray-500" />
                         <input
                              type="text"
                              placeholder="Search"
                              className="ml-2 bg-transparent outline-none focus:ring-0 border-none p-0 text-sm"
                         />
                    </div>
                    <Bell size={24} className="text-gray-600 cursor-pointer hidden md:block" />
                    <div className="hidden md:flex items-center space-x-2">
                         <img
                              src="https://placehold.co/32x32/E0E7FF/4F46E5?text=MS" // Placeholder para la imagen de perfil
                              alt="User Avatar"
                              className="w-8 h-8 rounded-full"
                         />
                         <span className="font-medium text-gray-700">Matt Shadows</span>
                         <ChevronLeft size={16} className="rotate-90 text-gray-500" /> {/* Icono de flecha hacia abajo */}
                    </div>
               </div>
          </nav>
     );
}