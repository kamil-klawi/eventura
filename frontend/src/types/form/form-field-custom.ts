import { HTMLInputTypeAttribute } from "react";
import { Control, FieldPath, FieldValues } from "react-hook-form";

export interface FormFieldCustomProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  description?: string;
}
