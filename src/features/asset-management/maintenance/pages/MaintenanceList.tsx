import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { apiClient } from "@/shared/lib/apiClient";
import {
  getMonthWeeks,
  getWeek,
  type GetMonthWeeks,
} from "@/shared/utils/date";

import { useSnackBar } from "@/app/provider/SnackBarProvider";

import { Header } from "@shared/components/header/Header";
import { Container } from "@/shared/components/Container";
import { Calendar } from "@/shared/components/calendar/Calendar";

import { BlockSection } from "@/shared/components/block-section/BlockSection";
import { StatusBadge } from "@/shared/components/badge/StatusBadge";
import { SelectInput } from "@/shared/components";

import type { Maintenance } from "../types/maintenance.type";
import { MaintenanceDetailsModal } from "../components/MaintenanceDetailsModal";

// const maintenanceList = [
//   {
//     id: 1,
//     code: "12345678",
//     equipment: "Bebedouro",
//     localization: "2º - BLOCO B - Corredor frente a rampa",
//     //activity: "Troca de filtro",
//     type: "Preventiva",
//     scheduled_date: "26/03/2026",
//     building: "BS - SEDE",
//     cost_center: "0100401301	Obras",
//     status: "Pendente",
//   },
//   {
//     id: 2,
//     code: "901234",
//     equipment: "Bebedouro",
//     localization: "CG IV - BLOCO B - 2º - Corredor frente a rampa",
//     //activity: "Troca de filtro",
//     type: "Preventiva",
//     scheduled_date: "26/03/2026",
//     building: "BS - SEDE",
//     cost_center: "0100401301	Obras",
//     status: "Pendente",
//   },
//   {
//     id: 3,
//     code: "12345678",
//     equipment: "Bebedouro",
//     localization: "BS SEDE - BLOCO B - 2º - Corredor frente a rampa",
//     //activity: "Troca de filtro",
//     type: "Corretiva",
//     scheduled_date: "26/03/2026",
//     building: "BS - SEDE",
//     cost_center: "0100401301	Obras",
//     status: "Pendente",
//   },
//   {
//     id: 4,
//     code: "901234",
//     equipment: "Bebedouro",
//     localization: "BS SEDE - BLOCO B - 2º - Corredor frente a rampa",
//     //activity: "Troca de filtro",
//     type: "Preventiva",
//     scheduled_date: "26/03/2026",
//     building: "BS - SEDE",
//     cost_center: "0100401301	Obras",
//     status: "Pendente",
//   },
//   {
//     id: 5,
//     code: "12345678",
//     equipment: "Bebedouro",
//     localization: "BS POLEM - 2º - BLOCO B - Corredor frente a rampa",
//     //activity: "Troca de filtro",
//     type: "Emergencial",
//     scheduled_date: "26/03/2026",
//     building: "BS - SEDE",
//     cost_center: "0100401301	Obras",
//     status: "Pendente",
//   },
//   {
//     id: 6,
//     code: "901234",
//     equipment: "Bebedouro",
//     localization: "BGS - 2º - BLOCO B - Corredor frente a rampa",
//     //activity: "Troca de filtro",
//     type: "Preditiva",
//     scheduled_date: "26/03/2026",
//     building: "BS - SEDE",
//     cost_center: "0100401301	Obras",
//     status: "Pendente",
//   },
// ];

const today = new Date();

