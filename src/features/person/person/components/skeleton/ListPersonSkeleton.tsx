export function ListPersonSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className="bg-white rounded-2xl border border-slate-200 p-4 animate-pulse"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-slate-200" />
            <div className="flex-1">
              <div className="h-4 bg-slate-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-slate-200 rounded w-1/2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
