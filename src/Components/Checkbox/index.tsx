import { Check } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  checked?: boolean;
}

export function Checkbox({ checked = false, ...props }: CheckboxProps) {
  if (checked) {
    return (
      <button className={styles.checkboxActive} {...props}>
        <Check size={12} color="white" fontWeight="700" />
      </button>
    );
  }

  return <button className={styles.checkbox} {...props} />;
}
