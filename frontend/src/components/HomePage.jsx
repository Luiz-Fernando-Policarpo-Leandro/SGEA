import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import homeImg from "../assets/home.png";
import capLogo from "../assets/cap.png";

const HomePage = () => {
  const { isAuthenticated, userRole } = useAuth();
  const navigate = useNavigate();

  const handlePerfilClick = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    if (userRole === "participante") navigate("/participante/eventos");
    else if (userRole === "administrador") navigate("/admin");
    else navigate("/organizador/eventos");
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-cover bg-center bg-[#F5F5FD] transition-all">
      <header className="bg-[#3662A4] text-white p-4 flex flex-col md:flex-row items-center justify-between shadow-md px-6 space-y-4 md:space-y-0 z-20">
        <div className="flex items-center">
          <img
            src={capLogo}
            alt="Logo"
            className="w-8 h-8 mr-3 brightness-0 invert"
          />
          <h1 className="text-xl font-medium text-center md:text-left">
            Plataforma Acadêmica de Eventos (PAE)
          </h1>
        </div>
        <div className="flex items-center space-x-3 w-full md:w-auto justify-center">
          <button
            onClick={handlePerfilClick}
            className="text-white hover:text-white/80 transition-colors text-xs md:text-sm font-medium mr-2 md:mr-4"
          >
            PERFIL PARTICIPANTE
          </button>
          <Link
            to="/login"
            className="border border-white/50 text-white px-4 md:px-5 py-1.5 rounded-lg text-xs md:text-sm font-medium hover:bg-white hover:text-[#3662A4] transition-colors"
          >
            Entrar
          </Link>
          <Link
            to="/register"
            className="bg-[#3FB65F] text-white px-4 md:px-5 py-1.5 rounded-lg text-xs md:text-sm font-medium hover:bg-green-700 transition-colors shadow"
          >
            Cadastre-se
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center z-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 items-center w-full">
          <div className="p-8 md:p-16 space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-[#0D3B66] leading-tight max-w-lg mx-auto md:mx-0">
              Gerencie seus Eventos Acadêmicos e seus Certificados com
              Facilidade
            </h2>
          </div>

          <div className="w-full h-full flex items-center justify-center p-4 md:p-0">
            <img
              src={homeImg}
              alt="Home PAE"
              className="w-full max-w-2xl h-auto object-contain"
            />
          </div>
        </div>
      </main>

      <footer className="bg-white/80 backdrop-blur-sm p-6 py-10 md:py-12 border-t border-gray-100 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-6">
          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center text-[#3662A4] mb-3 md:mb-4 shadow-inner group-hover:bg-blue-100 transition-colors">
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-xs md:text-sm font-medium text-[#0D3B66]">
              Crie e Gerencie Eventos
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center text-[#3662A4] mb-3 md:mb-4 shadow-inner group-hover:bg-blue-100 transition-colors">
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <p className="text-xs md:text-sm font-medium text-[#0D3B66]">
              Se Inscreva nos Eventos
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center text-[#3662A4] mb-3 md:mb-4 shadow-inner group-hover:bg-blue-100 transition-colors">
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <p className="text-xs md:text-sm font-medium text-[#0D3B66]">
              Faça Check-In nos Eventos
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[#F0F8FF] rounded-full flex items-center justify-center text-[#3662A4] mb-3 md:mb-4 shadow-inner group-hover:bg-blue-100 transition-colors">
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438z"
                />
              </svg>
            </div>
            <p className="text-xs md:text-sm font-medium text-[#0D3B66] group-hover:text-blue-600 transition-colors">
              Emita seu Certificado
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
