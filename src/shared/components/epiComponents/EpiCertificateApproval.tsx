import type { Epi } from "../../../features/safety/interfaces/epi";
import { CheckInput } from "../input/CheckInput";
import { DateInput } from "../input/DateInput";
import { TextInput } from "../input/TextInput";

export function EpiCertificateApproval({
  formData,
  setFormData,
}: {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<Epi>>;
}) {
  console.log(formData);
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6">
      <h2 className="text-lg font-semibold text-slate-800 mb-4">Certificado de aprovação (CA)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput text="Número do CA" name="ca" value={formData.ca} setFormValue={setFormData} cols={1} />

        <DateInput
          text="Data de validade"
          name="expiration_date"
          value={formData.expiration_date}
          setFormValue={setFormData}
          cols={1}
        />

        <TextInput
          text="Fabricante"
          name="manufacturer"
          value={formData.manufacturer}
          setFormValue={setFormData}
          required={false}
          cols={"full"}
        />

        <CheckInput text="Ativo" name="active" value={formData.active} setFormValue={setFormData} />
      </div>
    </div>
  );
}
