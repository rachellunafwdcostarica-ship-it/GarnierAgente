import { Link } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1>Garnier Agente</h1>
          <p>Chat, historial, administración de PDFs y fuente consultada.</p>
        </div>
        <nav className="nav-links">
          <Link to="/">Chat</Link>
          <Link to="/admin">Administración</Link>
        </nav>
      </header>
      <main className="app-content">
        <AppRoutes />
      </main>
      <footer className="app-footer">
        <span>Frontend creado con React + Vite.</span>
      </footer>
    </div>
  );
}

export default App;
