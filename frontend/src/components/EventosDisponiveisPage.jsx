import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

const EventosDisponiveisPage = () => {
  const { user } = useAuth();
  const [eventos, setEventos] = useState([]);
  const [inscricoes, setInscricoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inscricaoMsg, setInscricaoMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [evRes, insRes] = await Promise.all([
          api.get("/eventos"),
          api.get(`/inscricoes/participante/${user.perfil_id}`),
        ]);
        setEventos(
          evRes.data.filter(
            (e) => e.status === "ativo" || e.status === "pendente",
          ),
        );
        setInscricoes(insRes.data);
      } catch {
        setEventos([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user.perfil_id]);

  const isInscrito = (eventoId) => {
    return inscricoes.some(
      (i) => i.evento_id === eventoId && i.status !== "cancelada",
    );
  };

  const handleInscrever = async (eventoId) => {
    setInscricaoMsg("");
    try {
      await api.post("/inscricoes", {
        participante_id: user.perfil_id,
        evento_id: eventoId,
        status: "pendente",
      });
      setInscricaoMsg("Inscrição realizada com sucesso!");
      const insRes = await api.get(
        `/inscricoes/participante/${user.perfil_id}`,
      );
      setInscricoes(insRes.data);
    } catch (err) {
      setInscricaoMsg(err.response?.data?.error || "Erro ao se inscrever.");
    }
  };

  return (
    <ParticipantLayout activePage="eventos">
      <div className="max-w-5xl space-y-6 md:space-y-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#00707D]">
          Eventos Disponíveis
        </h2>

        {inscricaoMsg && (
          <div
            className={`p-3 rounded-lg text-sm ${inscricaoMsg.includes("sucesso") ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"}`}
          >
            {inscricaoMsg}
          </div>
        )}

        {loading ? (
          <p className="text-gray-500">Carregando...</p>
        ) : eventos.length === 0 ? (
          <p className="text-gray-500">Nenhum evento disponível no momento.</p>
        ) : (
          <div className="space-y-6">
            {eventos.map((evento) => {
              const inscrito = isInscrito(evento.id);
              const inscricao = inscricoes.find(
                (i) => i.evento_id === evento.id && i.status !== "cancelada",
              );
              return (
                <div
                  key={evento.id}
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
                        {evento.nome}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        {evento.instituicao || ""}
                        {evento.instituicao && evento.dataInicio ? " | " : ""}
                        {formatDate(evento.dataInicio)} -{" "}
                        {formatDate(evento.dataFim)}
                      </p>
                    </div>
                  </div>
                  {inscrito ? (
                    <span
                      className={`w-full md:w-auto text-center px-8 py-2.5 rounded-lg text-sm font-medium shadow-sm ${
                        inscricao?.status === "confirmada"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : inscricao?.status === "cancelada"
                            ? "bg-red-100 text-red-700 border border-red-200"
                            : "bg-yellow-100 text-yellow-700 border border-yellow-200"
                      }`}
                    >
                      {inscricao?.status === "confirmada"
                        ? "Inscrito (Confirmado)"
                        : inscricao?.status === "cancelada"
                          ? "Cancelada"
                          : "Inscrito (Pendente)"}
                    </span>
                  ) : (
                    <button
                      onClick={() => handleInscrever(evento.id)}
                      className="w-full md:w-auto text-center border border-gray-300 text-gray-600 px-8 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      Inscreva-se
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </ParticipantLayout>
  );
};

export default EventosDisponiveisPage;
