import React, { useEffect, useRef, useState } from "react";
import { gridCols } from "../input/utils/gridCols";

const todayData = new Date().toISOString().split("T")[0].split("-");

type Calendar = {
  name: string;
  cols?: number;
  year?: string;
  month?: string;
  text: string;
  hiddenDays: boolean;
  setFormValue?: (p: any) => void | null;
  required?: boolean;
};

export function Calendar({
  name,
  cols = 2,
  year = todayData[0],
  month = todayData[1],
  text = "",
  hiddenDays = true,
  setFormValue = () => null,
  required,
}: Calendar) {
  const calendarElement = useRef<any>(null);
  const [values, setValues] = useState({ year, month });

  // Function to generate the calendar for a specific month and year
  function generateCalendar(year: number, month: number) {
    // Create a date object for the first day of the specified month
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

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
        "text-center py-1 cursor-pointer hover:bg-stone-200";
      dayElement.innerText = `${day}`;

      // Check if this date is the current date
      const currentDate = new Date();
      if (
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth() &&
        day === currentDate.getDate()
      ) {
        dayElement.classList.add("bg-blue-500", "text-white"); // Add classes for the indicator
      }

      dayElement.addEventListener("click", () => {
        const selectedDate = new Date(2026, 5, day);
        const options = {
          weekday: "short",
          year: "2-digit",
          month: "long",
          day: "numeric",
        };
        const formattedDate = selectedDate.toLocaleDateString(
          undefined,
          options,
        );
        showModal(formattedDate);
      });

      calendarElement.current.appendChild(dayElement);
    }
  }

  function handleCalendar(e: any) {
    let month;
    let year;

    if (!e.target.value) {
      year = todayData[0];
      month = todayData[1];
    } else {
      year = e.target.value.split("-")[0];
      month = e.target.value.split("-")[1];
    }

    setFormValue({ year, month });
    setValues({
      year,
      month,
    });
  }

  useEffect(() => {
    generateCalendar(
      new Date(Date.now()).getFullYear(),
      new Date(Date.now()).getMonth(),
    );
  }, []);
  useEffect(() => {
    if (setFormValue) {
      setFormValue((prev: any) => {
        return { ...prev, ...values };
      });
    }
    generateCalendar(values.year, values.month);
  }, [values]);

  return (
    <div className="h-min w-80 flex flex-col items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl shadow-sm p-3 dark:bg-neutral-900 dark:border-neutral-800">
      <div
        className={`flex flex-col w-full justify-center pr-0.5 ${gridCols[cols]}`}
      >
        <label className="block text-sm font-medium text-slate-700 mb-1">
          {text}
        </label>
        <input
          type="month"
          value={`${values.year}-${values.month}`}
          name={name}
          required={required}
          onChange={(e) => handleCalendar(e)}
          className="bg-white py-1 px-2 text-sm rounded-md border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
        />
      </div>

      <div
        ref={calendarElement}
        className={`grid grid-cols-7 gap-0 text-sm text-center ${hiddenDays && "hidden"}`}
      ></div>
    </div>
  );
}
