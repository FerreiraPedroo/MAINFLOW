export function DetailsPersonMainCardSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
      <div className="bg-white rounded-2xl border border-slate-200 p-4 animate-pulse">
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-xl bg-slate-200" />
          <div className="flex-1">
            <div className="h-8 bg-slate-200 rounded w-3/4 mb-2" />
            <div className="h-10 bg-slate-200 rounded w-1/2" />
          </div>
        </div>
        <div>
          <hr className="mx-2 my-6 border-slate-200" />
          <div className="flex gap-4">
            <div className="h-20 bg-slate-200 rounded w-1/4" />
            <div className="h-20 bg-slate-200 rounded w-1/4" />
            <div className="h-20 bg-slate-200 rounded w-1/4" />
            <div className="h-20 bg-slate-200 rounded w-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
}
