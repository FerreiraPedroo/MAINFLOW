import React, { useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { getImagem } from "@/shared/utils/getImagem";
import { useMenuStore } from "@/app/store/store";
import { ChevronDown } from "lucide-react";

export function AppSideBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const departmentSelected = useMenuStore((state) => state.departmentSelected);

  const isActive = useCallback(
    (pageUrl: string) => {
      if (!pageUrl) return false;
      const pathName = location.pathname;
      const wordRegex = new RegExp("^" + pathName + "$", "i").test(pageUrl);
      return wordRegex;
    },
    [location],
  );

  return (
    <aside className={`min-w-50 bg-stone-100 border-r border-slate-200`}>
      <div className="flex flex-col h-full">
        <header>
          <p className="font-medium text-center p-3 select-none ">
            {departmentSelected?.title}
          </p>
        </header>
        {/* Navigation */}
        <nav className="flex-1 space-y-1 ">
          {departmentSelected?.activities?.map((activity) =>
            "activities" in activity ? (
              <details
                key={activity.title}
                className="group/menu [&_summary::-webkit-details-marker]:hidden"
              >
                <summary
                  className={`p-0 m-0 flex transition-all duration-200 group-hover/menu:cursor-pointer`}
                >
                  <div
                    className={`flex w-full activitys-center pl-3 pr-1 py-2 group-hover/menu:bg-stone-200 hover:bg-stone-200`}
                  >
                    <div className="w-full flex gap-2 activitys-center">
                      <img src={getImagem(activity.icon)} className="w-6" />
                      <span className="text-sm">{activity.title}</span>
                    </div>
                    <ChevronDown className="w-4 group-open/menu:-rotate-180 transition-transform duration-300" />
                  </div>
                </summary>

                {activity.activities?.map((sectorActivity) => (
                  <Link
                    key={sectorActivity.title}
                    to={sectorActivity.url}
                    className={`group/sector relative flex activitys-center gap-1 pl-6 py-1 transition-all duration-200 hover:cursor-pointer hover:bg-stone-200 z-0`}
                  >
                    <svg
                      xmlns="http://www.w3.org"
                      viewBox="0 0 16 24"
                      width="16"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      className="stroke-current "
                    >
                      <path d="M 1 5 L 1 14 L 8 14" />
                    </svg>
                    <span className="text-sm">{sectorActivity.title}</span>
                  </Link>
                ))}
              </details>
            ) : (
              <Link
                key={activity.title}
                to={activity.url}
                className={`group/activitys relative flex transition-all duration-200 hover:cursor-pointer`}
              >
                <div
                  className={`flex w-full activitys-center gap-2 pl-3 pr-1 py-2 group-hover/activitys:bg-stone-200`}
                >
                  <img src={getImagem(activity.icon)} className="w-6" />
                  <span className="text-sm">{activity.title}</span>
                </div>
              </Link>
            ),
          )}
        </nav>

        {/* Footer */}
        <div className="p-2 border-t border-slate-300 bg-slate-200">
          <p className="text-lg font-medium text-slate-700">Diferencial Flow</p>
          {/* <p className="text-md text-slate-500 hidden flex">
              Gestão operacional
            </p> */}
        </div>
      </div>
    </aside>
  );
}
