import { sideBarConfig } from "@/config/sidebar.config";

import { useCallback, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import type { MenuItemsType } from "./SideBarTypes";

export function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showDeptMenu, setShowDeptMenu] = useState(false);
  const [departments] = useState(sideBarConfig.departaments);
  const [selectedDept, setSelectedDept] = useState<number>(
    sideBarConfig.departaments.find(
      (dpto) =>
        location.pathname.includes(dpto.url) ||
        sideBarConfig.menuItems.find((item) => location.pathname.includes(item.url))?.department_id == dpto.id,
    )?.id ?? 1,
  );

  const [menuItems, setMenuItems] = useState<MenuItemsType[] | []>(
    sideBarConfig.menuItems.filter(
      (item) =>
        item.department_id ==
        sideBarConfig.menuItems.find((item) => location.pathname.includes(item.url))?.department_id,
    ) ?? 1,
  );

  const handleDepartment = (departmentId: number) => {
    setSelectedDept(departmentId);
    setMenuItems(sideBarConfig.menuItems.filter((item) => item.department_id == departmentId));
  };

  const isActive = useCallback(
    (pageUrl: string) => {
      if (!pageUrl) return false;
      return pageUrl == `/${location.pathname.split("/")[1]}`;
    },
    [location],
  );

  return (
    <div className={``}>
      <aside className={`z-50 h-full w-50 lg:w-72 bg-white border-r border-slate-200`}>
        <div className="flex flex-col h-full">
          {/* Logo / Departament */}
          <div className="p-2 lg:p-3 border-b border-slate-100">
            <div className="relative">
              <button
                onClick={() => setShowDeptMenu(!showDeptMenu)}
                className="min-h-12 max-h-12 lg:min-h-20 lg:max-h-20 w-full flex items-center gap-3 rounded-xl"
              >
                <div className="w-6 lg:w-10 h-6 lg:h-10 rounded-sm lg:rounded-md bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <svg
                    className="w-4 lg:w-6 h-4 lg:h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div className="flex-1 text-left min-w-0">
                  <p className="text-sm lg:text-xl font-semibold text-slate-600">
                    {departments.find((d) => d.id == selectedDept)?.name}
                  </p>
                  {/* <p className="text-xs text-slate-500"></p> */}
                </div>
                <svg
                  className={`w-3 lg:w-5 h-3 lg:h-5 text-slate-400 transition-transform shrink-0 ${showDeptMenu ? "rotate-180" : ""}`}
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
                  <div className="absolute flex flex-col gap-2 top-full left-0 right-0 mt-2 mx-0 p-2 bg-white rounded-xl border border-slate-400 shadow-lg z-20 overflow-hidden ">
                    {departments.map((dept) => (
                      <button
                        key={dept.id}
                        onClick={() => {
                          handleDepartment(dept.id);
                          setShowDeptMenu(false);
                          navigate(dept.url);
                        }}
                        className={`text-sm lg:text-base w-full text-left px-4 py-3 hover:bg-slate-100 transition-colors border-b border-slate-100 last:border-b-0 ${
                          selectedDept === dept.id ? "bg-emerald-50 text-emerald-700 font-medium" : "text-slate-700"
                        }`}
                      >
                        {dept.name}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-2 lg:px-3 py-1 lg:py-2 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.url}
                className={`flex items-center gap-3 px-2 lg:px-4 py-1 lg:py-3 rounded-md transition-all duration-200 group ${
                  isActive(item.url) ? "bg-emerald-100 text-emerald-700" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <svg
                  className={`min-w-5 min-h-5 w-5 h-5 ${
                    isActive(item.url) ? "text-emerald-600" : "text-slate-400 group-hover:text-slate-600"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                <span className="text-sm lg:text-md font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-4 py-2 border-t border-slate-300">
            <div className="px-2 py-1 lg:px-4 lg:py-2 rounded-xl bg-slate-50">
              <p className="text-sm lg:text-2xl font-medium text-slate-700">MainFlow </p>
              <p className="text-xs lg:text-md text-slate-500 hidden lg:flex">Gestão operacional</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
