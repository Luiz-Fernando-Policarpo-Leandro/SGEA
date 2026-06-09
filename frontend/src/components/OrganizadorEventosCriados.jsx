import React, { useState, useEffect } from "react";
import OrganizerLayout from "./OrganizadorLayout";
import DashboardEventCard from "./Eventos";
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

const OrganizerCreatedEventsPage = () => {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await api.get("/eventos");
        const ativos = response.data.filter(
          (e) => e.status === "ativo" || e.status === "pendente",
        );
        setEventos(ativos);
      } catch {
        setEventos([]);
      } finally {
        setLoading(false);
      }
    };
    fetchEventos();
  }, []);

  const mapped = eventos.map((e) => ({
    id: e.id,
    title: e.nome,
    location: e.instituicao || e.modalidade || "",
    date: `${formatDate(e.dataInicio)} - ${formatDate(e.dataFim)}`,
    hours: "",
    editable: true,
  }));

  return (
    <OrganizerLayout activePage="events" activeDropdownPage="active">
      <div className="space-y-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#00707D]">
          Eventos Criados
        </h2>

        {loading ? (
          <p className="text-gray-500">Carregando...</p>
        ) : mapped.length === 0 ? (
          <p className="text-gray-500">Nenhum evento ativo encontrado.</p>
        ) : (
          <div className="space-y-6">
            {mapped.map((event) => (
              <DashboardEventCard key={event.id} {...event} />
            ))}
          </div>
        )}
      </div>
    </OrganizerLayout>
  );
};

export default OrganizerCreatedEventsPage;
