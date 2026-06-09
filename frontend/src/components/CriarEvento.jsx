import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrganizerLayout from "./OrganizadorLayout";
import api from "../services/api";

const CreateEventFormPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const nome = e.target.eventName.value;
    const instituicao = e.target.eventLocation.value;
    const modalidade = e.target.eventModality.value;
    const dataInicio = e.target.eventDate.value;
    const dataFim = e.target.eventEndDate.value || dataInicio;

    try {
      await api.post("/eventos", {
        nome,
        instituicao,
        modalidade,
        dataInicio,
        dataFim,
        status: "pendente",
      });
      navigate("/organizador/eventos");
    } catch (err) {
      setError(err.response?.data?.error || "Erro ao criar evento.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <OrganizerLayout activePage="create">
      <div className="max-w-7xl mx-auto flex justify-center pt-6">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-2xl border border-gray-100">
          <h2 className="text-3xl font-semibold text-[#00707D] mb-10">
            Criar Evento
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
              {error}
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="eventName"
                className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center"
              >
                Nome do Evento <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="eventName"
                name="eventName"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="eventDate"
                  className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center"
                >
                  Data de Início <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="eventEndDate"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Data de Fim
                </label>
                <input
                  type="date"
                  id="eventEndDate"
                  name="eventEndDate"
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="eventLocation"
                  className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center"
                >
                  Local / Instituição{" "}
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="eventLocation"
                  name="eventLocation"
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="eventModality"
                  className="block text-sm font-medium text-gray-700 mb-1.5 flex items-center"
                >
                  Modalidade <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  id="eventModality"
                  name="eventModality"
                  required
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg shadow-inner focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
                >
                  <option value="presencial">Presencial</option>
                  <option value="online">Online</option>
                  <option value="hibrido">Híbrido</option>
                </select>
              </div>
            </div>

            <div className="pt-8">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#3FB65F] text-white py-3.5 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-150 shadow-md text-xl disabled:opacity-50"
              >
                {loading ? "Cadastrando..." : "Cadastrar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </OrganizerLayout>
  );
};

export default CreateEventFormPage;
