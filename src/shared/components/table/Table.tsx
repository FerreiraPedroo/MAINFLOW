import React from "react";
import { useNavigate } from "react-router-dom";

import { tableConfig } from "./table.config";

type Headers = {
  text: string;
  size: number;
  position?: string;
};
type TableInput = {
  headers: Headers[];
  data: {
    url: string;
    urlFieldParam: string;
    rows: Record<string, any>[];
  } | null;
};
/**
 *
 * @param headers [ { text: string, size: number, position?: string} ]
 * @param headers [ { url: string, urlFieldParam: string, rows: Record<string, any>[ ] } ]
 * @returns
 */
export function Table({ headers, data }: TableInput) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-md border border-slate-400 w-full">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="">
            <tr className="text-left text-xs text-slate-500 uppercase tracking-wide bg-slate-200 border-b border-b-slate-400">
              {headers?.map((header, index, array) => (
                <th
                  key={index}
                  className={`px-2 py-1 font-medium
                    ${!index && "rounded-tl-md pl-4"}
                    ${index == array.length - 1 && "rounded-tr-md pr-4"}
                    ${tableConfig.size[header.size]}
                    ${tableConfig.position?.[header.position ?? "start"]}`}
                >
                  {header.text}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {data?.rows?.map((row) => (
              <tr
                key={row[data.urlFieldParam]}
                onClick={() =>
                  navigate(`${data.url}${row[data.urlFieldParam]}`)
                }
                className="text-sm hover:bg-blue-100 transition-colors hover:cursor-pointer"
              >
                {Object.entries(row).map(([key, value], index, array) => (
                  <td
                    key={key}
                    className={`px-2 py-1 text-
                        ${tableConfig.position[headers[index].position ?? ""]}
                        ${!index && "rounded-bl-md pl-4"}
                        ${index == array.length - 1 && "rounded-br-md pr-4"}
                        `}
                  >
                    <span className="font-medium text-slate-800">{value}</span>
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
