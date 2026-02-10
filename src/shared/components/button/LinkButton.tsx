import { Link } from "react-router-dom";

export function LinkButton({ to }: { to: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center px-5 py-2.5 gap-2 rounded-xl hover:text-slate-900 bg-slate-100 hover:bg-slate-100 hover:shadow-slate-500/25 hover:shadow-lg transition-all duration-300 font-medium"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      Cadastrar EPI
    </Link>
  );
}
