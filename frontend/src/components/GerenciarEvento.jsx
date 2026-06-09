import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import OrganizerLayout from "./OrganizadorLayout";
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

const ManageEventPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("activities");
  const [evento, setEvento] = useState(null);
  const [atividades, setAtividades] = useState([]);
  const [inscricoes, setInscricoes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");

  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [selectedAtividadeId, setSelectedAtividadeId] = useState(null);
  const [checkInParticipanteId, setCheckInParticipanteId] = useState("");

  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({
    nome: "",
    instituicao: "",
    modalidade: "presencial",
    dataInicio: "",
    dataFim: "",
    status: "",
  });

  const [showEditAtividadeModal, setShowEditAtividadeModal] = useState(false);
  const [editAtividadeForm, setEditAtividadeForm] = useState(null);

  const [showCertModal, setShowCertModal] = useState(false);
  const [certLoading, setCertLoading] = useState(false);

  const fetchData = async () => {
    try {
      const [eventoRes, atividadesRes, inscricoesRes] = await Promise.all([
        api.get(`/eventos/${id}`),
        api.get(`/atividades/evento/${id}`),
        api.get(`/inscricoes/evento/${id}`).catch(() => ({ data: [] })),
      ]);
      setEvento(eventoRes.data);
      setAtividades(atividadesRes.data);
      setInscricoes(inscricoesRes.data);
    } catch {
      setEvento(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const showMsg = (text, type = "success") => {
    setMsg(text);
    setMsgType(type);
    setTimeout(() => {
      setMsg("");
      setMsgType("");
    }, 4000);
  };

  const handleEditEvento = () => {
    setEditForm({
      nome: evento.nome,
      instituicao: evento.instituicao || "",
      modalidade: evento.modalidade || "presencial",
      dataInicio: evento.dataInicio ? evento.dataInicio.split("T")[0] : "",
      dataFim: evento.dataFim ? evento.dataFim.split("T")[0] : "",
      status: evento.status || "pendente",
    });
    setShowEditModal(true);
  };

  const handleEditEventoSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/eventos/${id}`, editForm);
      setShowEditModal(false);
      showMsg("Evento atualizado com sucesso!");
      fetchData();
    } catch (err) {
      showMsg(
        err.response?.data?.error || "Erro ao atualizar evento.",
        "error",
      );
    }
  };

  const handleDeleteAtividade = async (atividadeId) => {
    if (!window.confirm("Tem certeza que deseja excluir esta atividade?"))
      return;
    try {
      await api.delete(`/atividades/${atividadeId}`);
      showMsg("Atividade excluída com sucesso!");
      fetchData();
    } catch (err) {
      showMsg(
        err.response?.data?.error || "Erro ao excluir atividade.",
        "error",
      );
    }
  };

  const handleEditAtividade = (atividade) => {
    setEditAtividadeForm({
      id: atividade.id,
      titulo: atividade.titulo,
      tipo: atividade.tipo || "",
      cargaHoraria: atividade.cargaHoraria || "",
      vagas: atividade.vagas || "",
      local: atividade.local || "",
      horario_inicio: atividade.horario_inicio || "",
      horario_fim: atividade.horario_fim || "",
      responsavel: atividade.responsavel || "",
      evento_id: atividade.evento_id,
    });
    setShowEditAtividadeModal(true);
  };

  const handleEditAtividadeSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/atividades/${editAtividadeForm.id}`, {
        ...editAtividadeForm,
        cargaHoraria: Number(editAtividadeForm.cargaHoraria) || null,
        vagas: Number(editAtividadeForm.vagas) || null,
      });
      setShowEditAtividadeModal(false);
      showMsg("Atividade atualizada com sucesso!");
      fetchData();
    } catch (err) {
      showMsg(
        err.response?.data?.error || "Erro ao atualizar atividade.",
        "error",
      );
    }
  };

  const handleCheckIn = async () => {
    if (!checkInParticipanteId || !selectedAtividadeId) return;
    try {
      await api.post("/presencas", {
        participante_id: Number(checkInParticipanteId),
        atividade_id: selectedAtividadeId,
        checkIn: new Date().toISOString(),
      });
      setShowCheckInModal(false);
      setCheckInParticipanteId("");
      setSelectedAtividadeId(null);
      showMsg("Check-in registrado com sucesso!");
    } catch (err) {
      showMsg(
        err.response?.data?.error || "Erro ao registrar check-in.",
        "error",
      );
    }
  };

  const handleCancelarInscricao = async (inscricaoId) => {
    if (!window.confirm("Tem certeza que deseja cancelar esta inscrição?"))
      return;
    try {
      await api.put(`/inscricoes/${inscricaoId}`, { status: "cancelada" });
      showMsg("Inscrição cancelada com sucesso!");
      fetchData();
    } catch (err) {
      showMsg(
        err.response?.data?.error || "Erro ao cancelar inscrição.",
        "error",
      );
    }
  };

  const handleConfirmarInscricao = async (inscricaoId) => {
    try {
      await api.put(`/inscricoes/${inscricaoId}`, { status: "confirmada" });
      showMsg("Inscrição confirmada com sucesso!");
      fetchData();
    } catch (err) {
      showMsg(
        err.response?.data?.error || "Erro ao confirmar inscrição.",
        "error",
      );
    }
  };

  const handleLiberarCertificados = async () => {
    setCertLoading(true);
    try {
      const confirmedInscricoes = inscricoes.filter(
        (i) => i.status === "confirmada",
      );
      let count = 0;
      for (const inscricao of confirmedInscricoes) {
        try {
          const codigo = `CERT-${new Date().getFullYear()}-${String(count + 1).padStart(4, "0")}`;
          await api.post("/certificados", {
            codigo,
            cargaHoraria: atividades.reduce(
              (sum, a) => sum + (a.cargaHoraria || 0),
              0,
            ),
            status: "emitido",
            participante_id: inscricao.participante_id,
            evento_id: Number(id),
          });
          count++;
        } catch {}
      }
      setShowCertModal(false);
      showMsg(`${count} certificado(s) emitido(s) com sucesso!`);
    } catch (err) {
      showMsg("Erro ao emitir certificados.", "error");
    } finally {
      setCertLoading(false);
    }
  };

  if (loading) {
    return (
      <OrganizerLayout activePage="events" activeDropdownPage="active">
        <div className="text-gray-500">Carregando...</div>
      </OrganizerLayout>
    );
  }

  if (!evento) {
    return (
      <OrganizerLayout activePage="events" activeDropdownPage="active">
        <div className="text-gray-500">Evento não encontrado.</div>
      </OrganizerLayout>
    );
  }

  return (
    <OrganizerLayout activePage="events" activeDropdownPage="active">
      <div className="space-y-6 max-w-7xl mx-auto">
        {msg && (
          <div
            className={`p-3 rounded-lg text-sm ${msgType === "error" ? "bg-red-50 border border-red-200 text-red-700" : "bg-green-50 border border-green-200 text-green-700"}`}
          >
            {msg}
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <div className="space-y-1">
            <Link
              to="/organizador/eventos"
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
              Voltar para Eventos
            </Link>
            <h2 className="text-2xl md:text-3xl font-extrabold text-pae-text-blue">
              {evento.nome}
            </h2>
            <p className="text-xs md:text-sm text-gray-500">
              {evento.instituicao || ""}{" "}
              {evento.instituicao && evento.dataInicio ? "| " : ""}
              {formatDate(evento.dataInicio)} - {formatDate(evento.dataFim)}
            </p>
          </div>
          <button
            onClick={handleEditEvento}
            className="bg-pae-green-button text-white px-8 py-2.5 rounded-xl font-semibold hover:bg-pae-green-hover transition shadow-md w-full md:w-auto"
          >
            Editar Evento
          </button>
        </div>

        <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
          <nav className="flex space-x-2 md:space-x-4 min-w-max">
            <button
              onClick={() => setActiveTab("activities")}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === "activities" ? "bg-[#3662A4] text-white shadow-md" : "text-gray-500 hover:bg-gray-50"}`}
            >
              Atividades
            </button>
            <button
              onClick={() => setActiveTab("participants")}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === "participants" ? "bg-[#3662A4] text-white shadow-md" : "text-gray-500 hover:bg-gray-50"}`}
            >
              Participantes
            </button>
            <button
              onClick={() => setActiveTab("presencas")}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === "presencas" ? "bg-[#3662A4] text-white shadow-md" : "text-gray-500 hover:bg-gray-50"}`}
            >
              Presenças
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === "certificates" ? "bg-[#3662A4] text-white shadow-md" : "text-gray-500 hover:bg-gray-50"}`}
            >
              Certificados
            </button>
          </nav>
        </div>

        <div className="space-y-6">
          {activeTab === "activities" && (
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-extrabold text-pae-text-blue">
                  Lista de Atividades
                </h3>
                <Link
                  to={`/organizador/evento/${id}/adicionar-atividade`}
                  className="bg-pae-green-button text-white px-5 py-2 rounded-lg text-xs font-semibold hover:bg-pae-green-hover transition flex items-center space-x-1 shadow-sm w-full sm:w-auto justify-center"
                >
                  <span>+</span>
                  <span>Adicionar Atividade</span>
                </Link>
              </div>

              {atividades.length === 0 ? (
                <p className="text-gray-500 text-sm">
                  Nenhuma atividade cadastrada.
                </p>
              ) : (
                <div className="overflow-x-auto -mx-6">
                  <table className="w-full text-left table-auto min-w-[800px]">
                    <thead className="bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider">
                      <tr>
                        <th className="px-4 py-4">Nome</th>
                        <th className="px-4 py-4">Tipo</th>
                        <th className="px-4 py-4">Carga H.</th>
                        <th className="px-4 py-4">Horário</th>
                        <th className="px-4 py-4">Responsável</th>
                        <th className="px-4 py-4">Local</th>
                        <th className="px-4 py-4">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {atividades.map((activity) => (
                        <tr
                          key={activity.id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-4 py-4 text-sm font-semibold text-pae-blue-header">
                            {activity.titulo}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600">
                            {activity.tipo || "-"}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600">
                            {activity.cargaHoraria
                              ? `${activity.cargaHoraria}h`
                              : "-"}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600">
                            {activity.horario_inicio && activity.horario_fim
                              ? `${activity.horario_inicio} - ${activity.horario_fim}`
                              : "-"}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600">
                            {activity.responsavel || "-"}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600">
                            {activity.local || "-"}
                          </td>
                          <td className="px-4 py-4 text-sm space-x-2">
                            <button
                              onClick={() => handleEditAtividade(activity)}
                              className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                              Editar
                            </button>
                            <button
                              onClick={() => handleDeleteAtividade(activity.id)}
                              className="text-red-600 hover:text-red-800 font-medium"
                            >
                              Excluir
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === "participants" && (
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 space-y-6">
              <h3 className="text-xl md:text-2xl font-extrabold text-pae-text-blue">
                Participantes Inscritos
              </h3>
              {inscricoes.length === 0 ? (
                <p className="text-gray-500 text-sm">
                  Nenhuma inscrição encontrada.
                </p>
              ) : (
                <div className="overflow-x-auto -mx-6">
                  <table className="w-full text-left table-auto min-w-[600px]">
                    <thead className="bg-gray-50 text-xs font-bold text-gray-500 uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-4">Participante</th>
                        <th className="px-6 py-4">Data</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {inscricoes.map((inscricao) => (
                        <tr
                          key={inscricao.id}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 text-sm font-semibold text-pae-blue-header">
                            {inscricao.participante_nome ||
                              `#${inscricao.participante_id}`}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">
                            {inscricao.data
                              ? new Date(inscricao.data).toLocaleDateString(
                                  "pt-BR",
                                )
                              : "-"}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-semibold ${inscricao.status === "confirmada" ? "bg-green-100 text-green-700" : inscricao.status === "cancelada" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}
                            >
                              {inscricao.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm space-x-2">
                            {inscricao.status === "pendente" && (
                              <button
                                onClick={() =>
                                  handleConfirmarInscricao(inscricao.id)
                                }
                                className="text-green-600 hover:text-green-800 font-medium"
                              >
                                Confirmar
                              </button>
                            )}
                            {inscricao.status !== "cancelada" && (
                              <button
                                onClick={() =>
                                  handleCancelarInscricao(inscricao.id)
                                }
                                className="text-red-600 hover:text-red-800 font-medium"
                              >
                                Cancelar
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {activeTab === "presencas" && (
            <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 space-y-6">
              <h3 className="text-xl md:text-2xl font-extrabold text-pae-text-blue">
                Registro de Presenças
              </h3>
              <p className="text-sm text-gray-500">
                Selecione uma atividade para registrar o check-in de um
                participante.
              </p>

              {atividades.length === 0 ? (
                <p className="text-gray-500 text-sm">
                  Nenhuma atividade cadastrada. Adicione atividades primeiro.
                </p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {atividades.map((atividade) => (
                    <div
                      key={atividade.id}
                      className="border border-gray-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-gray-800">
                          {atividade.titulo}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {atividade.tipo || ""}{" "}
                          {atividade.horario_inicio
                            ? `| ${atividade.horario_inicio} - ${atividade.horario_fim}`
                            : ""}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedAtividadeId(atividade.id);
                          setShowCheckInModal(true);
                        }}
                        className="bg-[#3662A4] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-blue-700 transition shadow-sm"
                      >
                        Check-in
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "certificates" && (
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 animate-in fade-in duration-300">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                  <svg
                    className="w-10 h-10"
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
                <div className="max-w-md">
                  <h3 className="text-2xl font-extrabold text-pae-text-blue mb-2">
                    Geração de Certificados
                  </h3>
                  <p className="text-sm text-gray-500">
                    Libere os certificados para todos os participantes com
                    inscrição confirmada. Carga horária total:{" "}
                    {atividades.reduce((s, a) => s + (a.cargaHoraria || 0), 0)}h
                  </p>
                </div>
                <button
                  onClick={() => setShowCertModal(true)}
                  className="bg-pae-green-button text-white px-10 py-4 rounded-xl font-bold hover:bg-pae-green-hover transition shadow-md"
                >
                  Liberar Certificados
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Editar Evento</h3>
            <form onSubmit={handleEditEventoSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome
                </label>
                <input
                  type="text"
                  value={editForm.nome}
                  onChange={(e) =>
                    setEditForm({ ...editForm, nome: e.target.value })
                  }
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Instituição / Local
                </label>
                <input
                  type="text"
                  value={editForm.instituicao}
                  onChange={(e) =>
                    setEditForm({ ...editForm, instituicao: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Modalidade
                  </label>
                  <select
                    value={editForm.modalidade}
                    onChange={(e) =>
                      setEditForm({ ...editForm, modalidade: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                  >
                    <option value="presencial">Presencial</option>
                    <option value="online">Online</option>
                    <option value="hibrido">Híbrido</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    value={editForm.status}
                    onChange={(e) =>
                      setEditForm({ ...editForm, status: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                  >
                    <option value="pendente">Pendente</option>
                    <option value="ativo">Ativo</option>
                    <option value="concluido">Concluído</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data Início
                  </label>
                  <input
                    type="date"
                    value={editForm.dataInicio}
                    onChange={(e) =>
                      setEditForm({ ...editForm, dataInicio: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Data Fim
                  </label>
                  <input
                    type="date"
                    value={editForm.dataFim}
                    onChange={(e) =>
                      setEditForm({ ...editForm, dataFim: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="bg-[#3FB65F] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-green-700 transition"
                >
                  Salvar
                </button>
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="border border-gray-300 text-gray-600 px-6 py-2 rounded-lg text-sm hover:bg-gray-50 transition"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showEditAtividadeModal && editAtividadeForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">
              Editar Atividade
            </h3>
            <form onSubmit={handleEditAtividadeSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Título
                </label>
                <input
                  type="text"
                  value={editAtividadeForm.titulo}
                  onChange={(e) =>
                    setEditAtividadeForm({
                      ...editAtividadeForm,
                      titulo: e.target.value,
                    })
                  }
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo
                  </label>
                  <select
                    value={editAtividadeForm.tipo}
                    onChange={(e) =>
                      setEditAtividadeForm({
                        ...editAtividadeForm,
                        tipo: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                  >
                    <option value="palestra">Palestra</option>
                    <option value="workshop">Workshop</option>
                    <option value="mesa_redonda">Mesa Redonda</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Carga Horária (h)
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={editAtividadeForm.cargaHoraria}
                    onChange={(e) =>
                      setEditAtividadeForm({
                        ...editAtividadeForm,
                        cargaHoraria: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Vagas
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={editAtividadeForm.vagas}
                    onChange={(e) =>
                      setEditAtividadeForm({
                        ...editAtividadeForm,
                        vagas: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Local
                  </label>
                  <input
                    type="text"
                    value={editAtividadeForm.local}
                    onChange={(e) =>
                      setEditAtividadeForm({
                        ...editAtividadeForm,
                        local: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Horário Início
                  </label>
                  <input
                    type="time"
                    value={editAtividadeForm.horario_inicio}
                    onChange={(e) =>
                      setEditAtividadeForm({
                        ...editAtividadeForm,
                        horario_inicio: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Horário Fim
                  </label>
                  <input
                    type="time"
                    value={editAtividadeForm.horario_fim}
                    onChange={(e) =>
                      setEditAtividadeForm({
                        ...editAtividadeForm,
                        horario_fim: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Responsável
                </label>
                <input
                  type="text"
                  value={editAtividadeForm.responsavel}
                  onChange={(e) =>
                    setEditAtividadeForm({
                      ...editAtividadeForm,
                      responsavel: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="bg-[#3FB65F] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-green-700 transition"
                >
                  Salvar
                </button>
                <button
                  type="button"
                  onClick={() => setShowEditAtividadeModal(false)}
                  className="border border-gray-300 text-gray-600 px-6 py-2 rounded-lg text-sm hover:bg-gray-50 transition"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showCheckInModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 space-y-4">
            <h3 className="text-xl font-bold text-gray-800">
              Registrar Check-in
            </h3>
            <p className="text-sm text-gray-500">
              Atividade:{" "}
              <strong>
                {atividades.find((a) => a.id === selectedAtividadeId)?.titulo}
              </strong>
            </p>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                ID do Participante
              </label>
              <input
                type="number"
                value={checkInParticipanteId}
                onChange={(e) => setCheckInParticipanteId(e.target.value)}
                placeholder="Ex: 1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
              <p className="text-xs text-gray-400 mt-1">
                Informe o ID do participante (mesmo que o usuario_id)
              </p>
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleCheckIn}
                disabled={!checkInParticipanteId}
                className="bg-[#3662A4] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-blue-700 transition disabled:opacity-50"
              >
                Registrar
              </button>
              <button
                onClick={() => {
                  setShowCheckInModal(false);
                  setCheckInParticipanteId("");
                }}
                className="border border-gray-300 text-gray-600 px-6 py-2 rounded-lg text-sm hover:bg-gray-50 transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {showCertModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 space-y-4 text-center">
            <h3 className="text-xl font-bold text-gray-800">
              Confirmar Emissão
            </h3>
            <p className="text-sm text-gray-500">
              Serão emitidos certificados para{" "}
              <strong>
                {inscricoes.filter((i) => i.status === "confirmada").length}
              </strong>{" "}
              participante(s) com inscrição confirmada. Carga horária total:{" "}
              <strong>
                {atividades.reduce((s, a) => s + (a.cargaHoraria || 0), 0)}h
              </strong>
              .
            </p>
            <div className="flex gap-3 pt-2 justify-center">
              <button
                onClick={handleLiberarCertificados}
                disabled={certLoading}
                className="bg-[#3FB65F] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-green-700 transition disabled:opacity-50"
              >
                {certLoading ? "Emitindo..." : "Confirmar"}
              </button>
              <button
                onClick={() => setShowCertModal(false)}
                disabled={certLoading}
                className="border border-gray-300 text-gray-600 px-6 py-2 rounded-lg text-sm hover:bg-gray-50 transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </OrganizerLayout>
  );
};

export default ManageEventPage;
