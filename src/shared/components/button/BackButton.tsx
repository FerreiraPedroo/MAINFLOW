import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="inline-flex items-center h-10 p-2 gap-2 rounded-xl hover:text-slate-900 hover:bg-slate-100 hover:shadow-slate-500/25 hover:shadow-lg transition-all duration-300 font-medium"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      {/* Voltar */}
    </button>
  );
}
