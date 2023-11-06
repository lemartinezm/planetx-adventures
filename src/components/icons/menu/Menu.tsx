import "./styles.css";

interface MenuSvgProps {
  className?: string;
  isOpen?: boolean;
  onClick?: () => void;
}

export default function MenuSvg({
  isOpen,
  className = "",
  onClick = () => {},
}: MenuSvgProps) {
  const currentClassName = `toggle-menu ${className}`;
  return (
    <button
      className={isOpen ? `${currentClassName} active` : currentClassName}
      onClick={onClick}
    >
      <i></i>
      <i></i>
      <i></i>
    </button>
  );
}
