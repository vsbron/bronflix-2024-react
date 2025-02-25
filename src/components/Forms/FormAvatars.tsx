import { AVATARS } from "@/lib/assets";

import { FormGroup, FormLabelError } from "@/components/Forms/FormElements";

function FormAvatars() {
  // Returned JSX
  return (
    <FormGroup>
      <FormLabelError name="Avatars" />
      <div className="flex gap-2 flex-wrap max-w-[35rem]">
        {AVATARS.map((image: any) => (
          <img src={image.default} width={83} height={83} />
        ))}
      </div>
    </FormGroup>
  );
}

export default FormAvatars;
