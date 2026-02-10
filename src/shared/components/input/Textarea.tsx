import { gridCols } from "./utils/gridCols";

export function Textarea({
  text,
  name,
  required = true,
  placeholder,
  cols = 2,
  formValue = "",
  setFormValue,
}: {
  text: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  cols?: number | string;
  formValue: any;
  setFormValue: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className={gridCols[cols]}>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {text}
        {required && <span className="text-red-500">*</span>}
      </label>

      <textarea
        value={formValue[name]}
        name={name}
        onChange={(e) => setFormValue((prev: any) => ({ ...prev, [name]: e.target.value }))}
        rows={3}
        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
        placeholder={placeholder}
      />
    </div>
  );
}
