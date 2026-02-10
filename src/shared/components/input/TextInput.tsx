import { gridCols } from "./utils/gridCols";

export function TextInput({
  text,
  name,
  required = true,
  placeholder = "",
  cols = 2,
  value = "",
  setFormValue,
}: {
  text: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  cols?: number | string;
  value: any;
  setFormValue: React.Dispatch<React.SetStateAction<any>>;
}) {
  return (
    <div className={gridCols[cols]}>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {text}
        {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type="text"
        name={name}
        required={required}
        value={value}
        onChange={(e) => setFormValue((prev: any) => ({ ...prev, [name]: e.target.value }))}
        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
        placeholder={`${placeholder && "Ex: " + placeholder}`}
      />
    </div>
  );
}
