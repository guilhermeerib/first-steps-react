import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { CadastroAluno } from './pages/CadastroAluno';
import { EditarAluno } from './pages/EditarAluno';
import { PerfilAluno } from './pages/PerfilAluno';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cadastro" element={<CadastroAluno />} />
        <Route path="editar/:id" element={<EditarAluno />} />
        <Route path="perfil/:id" element={<PerfilAluno />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
