import { layoutConfig } from "@/config/config";
import { createPageUrl } from "@/utils/createPageUrl";
import { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function SideBar() {
  const [showDeptMenu, setShowDeptMenu] = useState(false);
  const [selectedDept, setSelectedDept] = useState("Painel");
  const location = useLocation();

  const departamentos = layoutConfig.departaments;
  const menuItems = layoutConfig.menuItems;

  const isActive = useCallback(
    (page: string) => {
      console.log(location);
      return location.pathname.includes(page);
    },
    [location]
  );

  return (
    <div className={``}>
      <aside className={`z-50 h-full w-50 md:w-72 bg-white border-r border-slate-200`}>
        <div className="flex flex-col h-full">
          {/* Logo / Departament */}
          <div className="p-2 md:p-3 border-b border-slate-100">
            <div className="relative">
              <button
                onClick={() => setShowDeptMenu(!showDeptMenu)}
                className="min-h-12 md:min-h-20 w-full flex items-center gap-4 rounded-xl"
              >
                <div className="w-6 md:w-10 h-6 md:h-10 rounded-sm md:rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <svg className="w-4 md:w-6 h-4 md:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-sm md:text-xl font-semibold text-slate-600">{selectedDept}</p>
                  {/* <p className="text-xs text-slate-500"></p> */}
                </div>
                <svg
                  className={`w-3 md:w-5 h-3 md:h-5 text-slate-400 transition-transform shrink-0 ${showDeptMenu ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {showDeptMenu && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setShowDeptMenu(false)} />
                  <div className="absolute top-full left-0 right-0 mt-2 mx-2 p-2 bg-white rounded-xl border border-slate-200 shadow-lg z-20 overflow-hidden">
                    {departamentos.map((dept) => (
                      <button
                        key={dept}
                        onClick={() => {
                          setSelectedDept(dept);
                          setShowDeptMenu(false);
                        }}
                        className={`text-sm md:text-base w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-b-0 ${
                          selectedDept === dept ? "bg-emerald-50 text-emerald-700 font-medium" : "text-slate-700"
                        }`}
                      >
                        {dept}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 md:px-3 py-1 md:py-2 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <Link
                key={item.page}
                to={createPageUrl(item.page)}
                className={`flex items-center gap-3 px-2 md:px-4 py-1 md:py-3 rounded-md transition-all duration-200 group ${
                  isActive(item.page) ? "bg-emerald-100 text-emerald-700" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <svg
                  className={`min-w-5 min-h-5 w-5 h-5 ${
                    isActive(item.page) ? "text-emerald-600" : "text-slate-400 group-hover:text-slate-600"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                <span className="text-sm md:text-md font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-4 py-2 border-t border-slate-300">
            <div className="px-2 py-1 md:px-4 md:py-2 rounded-xl bg-slate-50">
              <p className="text-sm md:text-2xl font-medium text-slate-700">MainFlow </p>
              <p className="text-xs md:text-md text-slate-500 hidden md:flex">Gestão operacional</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
