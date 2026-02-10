import { gridCols } from "./utils/gridCols";

export function SelectInput({
  text,
  name,
  value = "",
  options = [],
  required = true,
  cols = 2,
  setFormValue,
  hiddenText = false,
}: {
  text: string;
  name: string;
  value: any;
  options: { id: number; name: string }[] | [];
  required?: boolean;
  cols?: number | string;
  setFormValue: React.Dispatch<React.SetStateAction<any>>;
  hiddenText?: boolean;
}) {
  return (
    <div className={gridCols[cols]}>
      <label className={`block text-sm font-medium text-slate-700 mb-1 ${hiddenText && "hidden"}`}>
        {text}
        {required && <span className="text-red-500">*</span>}
      </label>

      <select
        defaultChecked={value}
        name={name}
        required={required}
        onChange={(e) => setFormValue((prev: any) => ({ ...prev, [name]: e.target.value }))}
        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
      >
        <option value="">Selecione...</option>
        {options.map((cat: { id: number; name: string }) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
}
