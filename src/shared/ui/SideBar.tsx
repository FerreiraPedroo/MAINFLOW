import React, { useCallback, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import type { MenuItemsType } from "./SideBarTypes";

import { sideBarConfig } from "@config/sidebar.config";
import { getImagem } from "@/shared/utils/getImagem";

export function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showDeptMenu, setShowDeptMenu] = useState(false);
  const [departments] = useState(sideBarConfig.departaments);
  const [selectedDept, setSelectedDept] = useState<number>(
    sideBarConfig.departaments.find(
      (dpto) =>
        location.pathname.includes(dpto.url) ||
        sideBarConfig.menuItems.find((item) =>
          location.pathname.includes(item.url),
        )?.department_id == dpto.id,
    )?.id ?? 1,
  );

  const [menuItems, setMenuItems] = useState<MenuItemsType[] | []>(
    sideBarConfig.menuItems.filter(
      (item) =>
        item.department_id ==
        sideBarConfig.menuItems.find((item) =>
          location.pathname.includes(item.url),
        )?.department_id,
    ) ?? 1,
  );

  const handleDepartment = (departmentId: number) => {
    setSelectedDept(departmentId);
    setMenuItems(
      sideBarConfig.menuItems.filter(
        (item) => item.department_id == departmentId,
      ),
    );
  };

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
    <div className={``}>
      <aside
        className={`z-50 h-full w-50 lg:w-60 bg-white border-r border-slate-200`}
      >
        <div className="flex flex-col h-full">
          {/* Logo / Departament */}
          <div className="p-2 lg:p-3 border-b border-slate-100">
            <div className="relative">
              <button
                onClick={() => setShowDeptMenu(!showDeptMenu)}
                className="min-h-12 max-h-12 lg:min-h-20 lg:max-h-20 w-full flex items-center gap-3 rounded-xl"
              >
                <div className="flex items-center justify-center w-8 lg:w-12 h-6 lg:h-10 rounded-sm">
                  <img
                    src={getImagem(
                      departments.find((d) => d.id == selectedDept)
                        ?.icon as string,
                    )}
                  />
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {showDeptMenu && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setShowDeptMenu(false)}
                  />
                  <div className="absolute flex flex-col gap-2 top-full left-0 right-0 mt-2 mx-0 p-2 bg-white rounded-xl border border-slate-400 shadow-lg z-20 overflow-hidden ">
                    {departments.map((dept) => (
                      <button
                        key={dept.id}
                        onClick={() => {
                          handleDepartment(dept.id);
                          setShowDeptMenu(false);
                          navigate(dept.url);
                        }}
                        className={`text-sm lg:text-lg w-full text-left px-4 py-3 hover:bg-slate-100 transition-colors border-b border-slate-100 last:border-b-0 ${
                          selectedDept === dept.id
                            ? "bg-emerald-50 text-emerald-700 font-medium"
                            : "text-slate-700"
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
          <nav className="flex-1 px-1 lg:px-2 py-1 lg:py-2 space-y-1 overflow-x-hidden overflow-y-auto">
            {menuItems.map((item) => (
              <div key={item.name} className="group">
                <div
                  className={`flex rounded-md transition-all duration-200 group-hover:text-slate-800 ${
                    isActive(item.url)
                      ? "bg-blue-100 text-blue-900"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <Link
                    to={item.url}
                    className={`flex w-full items-center gap-3 px-2 lg:px-4 py-1 lg:py-3 rounded-md`}
                  >
                    <img src={getImagem(item.icon)} className="w-6" />
                    <span className="text-sm lg:text-md font-medium">
                      {item.name}
                    </span>
                  </Link>
                  {item.subMenu?.length ? (
                    <label
                      className={`inline-flex items-center cursor-pointer`}
                    >
                      <input type="checkbox" className="peer sr-only" />

                      <div className="w-6 h-full flex items-center justify-center transition-transform duration-300 peer-checked:rotate-180">
                        <svg
                          className="w-4 h-4  text-gray-600 transition-transform duration-300 peer-checked:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </label>
                  ) : (
                    ""
                  )}
                </div>

                <div className="transition-transform duration-300 ease-in-out hidden group-has-[input:checked]:block">
                  {item.subMenu?.map((submenu) => (
                    <Link
                      key={submenu.name}
                      to={submenu.url}
                      className={`flex items-center gap-0 pl-5 pr-2 py-1 lg:pl-6 lg:pr-4 lg:py-2 rounded-md transition-all duration-200 hover:text-slate-900 ${
                        isActive(submenu.url)
                          ? "bg-blue-100 text-blue-900"
                          : "text-slate-600 hover:bg-slate-100"
                      }`}
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

                      <span className="text-sm lg:text-md font-medium">
                        {submenu.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-4 py-2 border-t border-slate-300">
            <div className="px-2 py-1 lg:px-4 lg:py-2 rounded-xl bg-slate-50">
              <p className="text-sm lg:text-2xl font-medium text-slate-700">
                Diferencial Flow
              </p>
              <p className="text-xs lg:text-md text-slate-500 hidden lg:flex">
                Gestão operacional
              </p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
