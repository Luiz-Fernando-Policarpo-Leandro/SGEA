import React, { useState, useEffect } from "react";
import ParticipantLayout from "./ParticipanteLayout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import api from "../services/api";

const ParticipantSettingsPage = () => {
  const navigate = useNavigate();
  const { user, logout, updateUser } = useAuth();
  const [formData, setFormData] = useState({ nome: "", email: "" });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/usuarios/${user.id}`);
        setFormData({
          nome: response.data.nome || "",
          email: response.data.email || "",
        });
      } catch {}
    };
    if (user?.id) fetchUser();
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    try {
      const response = await api.put(`/usuarios/${user.id}`, formData);
      updateUser({ nome: response.data.nome, email: response.data.email });
      setMessage("Configurações salvas com sucesso!");
    } catch {
      setMessage("Erro ao salvar configurações.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <ParticipantLayout activePage="configuracoes">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-3xl font-semibold text-[#00707D]">
          Configurações e Perfil
        </h2>

        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-10">
          <div className="flex flex-col items-center space-y-6 md:w-1/3">
            <div className="relative group">
              <div className="w-40 h-40 rounded-full border-4 border-blue-100 shadow-md bg-blue-50 flex items-center justify-center text-blue-600 text-4xl font-bold">
                {formData.nome ? formData.nome.charAt(0).toUpperCase() : "?"}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800">
                {formData.nome || "Usuário"}
              </h3>
              <p className="text-sm text-gray-500">{formData.email}</p>
            </div>

            <button
              onClick={handleLogout}
              className="w-full bg-[#F94D4D] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors shadow-md flex items-center justify-center gap-2"
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
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Sair da Conta
            </button>
          </div>

          <div className="md:w-2/3">
            {message && (
              <div
                className={`mb-4 p-3 rounded-lg text-sm ${message.includes("sucesso") ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"}`}
              >
                {message}
              </div>
            )}
            <form className="space-y-6" onSubmit={handleSave}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Nova Senha
                </label>
                <input
                  type="password"
                  placeholder="Deixe em branco para manter a atual"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      senha: e.target.value || undefined,
                    })
                  }
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={saving}
                  className="bg-[#3FB65F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md text-sm disabled:opacity-50"
                >
                  {saving ? "Salvando..." : "Salvar Alterações"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ParticipantLayout>
  );
};

export default ParticipantSettingsPage;
