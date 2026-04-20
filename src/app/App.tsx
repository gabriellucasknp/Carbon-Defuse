import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import DashboardPage from "./pages/DashboardPage";
import HistoricoPage from "./pages/HistoricoPage";
import ComparacaoPage from "./pages/ComparacaoPage";
import SimulacaoPage from "./pages/SimulacaoPage";
import CorporativoPage from "./pages/CorporativoPage";
import LoginPage from "./pages/LoginPage";
import CadastroPage from "./pages/CadastroPage";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <div className="size-full bg-white">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/historico" element={<ProtectedRoute><HistoricoPage /></ProtectedRoute>} />
          <Route path="/comparacao" element={<ProtectedRoute><ComparacaoPage /></ProtectedRoute>} />
          <Route path="/simulacao" element={<ProtectedRoute><SimulacaoPage /></ProtectedRoute>} />
          <Route path="/corporativo" element={<ProtectedRoute><CorporativoPage /></ProtectedRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
