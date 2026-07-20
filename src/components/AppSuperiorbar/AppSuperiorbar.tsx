import React, { useState } from "react";
import { getImagem } from "@/shared/utils/getImagem";
import { useMenuStore } from "@/app/store/store";
import { useNavigate } from "react-router-dom";

// import { NavUser } from "../AppSidebar/NavUser";

export function AppSuperiorbar() {
  const navigate = useNavigate();
  const departments = useMenuStore((state) => state.departments);
  const departmentSelected = useMenuStore((state) => state.departmentSelected);
  const setDepartmentSelected = useMenuStore(
    (state) => state.setDepartmentSelected,
  );

  const [showDeptMenu, setShowDeptMenu] = useState(false);

  return (
    <div className="z-99 sticky top-0 flex justify-between items-center gap-2 border-b bg-stone-100 max-h-10 min-h-10">
      <div className="border-b border-slate-100 w-50 bg-slate-200 px-1">
        <div className="relative" onMouseLeave={() => setShowDeptMenu(false)}>
          <button
            onClick={() => setShowDeptMenu(!showDeptMenu)}
            className="flex items-center hover:cursor-pointer"
          >
            <div className="flex items-center justify-center w-9 rounded-sm">
              <img src={getImagem("default")} />
            </div>
          </button>

          {showDeptMenu && (
            // <>
            //   <div
            //     className="fixed inset-0 z-10 min-w-60"
            //     onClick={() => setShowDeptMenu(false)}
            //   />
            <div className="w-50 absolute flex flex-col gap-2 left-0 right-0 p-2 bg-white border border-slate-400 shadow-lg overflow-hidden ">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => {
                    setDepartmentSelected(dept);
                    setShowDeptMenu(false);
                    navigate(dept.url);
                  }}
                  className={`text-md w-full text-left px-3 py-2 hover:bg-slate-100 transition-colors border-b border-slate-100 last:border-b-0 ${
                    departmentSelected?.id === dept.id
                      ? "bg-emerald-50 text-emerald-700 font-medium"
                      : "text-slate-700"
                  }`}
                >
                  {dept.title}
                </button>
              ))}
            </div>
            // </>
          )}
        </div>
      </div>
      {/* <SidebarTrigger /> */}
      {/* <Separator
        orientation="vertical"
        className="self-center data-[orientation=vertical]:h-60 mt-2"
      /> */}
      {/* <NavUser user={data.user} /> */}
    </div>
  );
}
