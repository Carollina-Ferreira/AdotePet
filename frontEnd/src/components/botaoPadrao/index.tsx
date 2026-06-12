import styles from "./style.module.css";

interface Props {
  text: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function BotaoPadrao({
  text,
  type = "button",
  onClick
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={styles.button}
    >
      {text}
    </button>
  );
}