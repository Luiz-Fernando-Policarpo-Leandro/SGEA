import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import OrganizerLayout from "./OrganizadorLayout";
import api from "../services/api";

const AddActivityFormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [eventoNome, setEventoNome] = useState("");

  React.useEffect(() => {
    api
      .get(`/eventos/${id}`)
      .then((res) => setEventoNome(res.data.nome))
      .catch(() => {});
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api.post("/atividades", {
        titulo: e.target.activityName.value,
        tipo: e.target.activityType.value,
        cargaHoraria: Number(e.target.activityHours.value) || 0,
        vagas: Number(e.target.activitySlots.value) || null,
        local: e.target.activityLocation.value || "",
        horario_inicio: e.target.startTime.value || null,
        horario_fim: e.target.endTime.value || null,
        responsavel: e.target.responsible.value || "",
        evento_id: Number(id),
      });
      navigate(`/organizador/evento/${id}`);
    } catch (err) {
      setError(err.response?.data?.error || "Erro ao adicionar atividade.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <OrganizerLayout activePage="events" activeDropdownPage="active">
      <div className="space-y-6">
        <div className="space-y-1">
          <Link
            to="/organizador/eventos"
            className="text-xs text-gray-500 hover:text-pae-blue-header transition-colors"
          >
            {"<"} Voltar para Eventos {"<"}{" "}
            <span className="font-semibold text-pae-blue-header">
              {eventoNome || "Evento"}
            </span>
          </Link>
          <h2 className="text-3xl font-extrabold text-pae-text-blue">
            Adicionar Atividade
          </h2>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
            {error}
          </div>
        )}

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 max-w-2xl mx-auto space-y-6 relative">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="activityName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome da Atividade
              </label>
              <input
                id="activityName"
                name="activityName"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="activityType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tipo
              </label>
              <select
                id="activityType"
                name="activityType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
                required
              >
                <option value="" disabled selected>
                  Selecione
                </option>
                <option value="palestra">Palestra</option>
                <option value="workshop">Workshop</option>
                <option value="mesa_redonda">Mesa Redonda</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="activityHours"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Carga Horária (h)
                </label>
                <input
                  id="activityHours"
                  name="activityHours"
                  type="number"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
                />
              </div>
              <div>
                <label
                  htmlFor="activitySlots"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Vagas
                </label>
                <input
                  id="activitySlots"
                  name="activitySlots"
                  type="number"
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="activityLocation"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Local
              </label>
              <input
                id="activityLocation"
                name="activityLocation"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="startTime"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Horário de Início
                </label>
                <div className="relative">
                  <input
                    id="startTime"
                    name="startTime"
                    type="time"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="endTime"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Horário de Fim
                </label>
                <div className="relative">
                  <input
                    id="endTime"
                    name="endTime"
                    type="time"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="responsible"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Responsável
              </label>
              <input
                id="responsible"
                name="responsible"
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pae-green-button text-white py-3 px-4 rounded-md font-semibold hover:bg-pae-green-hover transition text-lg disabled:opacity-50"
            >
              {loading ? "Adicionando..." : "Adicionar Atividade"}
            </button>
          </form>
        </div>
      </div>
    </OrganizerLayout>
  );
};

export default AddActivityFormPage;
