import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import capLogo from "../assets/cap.png";

const IconCap = () => (
  <img src={capLogo} alt="Logo" className="w-8 h-8 mr-3 brightness-0 invert" />
);
const IconUsers = () => (
  <svg
    className="w-5 h-5 mr-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
);
const IconCalendar = () => (
  <svg
    className="w-5 h-5 mr-3"
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
);
const IconPlus = () => (
  <svg
    className="w-5 h-5 mr-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);
const IconChevronDown = () => (
  <svg
    className="w-4 h-4 ml-1"
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
);
const IconShield = () => (
  <svg
    className="w-5 h-5 mr-3"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const AdminLayout = ({ children, activePage, activeDropdownPage }) => {
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(
    activeDropdownPage ? true : false,
  );
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const sidebarLinks = [
    { id: "admin", label: "Painel Admin", icon: IconShield, link: "/admin" },
    {
      id: "create",
      label: "Criar Eventos",
      icon: IconPlus,
      link: "/organizador/criar-evento",
    },
    {
      id: "events",
      label: "Eventos",
      icon: IconCalendar,
      dropdown: [
        {
          id: "active",
          label: "Eventos Ocorrendo",
          link: "/organizador/eventos",
        },
        {
          id: "completed",
          label: "Eventos Concluídos",
          link: "/organizador/eventos-concluidos",
        },
      ],
    },
  ];

  const getSidebarItemClass = (id) => {
    return activePage === id
      ? "flex items-center px-6 py-3 bg-white/10 text-white font-medium"
      : "flex items-center px-6 py-3 hover:bg-white/10 text-white/90";
  };

  const getDropdownItemClass = (id) => {
    return activeDropdownPage === id
      ? "block px-12 py-2 text-sm bg-white/20 text-white font-medium"
      : "block px-12 py-2 text-sm text-white/90 hover:bg-white/10";
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans text-gray-800">
      <header className="bg-[#2C3E50] text-white p-4 flex items-center justify-between shadow-md px-4 md:px-6 z-20">
        <Link to="/" className="flex items-center text-white shrink-0">
          <IconCap />
          <h1 className="text-xl font-medium hidden sm:block">
            Plataforma Acadêmica de Eventos (PAE)
          </h1>
          <h1 className="text-lg font-medium sm:hidden">PAE</h1>
        </Link>
        <div className="flex items-center space-x-2 text-white/90">
          <Link
            to="/organizador/configuracoes"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-200 flex items-center justify-center text-red-700 font-bold border-2 border-white/50 overflow-hidden hover:opacity-80 transition-opacity text-sm"
          >
            {user?.nome ? user.nome.charAt(0).toUpperCase() : "A"}
          </Link>
          <Link
            to="/organizador/configuracoes"
            className="flex items-center text-xs md:text-sm font-medium hover:text-white transition-colors"
          >
            <span className="hidden xs:inline">
              {user?.nome || "Administrador"}
            </span>{" "}
            <IconChevronDown />
          </Link>
          <button
            onClick={handleLogout}
            className="ml-2 text-xs text-white/70 hover:text-white transition-colors"
            title="Sair"
          >
            <svg
              className="w-5 h-5"
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
          </button>
        </div>
      </header>

      <div className="flex flex-grow overflow-hidden flex-col md:flex-row">
        <aside className="w-full md:w-64 bg-[#2C3E50] text-white flex flex-col md:pt-10 shadow-inner z-10 overflow-x-auto md:overflow-y-auto">
          <nav className="flex md:flex-col space-x-1 md:space-x-0 md:space-y-1 p-2 md:p-0">
            {sidebarLinks.map((item) =>
              item.dropdown ? (
                <div
                  key={item.id}
                  className="relative group flex-shrink-0 md:flex-shrink-1"
                >
                  <button
                    onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
                    className="flex w-full items-center justify-between px-4 md:px-6 py-3 hover:bg-white/10 text-white/90"
                  >
                    <div className="flex items-center whitespace-nowrap">
                      <item.icon />{" "}
                      <span className="text-xs md:text-sm">{item.label}</span>
                    </div>
                    <IconChevronDown />
                  </button>
                  {eventsDropdownOpen && (
                    <div className="bg-[#1a252f] md:static absolute left-0 top-full w-full z-30 shadow-lg md:shadow-none">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.id}
                          to={subItem.link}
                          className={getDropdownItemClass(subItem.id)}
                        >
                          <span className="text-xs md:text-sm">
                            {subItem.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.id}
                  to={item.link}
                  className={`${getSidebarItemClass(item.id)} whitespace-nowrap md:whitespace-normal flex-shrink-0`}
                >
                  <item.icon />{" "}
                  <span className="text-xs md:text-sm">{item.label}</span>
                </Link>
              ),
            )}
          </nav>
        </aside>

        <main className="flex-grow bg-slate-50 p-4 md:p-10 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
