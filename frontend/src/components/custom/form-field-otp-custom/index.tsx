import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { FieldValues } from "react-hook-form";
import { FormFieldOTPCustomProps } from "@/types/form/form-field-otp-custom";
import styles from "@/components/custom/form-field.module.scss";

export function FormFieldOTPCustom<T extends FieldValues>({
  control,
  name,
  label,
  description,
}: FormFieldOTPCustomProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={styles.item}>
          <FormLabel className={styles.item__label}>{label}</FormLabel>
          <FormControl>
            <InputOTP maxLength={6} {...field}>
              <InputOTPGroup>
                <InputOTPSlot index={0} className={styles.item__input} />
                <InputOTPSlot index={1} className={styles.item__input} />
                <InputOTPSlot index={2} className={styles.item__input} />
                <InputOTPSlot index={3} className={styles.item__input} />
                <InputOTPSlot index={4} className={styles.item__input} />
                <InputOTPSlot index={5} className={styles.item__input} />
              </InputOTPGroup>
            </InputOTP>
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
