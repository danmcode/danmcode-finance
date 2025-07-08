import AppLayout from './components/layout/app.layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import { Planning } from './pages/planning';
import { NotFoundPage } from './pages/not.found';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/planeacion" element={<Planning />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;