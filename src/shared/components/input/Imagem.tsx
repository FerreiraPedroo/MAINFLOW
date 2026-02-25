import React, { useEffect } from "react";
import { gridCols } from "./utils/gridCols";

export function ImagemUpload({
  text,
  name,
  value = "",
  required = true,
  cols = 2,
  setFormValue,
}: {
  text: string;
  name: string;
  value: string;
  required?: boolean;
  cols?: number | string;
  setFormValue: React.Dispatch<React.SetStateAction<any>>;
}) {
  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const selectFile = event.target.files?.[0];
    console.log(selectFile);
    if (!selectFile) return;

    const imageUrl = URL.createObjectURL(selectFile);
    return setFormValue((prev) => ({ ...prev, [name]: imageUrl }));
  };

  // Cleanup image file
  useEffect(() => {
    return () => {
      if (value) {
        URL.revokeObjectURL(value);
      }
    };
  }, [value]);

  const cl = `${gridCols[cols]} bg-white rounded-2xl border border-slate-200 p-6`;

  return (
    <div className={cl}>
      <h2 className="text-lg font-semibold text-slate-800 mb-4">
        {text}
        {required && <span className="text-red-500">*</span>}
      </h2>
      <div className="flex items-center gap-6 flex-wrap">
        <div className="relative">
          {value ? (
            <img
              src={value}
              alt="Pre visualização"
              className="min-w-32 w-32 min-h-32 h-32 rounded-xl ring-4 ring-slate-100 p-1"
            />
          ) : (
            <div className="w-24 h-24 rounded-xl bg-slate-100 flex items-center justify-center p-4">
              <svg width="200" height="150" viewBox="0 0 200 150" fill="none">
                <rect
                  x="0"
                  y="0"
                  width="200"
                  height="150"
                  rx="12"
                  fill="#E5E7EB"
                />
                <circle cx="55" cy="45" r="18" fill="#9CA3AF" />
                <path d="M20 120 L80 70 L120 120 Z" fill="#9CA3AF" />
                <path d="M70 120 L140 50 L200 120 Z" fill="#6B7280" />
                <rect x="0" y="120" width="200" height="30" fill="#9CA3AF" />
              </svg>
            </div>
          )}

          {/* {"uploadingImage" && (
            <div className="absolute inset-0 bg-white/80 rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )} */}
        </div>

        <div>
          <label className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl cursor-pointer transition-colors">
            <svg
              className="min-w-6 w-6 min-h-6 h-6 text-slate-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="font-medium text-slate-700">Escolher imagem</span>
            <input
              name={name}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              required={required}
            />
          </label>
          <p className="text-sm text-slate-500 mt-2">JPG ou PNG, máximo 5MB</p>
        </div>
      </div>
    </div>
  );
}
