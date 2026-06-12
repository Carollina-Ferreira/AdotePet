import styles from "./style.module.css";

interface Props {
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  placeholder: string;
  type?: string;
}

export default function InputPadrao({
  value,
  onChange,
  placeholder,
  type = "text"
}: Props) {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  );
}