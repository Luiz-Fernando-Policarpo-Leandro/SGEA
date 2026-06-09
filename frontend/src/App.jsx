import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import HomePage from "./components/HomePage";
import LoginPage from "./components/Login";
import RegisterPage from "./components/Cadastro";

import OrganizerCreatedEventsPage from "./components/OrganizadorEventosCriados";
import OrganizerCompletedEventsPage from "./components/OrganizadorEventoCompleto";
import CreateEventFormPage from "./components/CriarEvento";
import AddActivityFormPage from "./components/FormularioAtividades";
import ManageEventPage from "./components/GerenciarEvento";
import ParticipantsListPage from "./components/ListadeParticipants";
import OrganizerSettingsPage from "./components/OrganizadorConfiguracoes";

import MeusEventosPage from "./components/MeusEventosPage";
import EventosDisponiveisPage from "./components/EventosDisponiveisPage";
import CertificadosPage from "./components/PaginaCertificados";
import ValidarCertificadoPage from "./components/ValidarCertificados";
import ParticipantSettingsPage from "./components/ParticipanteConfig";
import AdminPage from "./components/AdminPage";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/organizador/eventos"
            element={
              <ProtectedRoute allowedRoles={["coordenador", "administrador"]}>
                <OrganizerCreatedEventsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/organizador/eventos-concluidos"
            element={
              <ProtectedRoute allowedRoles={["coordenador", "administrador"]}>
                <OrganizerCompletedEventsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/organizador/criar-evento"
            element={
              <ProtectedRoute allowedRoles={["coordenador", "administrador"]}>
                <CreateEventFormPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/organizador/evento/:id"
            element={
              <ProtectedRoute allowedRoles={["coordenador", "administrador"]}>
                <ManageEventPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/organizador/evento/:id/adicionar-atividade"
            element={
              <ProtectedRoute allowedRoles={["coordenador", "administrador"]}>
                <AddActivityFormPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/organizador/evento/:id/participantes"
            element={
              <ProtectedRoute allowedRoles={["coordenador", "administrador"]}>
                <ParticipantsListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/organizador/configuracoes"
            element={
              <ProtectedRoute allowedRoles={["coordenador", "administrador"]}>
                <OrganizerSettingsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["administrador"]}>
                <AdminPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/participante/eventos"
            element={
              <ProtectedRoute allowedRoles={["participante"]}>
                <EventosDisponiveisPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/participante/meus-eventos"
            element={
              <ProtectedRoute allowedRoles={["participante"]}>
                <MeusEventosPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/participante/certificados"
            element={
              <ProtectedRoute allowedRoles={["participante"]}>
                <CertificadosPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/participante/validar-certificado"
            element={<ValidarCertificadoPage />}
          />
          <Route
            path="/participante/configuracoes"
            element={
              <ProtectedRoute allowedRoles={["participante"]}>
                <ParticipantSettingsPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
