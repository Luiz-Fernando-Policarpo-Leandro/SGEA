import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import backgroundImg from "../assets/background.png";
import capLogo from "../assets/cap.png";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const nome = e.target.name.value;
    const email = e.target.email.value;
    const senha = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const userType = e.target.userType.value;

    if (senha !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setLoading(true);

    try {
      const usuarioResponse = await api.post("/usuarios", {
        nome,
        email,
        senha,
      });
      const usuarioId = usuarioResponse.data.id;

      if (userType === "participant") {
        await api.post("/participantes", {
          usuario_id: usuarioId,
          categoria: "aluno",
        });
      } else {
        await api.post("/coordenadores", { usuario_id: usuarioId });
      }

      navigate("/login");
    } catch (err) {
      setError(
        err.response?.data?.error || "Erro ao cadastrar. Tente novamente.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col font-sans bg-cover bg-center bg-no-repeat transition-all"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${backgroundImg})`,
      }}
    >
      <header className="bg-[#3662A4] text-white p-4 flex items-center shadow-md z-10">
        <Link to="/" className="flex items-center text-white">
          <img
            src={capLogo}
            alt="Logo"
            className="w-8 h-8 mr-3 brightness-0 invert"
          />
          <h1 className="text-xl font-medium">
            Plataforma Acadêmica de Eventos (PAE)
          </h1>
        </Link>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 md:p-6 relative overflow-hidden z-0">
        <div className="absolute inset-0 opacity-10 flex items-center justify-between px-4 md:px-20 pointer-events-none">
          <div className="flex flex-col space-y-8 items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-300 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col space-y-8 items-center hidden sm:flex">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow-200 rounded-full flex items-center justify-center transform -rotate-12">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-300 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 md:w-10 md:h-10 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.167a2.404 2.404 0 01.382-2.244l4.083-4.85a1.76 1.76 0 011.099-.588zM15.118 19.24a1.76 1.76 0 01-3.417-.592V5.882a1.76 1.76 0 011.099.588l4.083 4.85a2.404 2.404 0 01.382 2.244l-2.147 6.167z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-2xl w-full max-w-md relative z-10 mx-auto border border-white/50">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#00707D] text-center mb-6 md:mb-10">
            Cadastro
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg">
              {error}
            </div>
          )}

          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="nome completo"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm bg-white/70"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm bg-white/70"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  minLength={4}
                  placeholder="**********"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm bg-white/70"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirme a Senha
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  minLength={4}
                  placeholder="**********"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm bg-white/70"
                />
              </div>
            </div>

            <div>
              <span className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Usuário:
              </span>
              <div className="flex items-center space-x-4">
                <label className="inline-flex items-center text-sm">
                  <input
                    type="radio"
                    name="userType"
                    value="organizer"
                    defaultChecked
                    className="form-radio h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
                  />
                  <span className="ml-2 text-gray-800">Organizador</span>
                </label>
                <label className="inline-flex items-center text-sm">
                  <input
                    type="radio"
                    name="userType"
                    value="participant"
                    className="form-radio h-4 w-4 text-green-600 border-gray-300 focus:ring-green-500"
                  />
                  <span className="ml-2 text-gray-800">Participante</span>
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#3FB65F] text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-150 shadow-md text-lg disabled:opacity-50"
              >
                {loading ? "Cadastrando..." : "Cadastrar"}
              </button>
            </div>
          </form>

          <div className="mt-8 text-center text-xs text-gray-600">
            Ja tem uma conta?{" "}
            <Link
              to="/login"
              className="font-medium text-[#00707D] hover:underline"
            >
              Entre
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
