import React, { useState, useEffect } from "react";
import api from "../services/api";
import AdminLayout from "./AdminLayout";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("usuarios");
  const [usuarios, setUsuarios] = useState([]);
  const [coordenadores, setCoordenadores] = useState([]);
  const [administradores, setAdministradores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [form, setForm] = useState({
    usuario_id: "",
    nome: "",
    email: "",
    senha: "",
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const [uRes, cRes, aRes] = await Promise.all([
        api.get("/usuarios"),
        api.get("/coordenadores"),
        api.get("/administradores"),
      ]);
      setUsuarios(uRes.data);
      setCoordenadores(cRes.data);
      setAdministradores(aRes.data);
    } catch (err) {
      setMsg("Erro ao carregar dados.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = (type) => {
    setModalType(type);
    setForm({ usuario_id: "", nome: "", email: "", senha: "" });
    setShowModal(true);
    setMsg("");
  };

  const handleAddCoordenador = async () => {
    try {
      await api.post("/coordenadores", { usuario_id: Number(form.usuario_id) });
      setMsg("Coordenador adicionado com sucesso!");
      setShowModal(false);
      fetchData();
    } catch (err) {
      setMsg(err.response?.data?.error || "Erro ao adicionar coordenador.");
    }
  };

  const handleAddAdministrador = async () => {
    try {
      await api.post("/administradores", {
        usuario_id: Number(form.usuario_id),
      });
      setMsg("Administrador adicionado com sucesso!");
      setShowModal(false);
      fetchData();
    } catch (err) {
      setMsg(err.response?.data?.error || "Erro ao adicionar administrador.");
    }
  };

  const handleCreateUser = async () => {
    try {
      await api.post("/usuarios", {
        nome: form.nome,
        email: form.email,
        senha: form.senha,
      });
      setMsg("Usuário criado com sucesso!");
      setShowModal(false);
      fetchData();
    } catch (err) {
      setMsg(err.response?.data?.error || "Erro ao criar usuário.");
    }
  };

  const handleDeleteUser = async (id) => {
    if (!window.confirm("Tem certeza que deseja excluir este usuário?")) return;
    try {
      await api.delete(`/usuarios/${id}`);
      setMsg("Usuário excluído com sucesso!");
      fetchData();
    } catch (err) {
      setMsg(err.response?.data?.error || "Erro ao excluir usuário.");
    }
  };

  const handleRemoveCoordenador = async (usuario_id) => {
    if (!window.confirm("Remover este coordenador?")) return;
    try {
      await api.delete(`/coordenadores/${usuario_id}`);
      setMsg("Coordenador removido com sucesso!");
      fetchData();
    } catch (err) {
      setMsg(err.response?.data?.error || "Erro ao remover coordenador.");
    }
  };

  const handleRemoveAdministrador = async (usuario_id) => {
    if (!window.confirm("Remover este administrador?")) return;
    try {
      await api.delete(`/administradores/${usuario_id}`);
      setMsg("Administrador removido com sucesso!");
      fetchData();
    } catch (err) {
      setMsg(err.response?.data?.error || "Erro ao remover administrador.");
    }
  };

  const handleSubmitModal = () => {
    if (modalType === "coordenador") return handleAddCoordenador();
    if (modalType === "administrador") return handleAddAdministrador();
    if (modalType === "usuario") return handleCreateUser();
  };

  const tipoBadge = (tipo) => {
    const colors = {
      administrador: "bg-red-100 text-red-700",
      coordenador: "bg-blue-100 text-blue-700",
      participante: "bg-green-100 text-green-700",
      sem_perfil: "bg-gray-100 text-gray-500",
    };
    const labels = {
      administrador: "Administrador",
      coordenador: "Coordenador",
      participante: "Participante",
      sem_perfil: "Sem Perfil",
    };
    return (
      <span
        className={`px-2 py-0.5 rounded-full text-xs font-medium ${colors[tipo] || colors.sem_perfil}`}
      >
        {labels[tipo] || tipo}
      </span>
    );
  };

  const tabs = [
    { id: "usuarios", label: "Usuários" },
    { id: "coordenadores", label: "Coordenadores" },
    { id: "administradores", label: "Administradores" },
  ];

  return (
    <AdminLayout activePage="admin">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#2C3E50] mb-6">
          Painel de Administração
        </h2>

        {msg && (
          <div
            className={`mb-4 p-3 rounded-lg text-sm ${msg.includes("sucesso") ? "bg-green-50 border border-green-200 text-green-700" : "bg-red-50 border border-red-200 text-red-700"}`}
          >
            {msg}
          </div>
        )}

        <div className="flex gap-2 mb-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setMsg("");
              }}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-[#2C3E50] text-[#2C3E50]"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-gray-500">Carregando...</p>
        ) : (
          <>
            {activeTab === "usuarios" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Todos os Usuários
                  </h3>
                  <button
                    onClick={() => handleOpenModal("usuario")}
                    className="bg-[#2C3E50] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1a252f] transition-colors"
                  >
                    + Novo Usuário
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-gray-600">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">ID</th>
                        <th className="px-4 py-3 text-left font-medium">
                          Nome
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Email
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Tipo
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Ações
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {usuarios.map((u) => (
                        <tr key={u.id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-500">{u.id}</td>
                          <td className="px-4 py-3 font-medium">{u.nome}</td>
                          <td className="px-4 py-3 text-gray-600">{u.email}</td>
                          <td className="px-4 py-3">{tipoBadge(u.tipo)}</td>
                          <td className="px-4 py-3">
                            <button
                              onClick={() => handleDeleteUser(u.id)}
                              className="text-red-500 hover:text-red-700 text-xs font-medium"
                            >
                              Excluir
                            </button>
                          </td>
                        </tr>
                      ))}
                      {usuarios.length === 0 && (
                        <tr>
                          <td
                            colSpan={5}
                            className="px-4 py-8 text-center text-gray-400"
                          >
                            Nenhum usuário encontrado.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "coordenadores" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Coordenadores
                  </h3>
                  <button
                    onClick={() => handleOpenModal("coordenador")}
                    className="bg-[#2C3E50] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1a252f] transition-colors"
                  >
                    + Adicionar Coordenador
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-gray-600">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">
                          Usuário ID
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Nome
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Email
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Ações
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {coordenadores.map((c) => (
                        <tr key={c.usuario_id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-500">
                            {c.usuario_id}
                          </td>
                          <td className="px-4 py-3 font-medium">{c.nome}</td>
                          <td className="px-4 py-3 text-gray-600">{c.email}</td>
                          <td className="px-4 py-3">
                            <button
                              onClick={() =>
                                handleRemoveCoordenador(c.usuario_id)
                              }
                              className="text-red-500 hover:text-red-700 text-xs font-medium"
                            >
                              Remover
                            </button>
                          </td>
                        </tr>
                      ))}
                      {coordenadores.length === 0 && (
                        <tr>
                          <td
                            colSpan={4}
                            className="px-4 py-8 text-center text-gray-400"
                          >
                            Nenhum coordenador encontrado.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "administradores" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Administradores
                  </h3>
                  <button
                    onClick={() => handleOpenModal("administrador")}
                    className="bg-[#2C3E50] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#1a252f] transition-colors"
                  >
                    + Adicionar Administrador
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50 text-gray-600">
                      <tr>
                        <th className="px-4 py-3 text-left font-medium">
                          Usuário ID
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Nome
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Email
                        </th>
                        <th className="px-4 py-3 text-left font-medium">
                          Ações
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {administradores.map((a) => (
                        <tr key={a.usuario_id} className="hover:bg-gray-50">
                          <td className="px-4 py-3 text-gray-500">
                            {a.usuario_id}
                          </td>
                          <td className="px-4 py-3 font-medium">{a.nome}</td>
                          <td className="px-4 py-3 text-gray-600">{a.email}</td>
                          <td className="px-4 py-3">
                            <button
                              onClick={() =>
                                handleRemoveAdministrador(a.usuario_id)
                              }
                              className="text-red-500 hover:text-red-700 text-xs font-medium"
                            >
                              Remover
                            </button>
                          </td>
                        </tr>
                      ))}
                      {administradores.length === 0 && (
                        <tr>
                          <td
                            colSpan={4}
                            className="px-4 py-8 text-center text-gray-400"
                          >
                            Nenhum administrador encontrado.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}

        {showModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {modalType === "usuario"
                  ? "Novo Usuário"
                  : modalType === "coordenador"
                    ? "Adicionar Coordenador"
                    : "Adicionar Administrador"}
              </h3>

              {modalType === "usuario" ? (
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      value={form.nome}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, nome: e.target.value }))
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Senha
                    </label>
                    <input
                      type="password"
                      value={form.senha}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, senha: e.target.value }))
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ID do Usuário
                  </label>
                  <select
                    value={form.usuario_id}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, usuario_id: e.target.value }))
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2C3E50]"
                  >
                    <option value="">Selecione um usuário</option>
                    {usuarios
                      .filter((u) => {
                        if (modalType === "coordenador")
                          return (
                            u.tipo !== "coordenador" &&
                            u.tipo !== "administrador"
                          );
                        if (modalType === "administrador")
                          return u.tipo !== "administrador";
                        return true;
                      })
                      .map((u) => (
                        <option key={u.id} value={u.id}>
                          {u.id} — {u.nome} ({u.email}) [{u.tipo}]
                        </option>
                      ))}
                  </select>
                </div>
              )}

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleSubmitModal}
                  className="flex-1 bg-[#2C3E50] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#1a252f] transition-colors"
                >
                  {modalType === "usuario" ? "Criar" : "Adicionar"}
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminPage;
