import "./Button.css";

const Button = ({
  label,
  onClick,
  type = "button",
  variant = "primary" || "secondary" || "danger",
  disabled = false,
  icon,
  className,
}) => {
  return (
    <button
      type={type}
      className={`common-button ${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
