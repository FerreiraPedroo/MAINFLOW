import type { Epi } from "../../interfaces/epi";
import { ImagemUpload } from "../../../../shared/components/input/Imagem";
import { SelectInput } from "../../../../shared/components/input/SelectInput";
import { Textarea } from "../../../../shared/components/input/Textarea";
import { TextInput } from "../../../../shared/components/input/TextInput";

const inputCompose = [
  {
    type: "text",
    name: "code",
    required: false,
    placeholder: "",
    cols: 1,
    options: [{ id: 1, name: "opção 1" }],
  },
];

export function EpiBasicInfo({
  categories = [],
  loading = false,
  formData,
  setFormData,
}: {
  categories: { id: number; name: string }[];
  loading?: boolean;
  formData: Epi;
  setFormData: React.Dispatch<React.SetStateAction<Epi>>;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6">
      <h2 className="text-lg font-semibold text-slate-800 mb-4">
        Informações Básicas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextInput
          text="Nome do EPI"
          name="name"
          value={formData.name}
          setFormValue={setFormData}
          cols={2}
        />

        <TextInput
          text="Código"
          name="code"
          value={formData.code}
          setFormValue={setFormData}
          required={false}
          cols={1}
        />

        <SelectInput
          text="Categoria"
          name="category"
          value={formData.category_id}
          setFormValue={setFormData}
          options={categories}
          cols={1}
        />

        <Textarea
          text="Descrição"
          name="description"
          placeholder="Descrição detalhada do equipamento..."
          formValue={formData.description}
          setFormValue={setFormData}
          required={true}
          cols={"full"}
        />

        <ImagemUpload
          text="Imagem"
          name="imagem_url"
          value={formData.imagem_url!}
          setFormValue={setFormData}
          required={false}
          cols={"full"}
        />
      </div>
    </div>
  );
}
