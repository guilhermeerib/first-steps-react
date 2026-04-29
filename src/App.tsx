import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { CadastroAluno } from './pages/CadastroAluno'
import { EditarAluno } from './pages/EditarAluno'
import { PerfilAluno } from './pages/PerfilAluno'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cadastro" element={<CadastroAluno />} />
        <Route path="/editar/:id" element={<EditarAluno />} />
        <Route path="/perfil/:id" element={<PerfilAluno />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
