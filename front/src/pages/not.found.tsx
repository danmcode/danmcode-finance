import { Link } from "react-router-dom";

export const NotFoundPage = () => {
     return (
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100 text-gray-800">
               <h1 className="text-6xl font-bold text-indigo-600">404</h1>
               <p className="text-2xl font-semibold mt-4">Página no encontrada</p>
               <p className="text-lg text-gray-600 mt-2">Lo sentimos, la página que buscas no existe.</p>
               <Link to="/" className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors text-lg font-medium">
                    Regresar al Inicio
               </Link>
          </div>
     );
}