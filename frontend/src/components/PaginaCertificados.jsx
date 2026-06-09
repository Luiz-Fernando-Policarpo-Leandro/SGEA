import React, { useState, useEffect } from "react";
import ParticipantLayout from "./ParticipanteLayout";
import { useAuth } from "../contexts/AuthContext";
import api from "../services/api";

const formatDate = (dateStr) => {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const CertificadosPage = () => {
  const { user } = useAuth();
  const [certificados, setCertificados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificados = async () => {
      try {
        const response = await api.get(
          `/certificados/participante/${user.perfil_id}`,
        );
        setCertificados(response.data);
      } catch {
        setCertificados([]);
      } finally {
        setLoading(false);
      }
    };
    if (user?.id) fetchCertificados();
  }, [user]);

  const handleDownload = (codigo) => {
    alert(`Download do certificado: ${codigo}`);
  };

  return (
    <ParticipantLayout activePage="certificados">
      <div className="max-w-5xl space-y-6 md:space-y-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#00707D]">
          Certificados
        </h2>

        {loading ? (
          <p className="text-gray-500">Carregando...</p>
        ) : certificados.length === 0 ? (
          <p className="text-gray-500">Nenhum certificado disponível.</p>
        ) : (
          <div className="space-y-6">
            {certificados.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-3xl shadow-md border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4"
              >
                <div className="flex items-center space-x-4 w-full md:w-auto">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 shadow-inner">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10"
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
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#00707D] leading-tight">
                      {cert.evento_nome || `Evento #${cert.evento_id}`}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      Código: {cert.codigo}
                      {cert.cargaHoraria ? ` | ${cert.cargaHoraria}h` : ""}
                      {cert.status ? ` | ${cert.status}` : ""}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleDownload(cert.codigo)}
                  className="w-full md:w-auto bg-[#3FB65F] text-white px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Baixar
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </ParticipantLayout>
  );
};

export default CertificadosPage;
