import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormFieldCustomProps } from "@/types/form/form-field-custom";
import { FieldValues } from "react-hook-form";
import styles from "@/components/custom/form-field.module.scss";

export function FormFieldCustom<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  description,
}: FormFieldCustomProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={styles.item}>
          <FormLabel className={styles.item__label}>{label}</FormLabel>
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              className={styles.item__input}
            />
          </FormControl>
          {description && (
            <FormDescription className={styles.item__description}>
              {description}
            </FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
