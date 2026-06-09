import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import capLogo from "../assets/cap.png";

const ValidarCertificadoPage = () => {
  const [codigo, setCodigo] = useState("");
  const [statusValidacao, setStatusValidacao] = useState(null);
  const [certificado, setCertificado] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleValidar = async (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (!codigo) return;
      setLoading(true);
      setStatusValidacao(null);
      setCertificado(null);

      try {
        const response = await api.get(`/certificados/${codigo}`);
        setCertificado(response.data);
        setStatusValidacao("valido");
      } catch {
        setStatusValidacao("invalido");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-gray-800">
      <header className="bg-[#3662A4] text-white p-4 flex items-center justify-between shadow-md px-6 z-20">
        <Link to="/" className="flex items-center text-white shrink-0">
          <img
            src={capLogo}
            alt="Logo"
            className="w-8 h-8 mr-3 brightness-0 invert"
          />
          <h1 className="text-xl font-medium hidden sm:block">
            Plataforma Acadêmica de Eventos (PAE)
          </h1>
          <h1 className="text-lg font-medium sm:hidden">PAE</h1>
        </Link>
        <Link
          to="/login"
          className="border border-white/50 text-white px-4 py-1.5 rounded-lg text-xs md:text-sm font-medium hover:bg-white hover:text-[#3662A4] transition-colors"
        >
          Entrar
        </Link>
      </header>

      <main className="flex-grow p-4 md:p-10">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#00707D]">
            Validar Certificados
          </h2>

          <div className="space-y-4">
            <label
              htmlFor="codigo"
              className="block text-sm font-medium text-gray-700"
            >
              Inserir código do certificado
            </label>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                id="codigo"
                placeholder="Ex: CERT-2026-0001"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
                onKeyDown={handleValidar}
                className="w-full max-w-md px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white text-sm"
              />
              <button
                onClick={handleValidar}
                disabled={loading}
                className="bg-[#3662A4] text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-md md:w-auto w-full disabled:opacity-50"
              >
                {loading ? "Validando..." : "Validar"}
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 pt-8 items-center sm:items-start">
            {statusValidacao === "valido" && (
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center w-full sm:w-80 h-auto text-center transform animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#28A745] text-white rounded-full flex items-center justify-center text-3xl md:text-4xl mb-4 font-bold shadow-md">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#00707D]">
                  Certificado
                  <br />
                  Válido
                </h3>
                {certificado && (
                  <div className="text-xs text-gray-500 mt-2 space-y-1">
                    <p>
                      Evento:{" "}
                      {certificado.evento_nome || `#${certificado.evento_id}`}
                    </p>
                    {certificado.cargaHoraria && (
                      <p>Carga Horária: {certificado.cargaHoraria}h</p>
                    )}
                    <p>Status: {certificado.status}</p>
                  </div>
                )}
              </div>
            )}

            {statusValidacao === "invalido" && (
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center justify-center w-full sm:w-64 h-64 text-center transform animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#DC3545] text-white rounded-full flex items-center justify-center text-3xl md:text-4xl mb-4 font-bold shadow-md">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#00707D]">
                  Certificado
                  <br />
                  Inválido
                </h3>
                <p className="text-xs text-gray-500 mt-2">
                  Código não encontrado
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ValidarCertificadoPage;
