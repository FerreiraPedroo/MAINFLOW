import React from "react";
import { tableConfig } from "./table.config";
import type { TableInput } from "./table.types";

export function Table({ columns, data, onClick }: TableInput) {
  return (
    <div className="bg-white rounded-md border border-slate-400 w-full">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="">
            <tr className="text-left text-xs text-slate-500 uppercase tracking-wide bg-slate-200 border-b border-b-slate-400">
              {columns?.map((column, index) => (
                <th
                  key={column.key}
                  className={`px-2 py-1 font-medium
                    ${!index && "rounded-tl-md pl-4"}
                    ${index == columns.length - 1 && "rounded-tr-md pr-4"}
                    ${tableConfig.size[column.size ?? 1]}
                    ${tableConfig.position?.[column.position ?? "start"]}`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {data?.map((row, index) => (
              <tr
                key={columns[index]?.key}
                onClick={onClick ? () => onClick(row) : undefined}
                className={`text-sm transition-colors ${onClick ? "hover:cursor-pointer hover:bg-blue-100 " : ""}`}
              >
                {columns.map((column, index) => (
                  <td
                    key={column.key}
                    className={`px-2 py-1 text-
                        ${tableConfig.position[column.position ?? "start"]}
                        ${!index && "rounded-bl-md pl-4"}
                        ${index == columns.length - 1 && "rounded-br-md pr-4"}
                        `}
                  >
                    <span className="font-medium text-slate-800">
                      {column.render ? column.render(row) : row[column.key]}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
