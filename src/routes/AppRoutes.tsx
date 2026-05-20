import { Route, Routes } from 'react-router-dom';
import ChatPage from '../pages/ChatPage';
import AdminPage from '../pages/AdminPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default AppRoutes;
