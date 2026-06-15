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

const MeusEventosPage = () => {
  const { user } = useAuth();
  const [inscricoes, setInscricoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filter, setFilter] = useState("todos");

  useEffect(() => {
    const fetchInscricoes = async () => {
      try {
        const response = await api.get(
          `/inscricoes/participante/${user.perfil_id}`,
        );
        setInscricoes(response.data);
      } catch {
        setInscricoes([]);
      } finally {
        setLoading(false);
      }
    };
    if (user?.id) fetchInscricoes();
  }, [user]);

  const [cancelMsg, setCancelMsg] = useState("");

  const handleCancelar = async (inscricaoId) => {
    if (!window.confirm("Tem certeza que deseja cancelar esta inscrição?"))
      return;
    try {
      await api.delete(`/inscricoes/${inscricaoId}`);
      setCancelMsg("Inscrição cancelada com sucesso!");
      const response = await api.get(
        `/inscricoes/participante/${user.perfil_id}`,
      );
      setInscricoes(response.data);
    } catch (err) {
      setCancelMsg(err.response?.data?.error || "Erro ao cancelar inscrição.");
    }
  };

  const filtered = inscricoes.filter((i) => {
    if (filter === "todos") return true;
    return i.status === filter;
  });

  return (
    <ParticipantLayout activePage="meus-eventos">
      <div className="max-w-5xl space-y-6 md:space-y-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#00707D]">
            Meus Eventos
          </h2>

          {cancelMsg && (
            <div
              className={`p-3 rounded-lg text-sm ${cancelMsg.includes("sucesso") ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"}`}
            >
              {cancelMsg}
            </div>
          )}

          <div className="relative w-full md:w-auto">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full md:w-auto border border-gray-300 bg-white text-gray-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm flex items-center justify-between gap-2"
            >
              <span>
                {filter === "todos"
                  ? "Ver Todos"
                  : filter === "confirmada"
                    ? "Confirmadas"
                    : filter === "pendente"
                      ? "Pendentes"
                      : "Canceladas"}
              </span>
              <svg
                className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-full md:w-40 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                <ul className="py-1 text-sm text-gray-700 text-center">
                  <li
                    onClick={() => {
                      setFilter("todos");
                      setDropdownOpen(false);
                    }}
                    className="hover:bg-gray-100 cursor-pointer py-2 border-b border-gray-100"
                  >
                    Ver Todos
                  </li>
                  <li
                    onClick={() => {
                      setFilter("confirmada");
                      setDropdownOpen(false);
                    }}
                    className="hover:bg-gray-100 cursor-pointer py-2 border-b border-gray-100 text-blue-600"
                  >
                    Confirmadas
                  </li>
                  <li
                    onClick={() => {
                      setFilter("pendente");
                      setDropdownOpen(false);
                    }}
                    className="hover:bg-gray-100 cursor-pointer py-2 border-b border-gray-100 text-gray-500"
                  >
                    Pendentes
                  </li>
                  <li
                    onClick={() => {
                      setFilter("cancelada");
                      setDropdownOpen(false);
                    }}
                    className="hover:bg-gray-100 cursor-pointer py-2 text-gray-500"
                  >
                    Canceladas
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {loading ? (
          <p className="text-gray-500">Carregando...</p>
        ) : filtered.length === 0 ? (
          <p className="text-gray-500">Nenhuma inscrição encontrada.</p>
        ) : (
          <div className="space-y-6">
            {filtered.map((inscricao, index) => (
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#00707D] leading-tight">
                      {inscricao.evento_nome ||
                        `Evento #${inscricao.evento_id}`}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600">
                      {inscricao.data
                        ? new Date(inscricao.data).toLocaleDateString("pt-BR")
                        : "-"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                  <button
                    className={`w-full md:w-40 py-2.5 rounded-lg text-sm font-medium shadow-sm transition-colors ${
                      inscricao.status === "cancelada"
                        ? "bg-[#F94D4D] text-white hover:bg-red-700"
                        : inscricao.status === "confirmada"
                          ? "bg-green-500 text-white hover:bg-green-700"
                          : "border border-gray-300 text-gray-500 bg-transparent hover:bg-gray-50"
                    }`}
                  >
                    {inscricao.status === "confirmada"
                      ? "Confirmada"
                      : inscricao.status === "cancelada"
                        ? "Cancelada"
                        : "Pendente"}
                  </button>
                  {inscricao.status !== "cancelada" && (
                    <button
                      onClick={() => handleCancelar(inscricao.id)}
                      className="text-red-500 hover:text-red-700 text-xs font-medium underline"
                    >
                      Cancelar inscrição
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </ParticipantLayout>
  );
};

export default MeusEventosPage;