export function MaintenanceList() {
  const navigate = useNavigate();
  const calendarElement = useRef<any>(null);
  const snackBar = useSnackBar();

  const [exibition, setExibition] = useState("Semanal");

  const [weekSelected, setWeekSelected] = useState(1);
  const [weeks, setWeeks] = useState<GetMonthWeeks>([]);

  const [dateSelected, setDateSelected] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });

  const [loading, setLoading] = useState(true);
  const [maintenanceList, setMaintenanceList] = useState<Maintenance[]>([]);
  const [maintenanceSelected, setMaintenanceSelected] =
    useState<Maintenance | null>();

  function generateCalendar(year: number, month: number) {
    // Create a date object for the first day of the specified month
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month, 0).getDate();

    // Clear the calendar
    calendarElement!.current!.innerHTML = "";

    // Calculate the day of the week for the first day of the month (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // Create headers for the days of the week
    const daysOfWeek = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
    daysOfWeek.forEach((day) => {
      const dayElement = document.createElement("div");
      dayElement.className = "text-xs text-center font-semibold";
      dayElement.innerText = day;
      calendarElement.current.appendChild(dayElement);
    });

    // Create empty boxes for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      const emptyDayElement = document.createElement("div");
      calendarElement.current.appendChild(emptyDayElement);
    }

    // Create boxes for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement("div");
      dayElement.className =
        "h-12 md:h-20 text-center md:text-xl rounded py-3 md:py-7 cursor-pointer hover:bg-slate-300";
      dayElement.innerText = `${day}`;

      // Check if this date is the current date
      const currentDate = new Date();
      if (
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth() + 1 &&
        day === currentDate.getDate()
      ) {
        dayElement.classList.add("bg-blue-500", "text-white"); // Add classes for the indicator
      }

      dayElement.addEventListener("click", () => {
        const selectedDate = new Date(year, month, day);
        const formattedDate = selectedDate.toLocaleDateString(undefined, {
          weekday: "short",
          year: "2-digit",
          month: "long",
          day: "numeric",
        });

        // showModal(formattedDate);
      });

      calendarElement.current.appendChild(dayElement);
    }
  }
  function changeSelectedWeek(index: number) {
    if (index != weekSelected) {
      setWeekSelected(index);
      getMaintenanceList(index);
    }
  }
  function getMaintenanceList(weekNumber: number) {
    setLoading(true);
    apiClient(
      `/facilities/maintenance?year=${dateSelected.year}&month=${dateSelected.month}&week=${weekNumber}`,
      { method: "GET" },
    )
      .then((result) => {
        setLoading(false);
        setMaintenanceList(result);
      })
      .catch((error) => {
        setLoading(false);
        setMaintenance([]);
        snackBar.showSnackBar(
          "Erro recarrege a página.",
          error.message,
          "fail",
        );
      });
  }
  function openMaintenance(maintenance: Maintenance | null) {
    setMaintenanceSelected(maintenance);
  }

  // ALTERAÇÃO DO MÊS, MUDAR A LISTA DA SEMANA E A SEMANA SELECIONADA.
  useEffect(() => {
    const isActualMonth = today.getMonth() == dateSelected.month;

    const weekNumber = isActualMonth
      ? getWeek(dateSelected.year, dateSelected.month, today.getDate())
      : 0;
    if (exibition == "Semanal") {
      setWeeks(getMonthWeeks(dateSelected.year, dateSelected.month));
      setWeekSelected(weekNumber);
      getMaintenanceList(weekNumber);
    } else {
      generateCalendar(dateSelected.year, dateSelected.month);
      getMaintenanceList(-1);
    }
  }, [dateSelected, exibition]);

  return (
    <Container>
      <div className="h-full w-full space-y-4">
        <div className="flex flex-col md:flex-row justify-between gap-1">
          <div className="w-full md:w-2/5 space-y-4 ">
            <Header
              title="Manutenção"
              backButton={false}
              subTitle="Cadastre e gerencie manutenção."
            />
          </div>
          <BlockSection className="flex gap-8">
            <SelectInput
              name="exibition"
              text="Modo de exibição"
              required={false}
              value={"Semanal"}
              defaultOption={false}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                setExibition(e.target.value);
              }}
              cols={4}
              options={["Semanal", "Mensal"]}
            />
            <Calendar
              name={"data"}
              text="Selecione o mês"
              onChange={({ year, month }: { year: string; month: string }) => {
                setDateSelected({
                  year: Number(year),
                  month: Number(month),
                });
              }}
              hiddenDays={true}
            />
          </BlockSection>
        </div>

        {exibition == "Mensal" && (
          <div
            ref={calendarElement}
            className={`rounded grid grid-cols-7 text-base px-2 py-4 gap-0 text-center bg-slate-200 border-slate-300 shadow-slate-500 shadow-sm ${exibition != "Mensal" && "hidden"}`}
          ></div>
        )}

        {exibition == "Semanal" && (
          <div className="w-full flex gap-4">
            <div className="border-r border-gray-200">
              <div className="w-28 -me flex flex-col gap-1">
                {weeks?.map((week, idx) => {
                  return (
                    <button
                      key={week.startWeekDay}
                      onClick={() => changeSelectedWeek(idx)}
                      disabled={loading}
                      className={`border-r-2 px-4 py-2 text-left text-sm font-medium transition-colors cursor-pointer disabled:bg-slate-200 disabled:text-slate-300 disabled:border-blue-100 disabled:cursor-default ${weekSelected == idx ? " text-blue-600 border-blue-600 hover:text-blue-700" : " text-gray-600 border-transparent  hover:text-gray-700"}`}
                    >
                      <p
                        className={`text-inherit text-sm leading-4 text-center`}
                      >
                        {idx + 1}ª Semana
                      </p>
                      <p className="text-inherit text-xs leading-4 text-center">
                        {new Date(
                          dateSelected.year,
                          dateSelected.month,
                          week.startWeekDay,
                        )
                          .toLocaleDateString()
                          .split("/")
                          .toSpliced(2)
                          .join("/")}
                        {" a "}
                        {new Date(
                          dateSelected.year,
                          dateSelected.month,
                          week.lastWeekDay,
                        )
                          .toLocaleDateString()
                          .split("/")
                          .toSpliced(2)
                          .join("/")}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="w-full overflow-x-auto overflow-hidden">
              <div className="grid grid-cols-12 gap-2">
                {!maintenanceList.length && (
                  <div className="p-10 col-span-12 text-center">
                    Não agendamento
                  </div>
                )}
                {maintenanceList.map((maintenance) => {
                  return (
                    <div
                      key={maintenance.id}
                      className="col-span-12 w-full flex gap-4 border rounded-sm border-slate-300 shadow-sm px-3 py-2 bg-slate-100 select-none cursor-pointer hover:shadow-md"
                      onClick={() => openMaintenance(maintenance)}
                    >
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-3 items-center ">
                          <p className="font-medium text-sm text-center">
                            ORDEM DE SERVIÇO {maintenance.id}58798
                          </p>
                        </div>
                        <img src="../" className="w-39 h-34 self-center" />
                      </div>

                      <div className="w-full space-y-2">
                        <div className="flex ">
                          <div className="flex gap-1">
                            <p className="min-w-32 w-32 text-end text-md text-slate-500">
                              Data de abertura:
                            </p>
                            <p>
                              {new Date(
                                maintenance.open_date,
                              ).toLocaleDateString()}
                            </p>
                          </div>
                          {maintenance.finish_date && (
                            <div className="flex gap-1 w-full">
                              <p className="min-w-28 w-28 text-end text-md text-slate-500">
                                Finalizado:
                              </p>
                              <p>
                                {new Date(
                                  maintenance.finish_date,
                                ).toLocaleDateString()}
                              </p>
                            </div>
                          )}
                          <div className="flex w-full justify-end gap-1">
                            <p className="min-w-26 w-26 text-end text-md text-slate-500">
                              Status:
                            </p>
                            <p>
                              {maintenance.status ? (
                                <StatusBadge
                                  variant={maintenance.status}
                                  text={maintenance.status}
                                  size={1}
                                />
                              ) : (
                                "-"
                              )}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-1">
                          <p className="min-w-32 w-32 text-end text-md text-slate-500">
                            Localização:
                          </p>
                          <p>
                            <span>{maintenance.localization.title}</span>
                            {" - "}
                            {maintenance.localization.address?.short_address}
                            {" - "}
                            {maintenance.localization.block?.title}
                            {" - "}
                            {maintenance.localization.floor?.title}
                            {" - "}
                            {maintenance.localization.space_type?.title}
                          </p>
                        </div>

                        <div className="flex gap-1">
                          <p className="min-w-32 w-32 text-end text-md text-slate-500">
                            Especialidade:
                          </p>
                          <p>{maintenance.classification}</p>
                        </div>

                        <div className="flex gap-1">
                          <p className="min-w-32 w-32 text-end text-md text-slate-500">
                            Prioridade:
                          </p>
                          <p>{maintenance.priority ?? "-"}</p>
                        </div>

                        <div className="flex gap-1">
                          <p className="min-w-32 w-32 text-end text-md text-slate-500">
                            Descrição:
                          </p>
                          <p className="line-clamp-2 w-full">
                            {maintenance.description}{" "}
                            {maintenance.localization.address?.short_address}{" "}
                            {maintenance.localization.title}{" "}
                            {maintenance.classification}{" "}
                            {maintenance.localization.address?.short_address}{" "}
                            {maintenance.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {maintenanceSelected && (
          <MaintenanceDetailsModal
            maintenanceSelected={maintenanceSelected}
            closeModal={() => openMaintenance(null)}
          />
        )}
      </div>
    </Container>
  );
}
