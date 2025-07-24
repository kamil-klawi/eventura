import { Control, FieldPath, FieldValues } from "react-hook-form";

export interface FormFieldOTPCustomProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  description?: string;
}
