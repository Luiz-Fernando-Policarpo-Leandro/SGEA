import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import OrganizerLayout from "./OrganizadorLayout";
import api from "../services/api";

const ParticipantsListPage = () => {
  const { id } = useParams();
  const [inscricoes, setInscricoes] = useState([]);
  const [eventoNome, setEventoNome] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [inscricoesRes, eventoRes] = await Promise.all([
          api.get(`/inscricoes/evento/${id}`),
          api.get(`/eventos/${id}`).catch(() => ({ data: { nome: "Evento" } })),
        ]);
        setInscricoes(inscricoesRes.data);
        setEventoNome(eventoRes.data.nome);
      } catch {
        setInscricoes([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const filtered = inscricoes.filter(
    (i) =>
      i.participante_nome?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      i.participante_id?.toString().includes(searchTerm),
  );

  return (
    <OrganizerLayout activePage="events" activeDropdownPage="active">
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="space-y-1">
            <Link
              to={`/organizador/evento/${id}`}
              className="text-xs text-gray-500 hover:text-pae-blue-header transition-colors flex items-center gap-1"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Voltar para {eventoNome}
            </Link>
            <h2 className="text-2xl md:text-3xl font-extrabold text-pae-text-blue">
              Participantes
            </h2>
            <p className="text-xs md:text-sm text-gray-500">
              Gerencie a lista de inscritos e presenças do evento.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="bg-pae-blue-header text-white px-5 py-2.5 rounded-xl font-semibold hover:opacity-90 transition shadow-md text-sm flex items-center gap-2">
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12"
                />
              </svg>
              Exportar CSV
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 space-y-6">
          <div className="flex items-center justify-between">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Buscar participante..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {loading ? (
            <p className="text-gray-500">Carregando...</p>
          ) : filtered.length === 0 ? (
            <p className="text-gray-500">Nenhum participante inscrito.</p>
          ) : (
            <div className="overflow-x-auto -mx-6">
              <table className="w-full text-left table-auto min-w-[700px]">
                <thead className="bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Participante ID</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Data</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filtered.map((inscricao, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-pae-blue-header">
                        {inscricao.participante_nome ||
                          `Participante #${inscricao.participante_id}`}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${inscricao.status === "confirmada" ? "bg-green-50 text-green-600" : "bg-yellow-50 text-yellow-600"}`}
                        >
                          {inscricao.status || "pendente"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {inscricao.data
                          ? new Date(inscricao.data).toLocaleDateString("pt-BR")
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </OrganizerLayout>
  );
};

export default ParticipantsListPage;
