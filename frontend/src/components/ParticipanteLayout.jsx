import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import capLogo from "../assets/cap.png";

const ParticipantLayout = ({ children, activePage }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const sidebarLinks = [
    {
      id: "eventos",
      label: "Eventos",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      ),
      link: "/participante/eventos",
    },
    {
      id: "meus-eventos",
      label: "Meus Eventos",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      link: "/participante/meus-eventos",
    },
    {
      id: "certificados",
      label: "Certificados",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      link: "/participante/certificados",
    },
    {
      id: "validar-certificado",
      label: "Validar Certificado",
      icon: (
        <svg
          className="w-5 h-5 mr-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      link: "/participante/validar-certificado",
    },
  ];

  const getSidebarItemClass = (id) => {
    return activePage === id
      ? "flex items-center px-6 py-3 bg-white/10 text-white font-medium"
      : "flex items-center px-6 py-3 hover:bg-white/10 text-white/90";
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-gray-800">
      <header className="bg-[#3662A4] text-white p-4 flex items-center justify-between shadow-md px-4 md:px-6 z-20">
        <Link to="/" className="flex items-center text-white shrink-0">
          <img
            src={capLogo}
            alt="Logo"
            className="w-8 h-8 mr-2 md:mr-3 brightness-0 invert"
          />
          <h1 className="text-xl font-medium hidden sm:block">
            Plataforma Acadêmica de Eventos (PAE)
          </h1>
          <h1 className="text-lg font-medium sm:hidden">PAE</h1>
        </Link>
        <div className="flex items-center space-x-2 text-white/90">
          <Link
            to="/participante/configuracoes"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-orange-200 flex items-center justify-center text-xl overflow-hidden border-2 border-white/50 hover:opacity-80 transition-opacity text-orange-700 font-bold text-sm"
          >
            {user?.nome ? user.nome.charAt(0).toUpperCase() : "P"}
          </Link>
          <Link
            to="/participante/configuracoes"
            className="flex items-center text-xs md:text-sm font-medium hover:text-white transition-colors"
          >
            <span className="hidden xs:inline">
              {user?.nome || "Participante"}
            </span>{" "}
            <span className="ml-1 text-[10px] md:text-xs">▼</span>
          </Link>
          <button
            onClick={handleLogout}
            className="ml-2 text-xs text-white/70 hover:text-white transition-colors"
            title="Sair"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </button>
        </div>
      </header>

      <div className="flex flex-grow overflow-hidden flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-[#3662A4] text-white flex flex-col md:pt-10 shadow-inner z-10 overflow-x-auto md:overflow-y-auto">
          <nav className="flex md:flex-col space-x-1 md:space-x-0 md:space-y-1 p-2 md:p-0">
            {sidebarLinks.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={`${getSidebarItemClass(item.id)} whitespace-nowrap md:whitespace-normal flex-shrink-0`}
              >
                {item.icon}{" "}
                <span className="text-xs md:text-sm">{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        <main className="flex-grow bg-slate-50 p-4 md:p-10 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ParticipantLayout;
