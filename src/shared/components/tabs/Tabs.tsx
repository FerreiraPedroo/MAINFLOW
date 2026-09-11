import React from "react";

export type TabType = {
  label: string;
  icon?: React.ReactNode;
};

export type TabsTypes = {
  tabs: TabType[];
  tabSelected: TabType | null;
  setTabSelected: React.Dispatch<React.SetStateAction<TabType | null>>;
};

export function Tabs({ tabs = [], tabSelected, setTabSelected }: TabsTypes) {
  return (
    <div className="px-4 pt-1 pb-2 border-b border-slate-200">
      <ul className="inline-flex  border-slate-200 gap-2 font-medium text-md text-slate-600">
        {tabs.map((tab) => (
          <li key={tab.label}>
            <button
              onClick={() => setTabSelected(tab)}
              className={`relative flex gap-1 items-center rounded-lg py-1.5 px-3.5 cursor-pointer transition-colors hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                tabSelected?.label == tab.label
                  ? "text-blue-600 bg-slate-100"
                  : "border-transparent"
              }`}
            >
              {tab.icon}
              <p>{tab.label}</p>
            </button>
          </li>
        ))}
      </ul>
      {/* Tab Panels */}
      {/* <div className="px-3">
        <div
          className={`tab-content max-w-2xl mt-8 ${activeTab === "tab.id" ? "block" : "hidden"}`}
        >
          <h4 className="text-base font-semibold text-slate-900 dark:text-slate-50">
            {"tab.title"}
          </h4>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed dark:text-slate-400">
            {"tab.content"}
          </p>
        </div>
      </div> */}
    </div>
  );
}
